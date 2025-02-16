let firstName,
  lastName,
  source,
  mobileNo,
  emailId,
  whatsappNo,
  addressLine1,
  addressLine2;
let cityName,
  stateName,
  countryName,
  pincode,
  occupationName,
  workType,
  monthlyIncome;
let assignedToName, serviceName;

let leadDate,
  tenantId,
  CreatedByName,
  leadSourceName,
  leadStatusName,
  organisationName,leadId,
  OtherSource;
let customerId,
  cityId,
  serviceId,
  stateId,
  countryId,
  leadSource,
  occupation,

  leadStatus, remarks,
  createdBy;

  let serviceDetails=[];

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

let updateapi = "https://opticalerp.in:85/api/lead/update/update"
document.addEventListener("DOMContentLoaded", function () {
  fetchLeads();
});

function fetchLeads() {
  // Get the token from cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const token = getCookie("token"); // Get the token from the 'token' cookie

  fetch("https://opticalerp.in:85/api/lead/getlist/get-all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Sending token in the header
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);
      populateTable(data);
    })
    .catch((error) => console.error("Error fetching leads:", error));
}

function populateTable(leads) {
  let tableBody = document.getElementById("leadTableBody");
  tableBody.innerHTML = ""; // Clear existing data

  leads.forEach((lead) => {
    let row = `
            <tr>
                <td>${lead?.customerId}</td>
                <td>
                    <h2 class="table-avatar">
                        <a href="#" class="avatar avatar-md me-2 d-flex gap-2">
                            <img class="avatar-img rounded-circle" src="./views/assets/img/profiles/avatar-14.jpg" alt="User Image">
                            ${lead?.customerName}
                        </a>
                    </h2>
                </td>
                <td>${lead?.leadDate}</td>
                <td>${lead?.mobileNo}</td>
                <td><span class="badge bg-info">${lead?.leadStatus}</span></td>
                <td>
                    <a href="#" data-bs-toggle="offcanvas" onclick=editLead(${lead?.id}) data-bs-target="#offcanvasEdit" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                    <a href="#" data-bs-toggle="modal"  onclick="deletelead(${lead?.id})"  data-bs-target="#delete_modal" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a> 
                    <a href="#" data-bs-toggle="offcanvas" onclick=followup(${lead?.id}) data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-paperclip"></i></a>
                </td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
  $("#leadList").dataTable();
}

function editLead(id) {
  leadId=id;
  const token = getCookie("token"); // Get the token from the 'token' cookie

  fetch(`https://opticalerp.in:85/api/lead/getbyleadid/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Sending token in the header
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);
      Editdata(data);
    })
    .catch((error) => console.error("Error fetching leads:", error));
}

function Editdata(data){
    firstName = document.getElementById("firstname");
    firstName.value= data.firstName;

    lastName = document.getElementById("lastname");
    lastName.value= data.lastName;
    leadSourceElement = document.getElementById("SourceSelect");
for (let i = 0; i < leadSourceElement.options.length; i++) {
    if (leadSourceElement.options[i].text === data.leadSourceName) {
        leadSourceElement.selectedIndex = i;
        break;
    }
}

    mobileNo = document.getElementById("mobile");
    mobileNo.value =data?.mobileNo;
    emailId = document.getElementById("email");
    emailId.value = data?.emailId;

    whatsappNo = document.getElementById("WhatsappNo");
    whatsappNo.value= data?.whatsAppNo;

    addressLine1 = document.getElementById("add1");
    addressLine1.value= data?.addressLine1;
    addressLine2 = document.getElementById("add2");
    addressLine2.value = data?.addressLine2;
    const citySelect = document.getElementById("displayCity");
    for(let i=0;i<citySelect.options.length;i++){
        if(citySelect.options[i].text ===data?.cityName){
            citySelect.selectedIndex = i;
        }
    }
    const stateSelect = document.getElementById("displayState");
    for(let i=0;i<stateSelect.options.length;i++){
        if(stateSelect.options[i].text===data?.stateName){
            stateSelect.selectedIndex = i;
        }
    }
    const countryElement = document.getElementById("displayCountry");
   for(let i =0;i<countryElement.options.length;i++){
    if(countryElement.options[i].text === data?.countryName){
        countryElement.selectedIndex = i;
    }
   }
    // For City
 cityId = parseInt(citySelect.value);
    cityName = citySelect.options[citySelect.selectedIndex].text;

    // For State
 
    pincode = document.getElementById("pincode");
    pincode.value  =data?.pincode;
    occupationElement = document.getElementById("selectOccupation");
    for(let i=0;i<occupationElement.options.length;i++){
        if(occupationElement.options[i].text===data?.occupationName){
            occupationElement.selectedIndex = i;
        }
    }
  workType = document.getElementById("typeOfWork");
  workType.value =data?.workType;
  monthlyIncome = document.getElementById("monIncome");
  monthlyIncome.value = data?.monthlyIncome;

  assignedElement = document.getElementById("assignTo");
  for(let i =0;i<assignedElement.options.length;i++){
    if(assignedElement.options[i].text===data?.assignedToName)
    {
        assignedElement.selectedIndex = i;
    }
  }
 


serviceNameElement = document.getElementById("services");
for(let i=0;i<serviceNameElement.options.length;i++){
    if(serviceNameElement.options[i].text===data?.serviceDetails[0].serviceName){
        serviceNameElement.selectedIndex = i;
    }
}


    remarks = document.getElementById("remarks");

    remarks.value = data?.serviceDetails[0]?.remark || '';

    let table = document.getElementById("dataTable");
    table.innerHTML = "";
  
    // Check if there are existing service details
    if (data?.serviceDetails && data.serviceDetails.length > 0) {
      data.serviceDetails.forEach((serviceDetail) => {
        let newRow = table.insertRow();
  
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
  
        cell1.innerText = serviceDetail.serviceName || "";
        cell2.innerText = serviceDetail.remark || "";
        cell3.innerHTML = `<a href="#" onclick="deleteRow(this)" class="btn btn-danger"><i class="fe fe-trash-2"></i></a>`;
      });
    }
   
}
















