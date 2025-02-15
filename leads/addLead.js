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
let assignedToName, serviceName, remark;

let leadDate,tenantId,
 
  CreatedByName,
  leadSourceName,
  leadStatusName,
  organisationName,
  OtherSource;
let customerId,
  cityId,
  serviceId,
  stateId,
  countryId,
  leadSource,
  occupation,
  assignedTo,
  leadStatus,
  createdBy;

let serviceDetails = [];
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
  document.getElementById(`step${currentStep}`).classList.remove("active");
  document.getElementById(`step${currentStep + 1}`).classList.add("active");
}

// 🔵 Navigate to Previous Step
function prevStep(currentStep) {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  document.getElementById(`step${currentStep - 1}`).classList.add("active");
}

// 🔵 Collect Data for Step 1
function addLeadPart1() {
  try {
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
    
      } 
      catch (err) {
    console.error("Error in addLeadPart1:", err);
  }
}

// 🔵 Collect Data for Step 2
function addLeadPart2() {
  occupationElement = document.getElementById("selectOccupation");
  occupationName=occupationElement.options[occupationElement.selectedIndex].text;
  occupation = parseInt(occupationElement.value);

  workType = document.getElementById("typeOfWork").value;
  monthlyIncome = document.getElementById("monIncome").value;
  monthlyIncome = parseInt(monthlyIncome, 10)
}

function submitForm() {
  assignedElement = document.getElementById("assignTo");
  assignedToName= assignedElement.options[assignedElement.selectedIndex].text;
  assignedTo =parseInt(assignedElement.value);
  serviceNameElement = document.getElementById("services");
  serviceName = serviceNameElement.options[serviceNameElement.selectedIndex].text;
  serviceId = parseInt(serviceNameElement.value);
  remark = document.getElementById("remark").value;
serviceDetails.push(
  {
    
    customerId: 1,
    serviceId: serviceId,
    serviceName: serviceName,
    leadId: 1,
    clientId: 1,
    isExistingClient: true,
    remark:   remark,
    assignedTo:  assignedTo,
    assignedToName: assignedToName,
    isActive: true,
  },
)
  addFunction();
}



function addFunction() {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const token = getCookie("token"); // Get the token from the 'token' cookie

  if (!firstName || !lastName || !mobileNo) {
    alert("Please enter required fields: First Name, Last Name, and Mobile");
    return;
  }
  createdBy=1,
  CreatedByName = "sanjay";
  leadStatusName = "sanjay";
  organisationName = "sanjay";
  OtherSource = "sanjay";
  leadDate = "2025-02-15";
  customerId=1;
  tenantId="root"
  leadStatus=1
  let data = {
    customerId,
    tenantId,
    firstName,
    lastName,
    source,
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

  // Using Axios to make the POST request
  axios
    .post(postApi, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      if (response.status === 200) {
        alert("Lead added successfully!");
      } else {
        alert("Something went wrong, please try again.");
      }
    })
    .catch((error) => {
      if (error.response) {
        console.error("Error response:", error.response);
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert(
          "No response from server. Please check your internet connection."
        );
      } else {
        console.error("Axios Error:", error.message);
        alert("An error occurred. Please try again.");
      }
    });
}
