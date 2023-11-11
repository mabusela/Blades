function sortTable() {
    const table = document.getElementById('goalTable');
    const rows = Array.from(table.rows).slice(1); // Exclude header row
    const sortedRows = rows.sort((a, b) => {
        const goalsA = parseInt(a.querySelector('.goalCount').textContent, 10);
        const goalsB = parseInt(b.querySelector('.goalCount').textContent, 10);
        return goalsB - goalsA;
    });

    // Clear the table
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Append sorted rows
    sortedRows.forEach(row => table.appendChild(row));
}

document.getElementById('goalFilter').addEventListener('input', function () {
    const filterValue = parseInt(this.value, 10);

    const rows = document.querySelectorAll('#goalTable tr');
    for (const row of rows) {
        const goalCell = row.querySelector('.goalCount');
        if (goalCell) {
            const goals = parseInt(goalCell.textContent, 10);
            if (isNaN(filterValue) || goals >= filterValue) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }

    // Sort the table after filtering
    sortTable();
});

// Initial sort when the page loads
sortTable();