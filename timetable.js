
    document.addEventListener('DOMContentLoaded', function() {
      // Retrieve values from local storage on page load
      loadTableValues();

      // Add event listeners to table cells
      const table = document.getElementById('locationTable');
      table.addEventListener('input', function(event) {
        const cell = event.target;
        const row = cell.parentElement.rowIndex;
        const col = cell.cellIndex;
        const value = cell.textContent.trim();

        // Update local storage with the new value
        updateLocalStorage(row, col, value);
      });
    });

    // Function to load table values from local storage
    function loadTableValues() {
      for (let row = 1; row < 17; row++) {
        for (let col = 1; col < 8; col++) {
          const cellValue = localStorage.getItem(`cell_${row}_${col}`);
          if (cellValue !== null) {
            document.getElementById('locationTable').rows[row].cells[col].textContent = cellValue;
          }
        }
      }
    }

    // Function to update local storage with a new cell value
    function updateLocalStorage(row, col, value) {
      localStorage.setItem(`cell_${row}_${col}`, value);
    }
