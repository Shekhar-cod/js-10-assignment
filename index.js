let selectedRow = null

function onformSubmit(){
    
    let formData = readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData)
    resetForm();
    
   
}

function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["EMAIL"] = document.getElementById("EMAIL").value;
    formData["CITY"] = document.getElementById("CITY").value;
    formData["STATE"] = document.getElementById("STATE").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.EMAIL;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.CITY;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.STATE;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
                       

}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("EMAIL").value = "";
    document.getElementById("CITY").value = "";
    document.getElementById("STATE").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("EMAIL").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CITY").value = selectedRow.cells[2].innerHTML;
    document.getElementById("STATE").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.EMAIL;
    selectedRow.cells[2].innerHTML = formData.CITY;
    selectedRow.cells[3].innerHTML = formData.STATE;

}



