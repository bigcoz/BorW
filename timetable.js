// 셀 클릭 핸들러
function handleCellClick(cell) {
  currentCell = cell;

  var storedValue = localStorage.getItem(cell.id) || "";
  document.getElementById("modalInput").value = storedValue;

  document.getElementById("myModal").style.display = "block";
}

// 셀에 대한 이벤트 리스너 추가
var cells = document.querySelectorAll("#locationTable tbody td");
cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    handleCellClick(cell);
  });
});

// 선택된 값을 저장하는 함수
function saveSelectedValue() {
  var modalInput = document.getElementById("modalInput");
  var selectedValue = modalInput.value;

  if (currentCell) {
    currentCell.textContent = selectedValue;
    localStorage.setItem(currentCell.id, selectedValue);

    document.getElementById("myModal").style.display = "none";
  }
}

// 페이지 로드 시 테이블 데이터 불러오기
window.addEventListener("load", function () {
  cells.forEach(function (cell) {
    var storedValue = localStorage.getItem(cell.id);
    if (storedValue) {
      cell.textContent = storedValue;
    }
  });
});

// 테이블 데이터 전체를 로컬 스토리지에 저장하는 함수
function saveTableData() {
  const tableData = {};

  const rows = document.querySelectorAll("#locationTable tbody tr");
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell) => {
      tableData[cell.id] = cell.textContent; // 모든 셀의 데이터를 저장
    });
  });

  localStorage.setItem("tableData", JSON.stringify(tableData));
}

// 로컬 스토리지에서 전체 테이블 데이터를 로드하는 함수
function loadTableData() {
  const storedData = localStorage.getItem("tableData");

  if (storedData) {
    const tableData = JSON.parse(storedData);

    const rows = document.querySelectorAll("#locationTable tbody tr");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      cells.forEach((cell) => {
        const cellData = tableData[cell.id];
        if (cellData) {
          cell.textContent = cellData; // 모든 셀의 데이터를 불러오기
        }
      });
    });
  }
}

document.getElementById("myModal").addEventListener("click", function (event) {
  // Check if the clicked element is the modal overlay itself
  if (event.target === this) {
    // Close the modal
    document.getElementById("myModal").style.display = "none";
  }
});
