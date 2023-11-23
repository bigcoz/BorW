function handleCellClick(cell) {
  // Check if the clicked cell is in the Tuesday column (index 2 in the row)
  if (cell.cellIndex === 2) {
    // Set the currentCell variable to keep track of the clicked cell
    currentCell = cell;

    // Load the previously selected value from local storage
    var storedValue = localStorage.getItem('tableData') ? JSON.parse(localStorage.getItem('tableData'))[currentCell.id] : null;
    if (storedValue) {
      document.getElementById('modalInput').value = storedValue;
    }

    // Display the modal
    document.getElementById('myModal').style.display = 'block';
  }
}

// Function to save the selected value to the table cell and local storage
function saveSelectedValue() {
  var modalInput = document.getElementById('modalInput');
  var selectedValue = modalInput.value;

  // Check if a cell was clicked
  if (currentCell) {
    // Save the selected value to the table cell
    currentCell.textContent = selectedValue;

    // Save the entire table data to local storage
    saveTableData();

    // Close the modal
    document.getElementById('myModal').style.display = 'none';
  }
}

window.addEventListener('load', function() {
  if (typeof(Storage) !== "undefined") {
    // Load the entire table data from local storage
    loadTableData();
  } else {
    console.error("Local storage is not supported");
  }
});

var cells = document.querySelectorAll('#locationTable tbody td');
cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    handleCellClick(cell);
  });
});

// 클릭한 셀을 추적하는 변수
var currentCell;

// 테이블 데이터 전체를 로컬 스토리지에 저장하는 함수
function saveTableData() {
  const tableData = [];

  const rows = document.querySelectorAll("#locationTable tbody tr");
  rows.forEach((row) => {
    const rowData = [];

    // th 셀을 선택에서 제외합니다.
    const cells = row.querySelectorAll("td");
    cells.forEach((cell, cellIndex) => {
      if (cellIndex > 0) { // 첫 번째 셀은 th 셀이므로 제외
        rowData.push(cell.textContent);
      }
    });

    tableData.push(rowData);
  });

  localStorage.setItem("tableData", JSON.stringify(tableData));
}

// 로컬 스토리지에서 전체 테이블 데이터를 로드하는 함수
function loadTableData() {
  const storedData = localStorage.getItem("tableData");

  if (storedData) {
    const tableData = JSON.parse(storedData);

    const rows = document.querySelectorAll("#locationTable tbody tr");
    rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll("td");
      cells.forEach((cell, cellIndex) => {
        if (cellIndex > 0) { // 첫 번째 셀은 th 셀이므로 제외
          cell.textContent = tableData[rowIndex][cellIndex - 1];
        }
      });
    });
  }
}

document.getElementById('myModal').addEventListener('click', function(event) {
  // Check if the clicked element is the modal overlay itself
  if (event.target === this) {
    // Close the modal
    document.getElementById('myModal').style.display = 'none';
  }
});
