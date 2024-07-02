document.addEventListener('DOMContentLoaded', function () {
    const selectAllCheckbox = document.getElementById('selectAllitem');
    const selectedValuesParagraph = document.getElementById('selected-values');
    const checkboxes = document.querySelectorAll('input[name="item"]');

    const selectedTableBody = document.querySelector('#selectedTable tbody');

    const itemsPerRow = 3;

    selectAllCheckbox.addEventListener('change', function () {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
        updateSelectedItems();
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedItems);
    });


    function updateSelectedItems() {
        // Clear current selected items
        selectedTableBody.innerHTML = '';

        // Get all checked items


        const selectedItems = Array.from(document.querySelectorAll('input[name="item"]:checked'));

        // If any item is selected, populate the table in rows of `itemsPerRow` columns
        if (selectedItems.length > 0) {
            let row = document.createElement('tr');
            selectedItems.forEach((item, index) => {
                const cell = document.createElement('td');
                cell.textContent = item.value;
                row.appendChild(cell);

                // If the row is full or it is the last item, append the row to the table
                if ((index + 1) % itemsPerRow === 0 || index === selectedItems.length - 1) {
                    selectedTableBody.appendChild(row);
                    row = document.createElement('tr');
                }
            });
        }
    }
});