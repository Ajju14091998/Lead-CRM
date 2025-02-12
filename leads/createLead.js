
// console.log("Create Lead Javascript file works..!")


// var api = "https://opticalerp.in:85/api/cascadecountrycitystate/getcountries"; // Replace with your API URL


// let firstName 
// let lastName
// let source
// let mobile
// let email
// let whatsappNo
// let add1
// let add2
// let city
// let state
// let country 
// let pincode
// let occupation 
// let typeOfWork
// let monIncome
// let assignTo
// let services
// let remark


// function addLeadPart1(){
//     try{
//         firstName = document.getElementById("firstname").value 
//         lastName = document.getElementById("lastname").value
//         source = document.getElementById("SourceSelect").value
//         mobile = document.getElementById("mobile").value
//         email = document.getElementById("email").value
//         whatsappNo = document.getElementById("WhatsappNo").value
//         add1 = document.getElementById("add1").value
//         add2 = document.getElementById("add2").value
//         city = document.getElementById("displayCity").value
//         state = document.getElementById("displayState").value
//         country = document.getElementById("displayCountry").value 
//         pincode = document.getElementById("pincode").value
//     }
//     catch(err){

//     }
// }

// function addLeadPart2(){
//     occupation = document.getElementById("selectOccupation").value 
//     typeOfWork = document.getElementById("typeOfWork").value
//     monIncome = document.getElementById("monIncome").value 
// }

// function addLeadPart3(){
//     assignTo = document.getElementById("assignTo").value
//     services = document.getElementById("services").value
//     remark = document.getElementById("remark").value

//     addFunction()
// }

// function addFunction(){

//     data = {
//         firstName : firstName,
//         lastName : lastName,
//         source : source,
//         mobile : mobile,
//         email : email,
//         whatsappNo : whatsappNo,
//         add1 : add1,
//         add2 : add2,
//         city : city,
//         state : state,
//         country : country, 
//         pincode : pincode,
//         occupation : occupation, 
//         typeOfWork : typeOfWork,
//         monIncome : monIncome,
//         assignTo : assignTo,
//         services : services,
//         remark : remark
//     }
//     console.log(data)
    
// }





// console.log("Create Lead JavaScript file works..!");

// // ✅ API URLs (.NET API प्रमाणे अपडेट कर)
// var postApi = "https://opticalerp.in:85/api/lead/create/create"; // POST API 
// var getApi = "https://opticalerp.in:85/api/lead/get"; // GET API 
// var deleteApi = "https://opticalerp.in:85/api/lead/delete"; // DELETE API 

// // 🟢 Step 1: लीड डेटा घेणे (Form Data Collection)
// let firstName, lastName, source, mobile, email, whatsappNo, add1, add2;
// let city, state, country, pincode, occupation, typeOfWork, monIncome;
// let assignTo, services, remark;

// function addLeadPart1() {
//     try {
//         firstName = document.getElementById("firstname").value;
//         lastName = document.getElementById("lastname").value;
//         source = document.getElementById("SourceSelect").value;
//         mobile = document.getElementById("mobile").value;
//         email = document.getElementById("email").value;
//         whatsappNo = document.getElementById("WhatsappNo").value;
//         add1 = document.getElementById("add1").value;
//         add2 = document.getElementById("add2").value;
//         city = document.getElementById("displayCity").value;
//         state = document.getElementById("displayState").value;
//         country = document.getElementById("displayCountry").value;
//         pincode = document.getElementById("pincode").value;
//     } catch (err) {
//         console.error("Error in addLeadPart1:", err);
//     }
// }

// function addLeadPart2() {
//     occupation = document.getElementById("selectOccupation").value;
//     typeOfWork = document.getElementById("typeOfWork").value;
//     monIncome = document.getElementById("monIncome").value;
// }

// function addLeadPart3() {
//     assignTo = document.getElementById("assignTo").value;
//     services = document.getElementById("services").value;
//     remark = document.getElementById("remark").value;

