let data = [
    { name: 'John', age: 18, email: 'john@example.com' },
    { name: 'Rajesh', age: 19, email: 'rajesh@example.com' },
    { name: 'Raju', age: 20, email: 'raju@example.com' },
    { name: 'mahi', age: 25, email: 'mahi@gmail.com' },
    { name: 'chandhu', age: 26, email: 'adapa@gmail.com' },
    { name: 'siddhu', age: 65, email: 'reddy@gmail.com' }
];

let tableCreated = false;

function jk() {
    if (!tableCreated) {
        createTable();
        tableCreated = true;
    } else {
        addRow();
    }
}

function createTable() {
    let table = document.createElement("table");
    table.id = "dataTable";

    let headerRow = document.createElement("tr");
    let headers = ["Name", "Age", "Email", "Actions"];
    for (let i = 0; i < headers.length; i++) {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(headers[i]));
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        cell1.textContent = data[i].name;
        cell2.textContent = data[i].age;
        cell3.textContent = data[i].email;

        let actionCell = document.createElement("td");

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        updateButton.onclick = function() {
            updateRow(row, i);
        };
        actionCell.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            deleteRow(i);
        };
        actionCell.appendChild(deleteButton);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(actionCell);
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function addRow() {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let email = prompt("Enter email:");

    if (name && age && email) {
        data.push({ name: name, age: parseInt(age), email: email });
        let table = document.getElementById("dataTable");
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        cell1.textContent = name;
        cell2.textContent = age;
        cell3.textContent = email;

        let actionCell = document.createElement("td");

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        updateButton.onclick = function() {
            updateRow(row, data.length - 1);
        };
        actionCell.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            deleteRow(data.length - 1);
        };
        actionCell.appendChild(deleteButton);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(actionCell);
        table.appendChild(row);
    } else {
        alert("All fields are required!");
    }
}

function updateRow(row, index) {
    let name = prompt("Update name:", data[index].name);
    let age = prompt("Update age:", data[index].age);
    let email = prompt("Update email:", data[index].email);

    if (name && age && email) {
        data[index] = { name: name, age: parseInt(age), email: email };
        row.cells[0].textContent = name;
        row.cells[1].textContent = age;
        row.cells[2].textContent = email;
    } else {
        alert("All fields are required!");
    }
}

function deleteRow(index) {
    data.splice(index, 1);
    let table = document.getElementById("dataTable");
    table.deleteRow(index + 1); 
}