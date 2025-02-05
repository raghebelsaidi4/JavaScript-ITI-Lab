document.getElementById('generateTableBtn').addEventListener('click', () => {
    let name, birthYear, age;

    // Validate Name
    while (true) {
        name = prompt("Enter your name:");
        if (name && isNaN(name)) break;
        alert("Please enter a valid name.");
    }

    // Validate Birth Year
    while (true) {
        birthYear = prompt("Enter your birth year (must be less than 2010):");
        if (birthYear && !isNaN(birthYear) && birthYear < 2010) break;
        alert("Please enter a valid birth year (less than 2010).");
    }

    // Calculate Age
    age = new Date().getFullYear() - birthYear;

    // Create Table Data
    const tableData = [
        ["Name", name],
        ["Birth year", birthYear],
        ["Age", age]
    ];

    // Generate Table
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');

    tableData.forEach(rowData => {
        const row = document.createElement('tr');

        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    tableContainer.innerHTML = ""; 
    tableContainer.appendChild(table);
});
