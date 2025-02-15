let followupType, followupTypeId, title, followupStatus, assignedTo, followupDate, followupTime, file, attachmentUrl, remark;
let fileRequest = {};
let attachmentUrlelement;
let addapi = "https://opticalerp.in:85/api/followupdetails/create/create";
function followup(id){
    console.log(id);
    fetchfollowup(id)
    followupTypeId=id;
}
 function submitfollowup() {
 
   
    title = document.getElementById("title").value;
    followupElement = document.getElementById("LeadsStatus").value;
    followupStatus = parseInt(followupElement);
    assignedTo = document.getElementById("assignedTo").value;
    assignedTo = parseInt(assignedTo);
    followupDate = document.getElementById("followupDate").value;
    followupTime = document.getElementById("followupTime").value;
    remark = document.getElementById("remark").value;
    // attachmentUrl = document.getElementById("Attachment");
    attachmentUrl = " ";
    // const selectedFiles = attachmentUrlelement.files;
if (followupDate && followupTime) {
        const combinedDateTime = new Date(`${followupDate}T${followupTime}:00.000Z`);
        followupTime = combinedDateTime.toISOString(); 
    }
    // if (selectedFiles.length > 0) {
    //     file = selectedFiles[0];
    //     attachmentUrl = URL.createObjectURL(file) || " ";

    //     // Extract file name and extension
    //     const fileName = file.name;
    //     const fileExtension = fileName.split('.').pop();

    //     // Read the file data as base64
    //     const reader = new FileReader();
    //     reader.onload = function(event) {
    //         const fileData = event.target.result.split(',')[1]; // Get base64 data part
            
    //         fileRequest = {
    //             name: fileName,
    //             extension: fileExtension,
    //             data: fileData
    //         };

    //         // Call the submit function after getting file data
    //         submiform();
    //     };

    //     reader.readAsDataURL(file); // Read the file as a base64 URL
    // } else {
    //     // If no file is selected, just submit the form
      
    // }
submiform();
}

function submiform() {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const token = getCookie("token"); // Get the token from the 'token' cookie
    followupType = "lead";
    

    const data = {
        followupType,
        followupTypeId,
        title,
        followupStatus,
        assignedTo,
        followupDate,
        followupTime,
      
        attachmentUrl,
        remark
    };

    fetch(addapi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Include the token for authorization
        },
        body: JSON.stringify(data) // Convert the data to JSON format
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}



function fetchfollowup(id){
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // Get the token from the 'token' cookie

    fetch(`https://opticalerp.in:85/api/followupdetails/getbyleadid/getbyleadid?LeadId=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Sending token in the header
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data); 
        populatefollow(data);
    })
    .catch(error => console.error("Error fetching leads:", error));
}


function populatefollow(leads) {
    let followlog = document.getElementById("historytable");
    followlog.innerHTML = ""; // Clear existing data

    leads.forEach((item) => {
        const timelineItem = `
        <div class="timeline-item">
            <div class="timeline-icon">
                <span class="dot"></span>
            </div>
            <div class="timeline-content">
                <h5>${item.title} <a href="#" class="text-primary">Add Next Follow Up</a></h5>
                <p>${item.remark} <a href="#" class="text-muted">See more.....</a></p>
                <div class="attachment">
                    <i class="fe fe-file-text"></i> <a href="#" class="text-dark">${item.attachmentUrl}</a>
                </div>
            </div>
            <div class="timeline-date">
                <span>${item.followupDate}</span>
            </div>
        </div>
    `;
    followlog.innerHTML += timelineItem;
    });
}