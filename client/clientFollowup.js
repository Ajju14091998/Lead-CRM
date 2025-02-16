let followupType, followupTypeId, title, followupStatus, assignedTo, followupDate, followupTime, file, attachmentUrl, remark;
let fileRequest = {};
let attachmentUrlelement;
let addapi = "https://opticalerp.in:85/api/followupdetails/create/create";
// function followup(id){
//     console.log(id);
//     fetchfollowup(id)
//     followupTypeId=id;
// }
// ram
 function submitclientfollowup() {
 
   
    title = document.getElementById("title").value;
    followupElement = document.getElementById("clientSelectTable").value;
    followupStatus = parseInt(followupElement);
    assignedTo = document.getElementById("clientassign").value;
    assignedTo = parseInt(assignedTo);
    followupDate = document.getElementById("date").value;
    followupTime = document.getElementById("time").value;
    remark = document.getElementById("clientremark").value;
    // attachmentUrl = document.getElementById("Attachment");
    attachmentUrl = " ";
    // const selectedFiles = attachmentUrlelement.files;
if (followupDate && followupTime) {
        const combinedDateTime = new Date(`${followupDate}T${followupTime}:00.000Z`);
        followupTime = combinedDateTime.toISOString(); 
    }
  
submiform();
}

function submiform() {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const token = getCookie("token"); // Get the token from the 'token' cookie
    followupType = "client";
    

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

