function addRow() {
    // फॉर्ममधून डेटा मिळवा
    let serviceDropdown = document.getElementById("services");
    let service = serviceDropdown.value;
    let remarkInput = document.getElementById("remark");
    let remark = remarkInput.value;

 
    if (service === "" || remark.trim() === "") {
        alert("कृपया सेवा निवडा आणि रिमार्क टाका.");
        return;
    }

    let table = document.getElementById("dataTable");
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);


    cell1.innerText = service;
    cell2.innerText = remark;
    cell3.innerHTML = `<a href="#" onclick="deleteRow(this)" class="btn btn-danger"><i class="fe fe-trash-2"></i></a>`;


}


function deleteRow(link) {
    let row = link.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
