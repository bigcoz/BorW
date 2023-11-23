function handleCellClick(cell) {
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

// Variable to keep track of the clicked cell
var currentCell;

// Function to save the entire table data to local storage
function saveTableData() {
  const tableData = [];

  const rows = document.querySelectorAll("#locationTable tbody tr");
  rows.forEach((row) => {
    const rowData = [];

    const cells = row.querySelectorAll("td");
    cells.forEach((cell) => {
      rowData.push(cell.textContent);
    });

    tableData.push(rowData);
  });

  localStorage.setItem("tableData", JSON.stringify(tableData));
}

// Function to load the entire table data from local storage
function loadTableData() {
  const storedData = localStorage.getItem("tableData");

  if (storedData) {
    const tableData = JSON.parse(storedData);

    const rows = document.querySelectorAll("#locationTable tbody tr");
    rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll("td");
      cells.forEach((cell, cellIndex) => {
        cell.textContent = tableData[rowIndex][cellIndex];
      });
    });
  }
}
