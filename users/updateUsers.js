
let roleapi = "https://opticalerp.in:85/api/roles/getlist"
let firstName,
lastName,
email,
userName,
password,
confirmPassword,
phoneNumber,
whatsAppNumber,
addressLine1,
addressLine2,
roleName,
cityId,
stateId,
countryId,
pinCode;
let roleelement;
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

function edituser(id){
    console.log(id);
    
}

function edituser(id) {
    leadId=id;
    const token = getCookie("token"); // Get the token from the 'token' cookie
  
    fetch(`https://opticalerp.in:85/api/users/getbyidwithrole/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Sending token in the header
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        Edituserdata(data);
      })
      .catch((error) => console.error("Error fetching leads:", error));
  }
  
  function Edituserdata(data){
      firstName = document.getElementById("firstname");
      firstName.value= data?.user?.firstName;
  
      lastName = document.getElementById("lastname");
      lastName.value= data?.user?.lastName;

  
  
      mobileNo = document.getElementById("MobileNo");
      mobileNo.value =data?.user?.phoneNumber;
      email = document.getElementById("email");
      email.value = data?.user?.email;
  
      whatsappNo = document.getElementById("whatsappNumber");
      whatsappNo.value= data?.user?.whatsAppNumber
      ;
  
      addressLine1 = document.getElementById("add1");
      addressLine1.value= data?.user?.addressLine1;
      addressLine2 = document.getElementById("add2");
      addressLine2.value = data?.user?.addressLine2;
      const citySelect = document.getElementById("displayCity");
      for(let i=0;i<citySelect.options.length;i++){
          if(citySelect.options[i].text ===data?.cityName){
              citySelect.selectedIndex = i;
          }
      }
      
      roleelement = document.getElementById("RoleSelect");
      console.log(roleelement);
      for(let i=0;i<roleelement.options.length;i++){
          if(roleelement.options[i].text ===data?.roleName){
            roleelement.selectedIndex = i;
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
   
      pincode = document.getElementById("pinCode");
      pincode.value  =data?.user?.pinCode;
    
    
  
  
 
  
  
  
     
      
     
  }

  function getRole(){
    const displayRole = document.getElementById("RoleSelect");

  



      const token = getCookie("token"); // Get the token from the 'token' cookie

    fetch(roleapi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Sending token in the header
        },
      })
        .then(res => res.json())
        .then(data => {
            // Clear existing options
            displayRole.innerHTML = '<option>Select Role</option>';
           console.log(data);
    
          
            // Populate Occupation
        
            data.forEach(item => {
               
              displayRole.innerHTML += `<option value="${item.id}">${item.name}</option>`;
             
             
                
            });

            // Populate Services
           
        
        })
        .catch(error => console.error('Error fetching data:', error));
}
document.addEventListener("DOMContentLoaded", function () {
    
    getRole();
});