//     addFunction(); // POST API कॉल
// }

// // 🟢 Step 2: लीड सबमिट करणे (POST API)
// function addFunction() {
//     if (!firstName || !lastName || !mobile) {
//         alert("Please enter required fields: First Name, Last Name, and Mobile");
//         return;
//     }

//     let data = {
//         firstName, lastName, source, mobile, email, whatsappNo, add1, add2,
//         city, state, country, pincode, occupation, typeOfWork, monIncome,
//         assignTo, services, remark
//     };

//     console.log("Submitting Lead:", data);

//     fetch(postApi, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log("Lead Submitted Successfully:", result);
//         alert("Lead Added Successfully");
        
//         // ✅ लीड सेव्ह झाल्यावर "lead.html" वर Redirect करा
//         window.location.href = "lead.html";
//         setTimeout(() => location.reload(), 1000);  // पेज रीलोड करण्यासाठी
        
//     })
//     .catch(error => {
//         console.error("Error submitting lead:", error);
//         alert("Leads Error");
//     });
// }

// // 🟢 Step 3: लीड डेटा GET करणे (टेबलमध्ये दाखवण्यासाठी)
// function fetchLeads() {
//     fetch(getApi)
//     .then(response => response.json())
//     .then(leads => {
//         let tableBody = document.getElementById("leadTableBody");
//         tableBody.innerHTML = ""; // आधीचा डेटा क्लिअर करणे

//         leads.forEach((lead, index) => {
//             let statusBadge = getStatusBadge(lead.status); // स्टेटस बॅज मिळवणे

//             let row = `<tr>
//                 <td>${index + 1}</td>
//                 <td>
//                     <h2 class="table-avatar">
//                         <a href="#" data-bs-toggle="offcanvas" data-bs-target="#leadinfo" aria-controls="leadinfo" class="avatar avatar-md me-2 d-flex gap-2">
//                             <img class="avatar-img rounded-circle" src="./views/assets/img/profiles/avatar-14.jpg" alt="User Image">
//                             ${lead.firstName} ${lead.lastName}
//                         </a>
//                     </h2>
//                 </td>
//                 <td>${new Date(lead.date).toLocaleDateString()}</td>
//                 <td>${lead.mobile}</td>
//                 <td>${statusBadge}</td>
//                 <td>
//                     <a href="#" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
//                     <a href="#" onclick="deleteLead(${lead.id})" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a>
//                     <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-paperclip"></i></a>
//                 </td>
//             </tr>`;
//             tableBody.innerHTML += row;
//         });
//     })
//     .catch(error => console.error("Error fetching leads:", error));
// }

// // **Status Badge Helper Function**
// function getStatusBadge(status) {
//     let statusMap = {
//         "Follow up": "bg-info",
//         "Meeting Pending": "bg-warning",
//         "Meeting Scheduled": "bg-secondary",
//         "Lead Won": "bg-success"
//     };
//     return `<span class="badge ${statusMap[status] || 'bg-dark'}">${status}</span>`;
// }

// // 🟢 Step 4: लीड डिलीट करणे (DELETE API)
// function deleteLead(leadId) {
//     if (!confirm("Are you sure you want to delete this lead?")) return;

//     fetch(`${deleteApi}/${leadId}`, {
//         method: "DELETE"
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log("Lead Deleted:", result);
//         alert("Lead Deleted Successfully");
//         fetchLeads();
//     })
//     .catch(error => console.error("Error deleting lead:", error));
// }

// // 🟢 Page लोड होताच लीड लोड करणे
// document.addEventListener("DOMContentLoaded", fetchLeads);




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
        console.log("API Response:", data); // Console मध्ये check करण्यासाठी
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
                <td>${lead?.date}</td>
                <td>${lead?.mobileNo}</td>
                <td><span class="badge bg-info">${lead?.leadStatus}</span></td>
                <td>
                    <a href="#" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#delete_modal" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a> 
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