function updateTable() {
    let table = document.getElementById("dataTable");
    table.innerHTML = "";
    serviceNameElement = document.getElementById("services");
    serviceName = serviceNameElement.options[serviceNameElement.selectedIndex].text;
    console.log(serviceName);
     
   


    let remarkInput = document.getElementById("remarks");
    let remark = remarkInput.value;

 
    if ( serviceName === "" || remark.trim() === "") {
      alert("Please select any one thing")
        return;
    }


    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);


    cell1.innerText = serviceName;
    cell2.innerText = remark;
    cell3.innerHTML = `<a href="#" onclick="deleteRow(this)" class="btn btn-danger"><i class="fe fe-trash-2"></i></a>`;
}

function updateForm(){
    const token = getCookie("token");
    firstName = document.getElementById("firstname").value;

    lastName = document.getElementById("lastname").value;
  
    leadSourceElement = document.getElementById("SourceSelect");
    leadSource= parseInt(leadSourceElement.value);

    leadSourceName = leadSourceElement.options[leadSourceElement.selectedIndex].text
    mobileNo = document.getElementById("mobile").value;

    emailId = document.getElementById("email").value;

    whatsappNo = document.getElementById("WhatsappNo").value;

    addressLine1 = document.getElementById("add1").value;
    addressLine2 = document.getElementById("add2").value;
    const citySelect = document.getElementById("displayCity");
    const stateSelect = document.getElementById("displayState");
    const countryElement = document.getElementById("displayCountry");

    // For City
 cityId = parseInt(citySelect.value);
    cityName = citySelect.options[citySelect.selectedIndex].text;

    // For State
     stateId = parseInt(stateSelect.value);
    stateName = stateSelect.options[stateSelect.selectedIndex].text;
    countryName = countryElement.options[countryElement.selectedIndex].text;
    countryId = parseInt(countryElement.value);
    pincode = parseInt(document.getElementById("pincode").value);
    occupationElement = document.getElementById("selectOccupation");
    occupationName=occupationElement.options[occupationElement.selectedIndex].text;
    occupation = parseInt(occupationElement.value);
  
    workType = document.getElementById("typeOfWork").value;
    monthlyIncome = document.getElementById("monIncome").value;
    monthlyIncome = parseInt(monthlyIncome, 10)
    assignedElement = document.getElementById("assignTo");
    assignedToName= assignedElement.options[assignedElement.selectedIndex].text;
    assignedTo =parseInt(assignedElement.value);
    serviceNameElement = document.getElementById("services");
    serviceName = serviceNameElement.options[serviceNameElement.selectedIndex].text;
    serviceId = parseInt(serviceNameElement.value);
    remark = document.getElementById("remarks").value;
    createdBy=1,
  CreatedByName = "root";
  leadStatusName = " ";
  organisationName = " ";
  OtherSource = " ";
  leadDate = "2025-02-15";
  
  tenantId="root"
    serviceDetails.push(
        {
          
        
          serviceId: serviceId,
          serviceName: serviceName,
          leadId:leadId,
          clientId: 1,
          isExistingClient: true,
          remark:   remark,
          assignedTo:  assignedTo,
          assignedToName: assignedToName,
          isActive: true,
        })
        let data = {
            customerId,
            tenantId,
            firstName,
            lastName,
      
            mobileNo,
            emailId,cityId,stateId,countryId,occupation,assignedTo ,
            whatsappNo,
            addressLine1,
            addressLine2,
            cityName,
            stateName,
            countryName,
            pincode,
            occupationName,
            workType,
            monthlyIncome,
            assignedToName,
            serviceName,
            remark,
            leadDate,
            CreatedByName,
            OtherSource,
            organisationName,
            leadStatusName,
            leadSource,
            leadSourceName,
            serviceDetails,
            createdBy,leadStatus
          };
          console.log(data);
      
          fetch(updateapi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            console.log("Response status: " + response.status);
            return response.json(); // If you expect JSON response
        })
        .then((responseData) => {
            console.log("Response data:", responseData);
        })
        .catch((err) => {
            console.error("Error:", err);
        });
        

}


function deleteRow(link) {
    let row = link.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
