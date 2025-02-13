let firstName, CreatedByName,leadDate,lastName, source, mobileNo, emailId, whatsappNo,addressLine1, addressLine2;
let cityName, stateName, countryName,leadSourceName, pincode, occupationName,organisationName, workType, monthlyIncome;
let assignedToName, serviceName, remark;

const postApi = "https://opticalerp.in:85/api/lead/create/create"; // POST API

// 🔵 Navigate to Next Step
function nextStep(currentStep) {
    if (currentStep === 1) {
        addLeadPart1();
        if (!firstName || !lastName || !mobileNo) {
            alert("Please fill all required fields in Step 1");
            return;
        }
    } else if (currentStep === 2) {
        addLeadPart2();
    }
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${currentStep + 1}`).classList.add('active');
}

// 🔵 Navigate to Previous Step
function prevStep(currentStep) {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.getElementById(`step${currentStep - 1}`).classList.add('active');
}

// 🔵 Collect Data for Step 1
function addLeadPart1() {
    try {
        firstName = document.getElementById("firstname").value;
     
        lastName = document.getElementById("lastname").value;
        source = document.getElementById("SourceSelect").value;
   
        mobileNo = document.getElementById("mobile").value;
    
        emailId = document.getElementById("email").value;
      
        whatsappNo = document.getElementById("WhatsappNo").value;
     
        addressLine1 = document.getElementById("add1").value;
        addressLine2 = document.getElementById("add2").value;
        cityName = document.getElementById("displayCity").value;
        stateName = document.getElementById("displayState").value;
        countryName = document.getElementById("displayCountry").value;
        pincode = document.getElementById("pincode").value;
       
      
        
    } catch (err) {
        console.error("Error in addLeadPart1:", err);
    }
}

// 🔵 Collect Data for Step 2
function addLeadPart2() {
    occupationName = document.getElementById("selectOccupation").value;
    workType = document.getElementById("typeOfWork").value;
    monthlyIncome = document.getElementById("monIncome").value;


}


function submitForm() {
    assignedToName = document.getElementById("assignTo").value;
    serviceName = document.getElementById("services").value;
    remark = document.getElementById("remark").value;

    addFunction();
}

// 🔵 Add Lead to API
function addFunction() {
    
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // Get the token from the 'token' cookie

    if (!firstName || !lastName || !mobileNo) {
        alert("Please enter required fields: First Name, Last Name, and Mobile");
        return;
    }

    let data = {
        firstName, 
        lastName, 
        source, 
        mobileNo,      
        emailId,      
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
        remark
    };
    

    console.log("Submitting Lead:", data);

    fetch(postApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Lead Submitted Successfully:", result);
      
        // window.location.href = "lead.html";
        // setTimeout(() => location.reload(), 1000);  
    })
    .catch(error => {
        console.error("Error submitting lead:", error);
  
    });
}