








document.addEventListener("DOMContentLoaded", function () {
    fetchLeads();
});


function fetchLeads() {
    // Get the token from cookies
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // Get the token from the 'token' cookie

    fetch("https://opticalerp.in:85/api/lead/getlist/get-all", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Sending token in the header
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data); 
        populateTable(data);
    })
    .catch(error => console.error("Error fetching leads:", error));
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
                <td>${lead?.leadDate
                    }</td>
                <td>${lead?.mobileNo}</td>
                <td><span class="badge bg-info">${lead?.leadStatus}</span></td>
                <td>
                    <a href="#" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                    <a href="#" data-bs-toggle="modal"  data-bs-target="#delete_modal" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a> 
                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-paperclip"></i></a>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
















// console.log("Lead Management Loaded!");

// const postApi = "https://opticalerp.in:85/api/lead/create/create"; // ✅ POST API
// const getApi = "https://opticalerp.in:85/api/lead/getlist/get-all"; // ✅ GET API

// // 🟢 लीड डेटा सबमिट करणे
// function addLead() {
//     let leadData = {
//         firstName: document.getElementById("firstname").value,
//         lastName: document.getElementById("lastname").value,
//         mobile: document.getElementById("mobile").value,
//         email: document.getElementById("email").value,
//         whatsappNo: document.getElementById("WhatsappNo").value,
//         source: document.getElementById("SourceSelect").value,
//         address1: document.getElementById("add1").value,
//         address2: document.getElementById("add2").value,
//         city: document.getElementById("displayCity").value,
//         state: document.getElementById("displayState").value,
//         country: document.getElementById("displayCountry").value,
//         pincode: document.getElementById("pincode").value,
//         occupation: document.getElementById("selectOccupation").value,
//         typeOfWork: document.getElementById("typeOfWork").value,
//         monthlyIncome: document.getElementById("monIncome").value,
//         assignTo: document.getElementById("assignTo").value,
//         services: document.getElementById("services").value,
//         remark: document.getElementById("remark").value
//     };

//     // 🛑 Validation
//     if (!leadData.firstName || !leadData.lastName || !leadData.mobile) {
//         alert("Please fill in First Name, Last Name, and Mobile.");
//         return;
//     }

//     fetch(postApi, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(leadData)
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log("Lead Added:", result);
//         alert("Lead Added Successfully!");
//         window.location.href = "lead.html"; // ✅ Redirect to lead.html
//     })
//     .catch(error => console.error("Error Adding Lead:", error));
// }




// // 🟢 लीड डेटा GET करून टेबलमध्ये Bind करणे
// function fetchLeads() {
//     fetch(getApi)
//     .then(response => response.json())
//     .then(leads => {
//         let tableBody = document.getElementById("leadTableBody");
//         tableBody.innerHTML = ""; // आधीचा डेटा क्लिअर करा

//         leads.forEach((lead, index) => {
//             let row = `<tr>
//                 <td>${index + 1}</td>
//                 <td>${lead.firstName} ${lead.lastName}</td>
//                 <td>${lead.mobile}</td>
//                 <td>${lead.email}</td>
//                 <td>${lead.city}, ${lead.state}</td>
//                 <td>${lead.services}</td>
//                 <td>${lead.remark}</td>
//             </tr>`;
//             tableBody.innerHTML += row;
//         });
//     })
//     .catch(error => console.error("Error Fetching Leads:", error));
// }

// // 🟢 Page लोड होताच लीड लोड करणे
// document.addEventListener("DOMContentLoaded", fetchLeads);
