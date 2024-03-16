let selectedRow = null

function onformSubmit(){
    
    let formData = readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData)
    resetForm();
    
   
}
//getting accesss to the HTML element by getElementById
function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["EMAIL"] = document.getElementById("EMAIL").value;
    formData["CITY"] = document.getElementById("CITY").value;
    formData["STATE"] = document.getElementById("STATE").value;
    return formData;
}
//creating new function to pass above formData
//Accesing HTML tBody element by getElementByTagName('tbody')
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
   //adding onClick function and creating onEdit(this) to edit elements on our form 
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
                       

}
//creating function name resetform to reset the value in the form of our website
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("EMAIL").value = "";
    document.getElementById("CITY").value = "";
    document.getElementById("STATE").value = "";
    selectedRow = null;
}
// creating onEdit function to edit element 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("EMAIL").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CITY").value = selectedRow.cells[2].innerHTML;
    document.getElementById("STATE").value = selectedRow.cells[3].innerHTML;
}
//creating updaterecord function to update operations
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.EMAIL;
    selectedRow.cells[2].innerHTML = formData.CITY;
    selectedRow.cells[3].innerHTML = formData.STATE;

}



