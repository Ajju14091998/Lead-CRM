document.addEventListener('DOMContentLoaded', () => {
    const getapi = "https://opticalerp.in:85/api/udc/getlist";
    const displayOccupation = document.getElementById("LeadsStatus");

    fetch(getapi)
        .then(res => res.json())
        .then(data => {
            // Clear existing options
            displayOccupation.innerHTML = '<option>Select Occupation</option>';
          
            // Populate Occupation
        
            data.forEach(item => {
                if (item.type === 'Leads') {
                    displayOccupation.innerHTML += `<option value="${item.id}">${item.value01}</option>`;
                }
            });

            // Populate Services
           
        
        })
        .catch(error => console.error('Error fetching data:', error));
});
