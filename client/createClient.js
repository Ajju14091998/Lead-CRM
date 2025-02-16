const getapis = "https://opticalerp.in:85/api/udc/getvaluesbytype?type=clients";
const getassign = "https://opticalerp.in:85/api/users/getlist";

document.addEventListener("DOMContentLoaded", function () {
    fetchLeads();
    fetchClientTable();
    fetchAssignTable();
});


function fetchLeads() {
    // Get the token from cookies
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // Get the token from the 'token' cookie

    fetch("https://opticalerp.in:85/api/client/getlist/get-all", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Sending token in the header
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data); // Console मध्ये check करण्यासाठी
        populateTable(data);
    })
    .catch(error => console.error("Error fetching leads:", error));
}
function populateTable(leads) {
    let tableBody = document.getElementById("clientTableBody");
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
                <td>${lead?.date}</td>
                <td>${lead?.mobileNo}</td>
                <td><span class="badge bg-info">${lead?.leadStatus}</span></td>
                <td><span class="badge bg-info">${lead?.leadStatus}</span></td>
                <td>
                     <a href="#" data-bs-toggle="offcanvas" onclick=editLead(${lead?.id}) data-bs-target="#offcanvasEdit" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a> 
                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-paperclip"></i></a>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}





function fetchClientTable(){
    const displayAssign = document.getElementById("clientSelectTable");

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
      };

      const token = getCookie("token"); // Get the token from the 'token' cookie

    fetch(getapis, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sending token in the header
        },
      })
        .then(res => res.json())
        .then(data => {
            // Clear existing options
            displayAssign.innerHTML = '<option>Select Status</option>';
          
        
            // Populate Occupation
        
            data.forEach(item => {
               
              displayAssign.innerHTML += `<option value="${item.id}">${item.value01}</option>`;
             
                
            });

            // Populate Services
           
        
        })
        .catch(error => console.error('Error fetching data:', error));
}
function fetchAssignTable(){
    const displayAssign = document.getElementById("clientassign");

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
      };

      const token = getCookie("token"); // Get the token from the 'token' cookie

    fetch(getassign, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sending token in the header
        },
      })
        .then(res => res.json())
        .then(data => {
            // Clear existing options
            displayAssign.innerHTML = '<option>Select Assign Person</option>';
          
        
            // Populate Occupation
        console.log(data);
            data.forEach(item => {
               
              displayAssign.innerHTML += `<option value="${item.id}">${item.firstName} ${item.lastName}</option>`;
             
                
            });

            // Populate Services
           
        
        })
        .catch(error => console.error('Error fetching data:', error));
}
function editLead(id){
    console.log(id);
}


const getapiss = "https://opticalerp.in:85/api/users/getlist";
document.addEventListener('DOMContentLoaded', () => {
    const displayAssign = document.getElementById("assignTo");


    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
      };

      const token = getCookie("token"); // Get the token from the 'token' cookie

    fetch(getapiss, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sending token in the header
        },
      })
        .then(res => res.json())
        .then(data => {
            // Clear existing options
            displayAssign.innerHTML = '<option>Select Assign To</option>';
       
          
            // Populate Occupation
        
            data.forEach(item => {
               
              displayAssign.innerHTML += `<option value="${item.id}">${item.firstName} ${item.lastName}</option>`;
             
                
            });

            // Populate Services
           
        
        })
        .catch(error => console.error('Error fetching data:', error));
});
