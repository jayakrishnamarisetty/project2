let data = [  
    { name: 'John', age: 18, email: 'john@example.com' },  
    { name: 'Rajesh', age: 19, email: 'rajesh@example.com' },  
    { name: 'Raju', age: 20, email: 'raju@example.com' }  
];  

function createTable() {
    let rug = document.getElementById("dataTable");
    if (rug) {
        rug.remove(); 
    }
    let table = document.createElement("table");
    table.id = "dataTable";

    let headerRow = document.createElement("tr");
    let headers = ["Name", "Age", "Email"];
    for (let i = 0; i < headers.length; i++) {
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(headers[i]));
        td.classList.add("header");
        headerRow.appendChild(td);
    }
    table.appendChild(headerRow);
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        cell1.appendChild(document.createTextNode(data[i].name));
        cell2.appendChild(document.createTextNode(data[i].age));
        cell3.appendChild(document.createTextNode(data[i].email));
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function jk() {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let email = prompt("Enter email:");

    if (name && age && email) {
        data.push({ name: name, age: parseInt(age), email: email });
        createTable();
    } else {
        alert("All fields are required!");
    }
}
window.onload = createTable;
function jk(){
    var z=document.createElement("button")
    
}
