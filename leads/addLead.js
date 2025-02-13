let firstName,lastName, source, mobileNo, emailId, whatsappNo,addressLine1, addressLine2;
let cityName, stateName, countryName, pincode, occupationName, workType, monthlyIncome;
let assignedToName, serviceName, remark;


let LeadDate,CreatedByName,LeadSourceName,LeadStatusName,organisationName,OtherSource
let ServiceDetails=[
    {
        id: 0,
  customerId: 0,
  serviceId: 0,
  serviceName: "string",
  leadId: 0,
  clientId: 0,
  isExistingClient: true,
  remark: "string",
  assignedTo: 0,
  assignedToName: "string",
  isActive: true
    }
];
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
// Include Axios via CDN in your HTML
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

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
    
    CreatedByName = "sanjay";
    LeadSourceName = "sanjay";
    LeadStatusName = "sanjay";
    organisationName = "sanjay";
    OtherSource = "sanjay";
    LeadDate = new Date().toLocaleDateString();

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
        remark, 
        LeadDate,
        CreatedByName,
        OtherSource,
        organisationName,
        LeadStatusName,
        LeadSourceName,
        ServiceDetails
    };

    // Using Axios to make the POST request
    axios.post(postApi, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);

        if (response.status === 200) {
            alert('Lead added successfully!');
        } else {
            alert('Something went wrong, please try again.');
        }
    })
    .catch(error => {
        if (error.response) {
            console.error('Error response:', error.response);
            alert(`Error: ${error.response.data.message}`);
        } else if (error.request) {
            console.error('No response received:', error.request);
            alert('No response from server. Please check your internet connection.');
        } else {
            console.error('Axios Error:', error.message);
            alert('An error occurred. Please try again.');
        }
    });
}
