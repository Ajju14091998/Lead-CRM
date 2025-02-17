const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };


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
let roleapi = "https://opticalerp.in:85/api/roles/getlist"
let adduser = "https://opticalerp.in:85/api/users/create"
document.addEventListener("DOMContentLoaded", function () {
    
    getRole();
});
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


function submituser(){
    firstName = document.getElementById('firstname').value;
    lastName  = document.getElementById('lastname').value;
    userName = firstName+lastName;
    email = document.getElementById('email').value;
    phoneNumber = document.getElementById('MobileNo').value;
    whatsAppNumber = document.getElementById('whatsappNumber').value;
    roleelement = document.getElementById("RoleSelect");
    roleName  = roleelement.options[roleelement.selectedIndex].text;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmpassword").value;
addressLine1  = document.getElementById("add1").value;
addressLine2  = document.getElementById("add2").value;
cityId = document.getElementById("displayCity").value;
countryId = document.getElementById("displayCountry").value;
stateId = document.getElementById("displayState").value;
pinCode = document.getElementById("pinCode").value;
// console.log(userName,'baba');
// console.log(firstName,lastName,stateId,pinCode,email,phoneNumber,whatsAppNumber,password,confirmPassword,roleName,addressLine1,addressLine2);
submitform();
}

async function submitform() {
    let data = {
        firstName, lastName, userName, email, phoneNumber, whatsAppNumber,
        password, confirmPassword, roleName, addressLine1, addressLine2,
        cityId, stateId, pinCode, countryId
    };

    const token = getCookie("token");
    
    try {
        const senddata = await fetch(adduser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data) // Send data as JSON
        });
      if(senddata.status===200){
        window.location.href="/users.html?";
      }
        if (!senddata.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! status: ${senddata.status}`);
        }

       
    } catch (error) {
        console.error('Error:', error);
    }
}
