
const getapis = "https://opticalerp.in:85/api/users/getlist";
document.addEventListener('DOMContentLoaded', () => {
    const displayAssign = document.getElementById("assignTo");
    const displayAssigned = document.getElementById("assignedTo");
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
            displayAssign.innerHTML = '<option>Select Assign To</option>';
            displayAssigned.innerHTML = '<option>Select Assign To</option>';
          
            // Populate Occupation
        
            data.forEach(item => {
               
              displayAssign.innerHTML += `<option value="${item.id}">${item.firstName} ${item.lastName}</option>`;
              displayAssigned.innerHTML += `<option value="${item.id}">${item.firstName} ${item.lastName}</option>`;
                
            });

            // Populate Services
           
        
        })
        .catch(error => console.error('Error fetching data:', error));
});
