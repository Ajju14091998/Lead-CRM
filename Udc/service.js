const getapi = "https://opticalerp.in:85/api/udc/getlist";
const displayOccupation = document.getElementById("selectOccupation");
const displayService = document.getElementById("services");
const displayLead = document.getElementById("SourceSelect");

fetch(getapi)
    .then(res => res.json())
    .then(data => {
        // Clear existing options
        displayOccupation.innerHTML = '<option>Select Occupation</option>';
        displayService.innerHTML = '<option>Select Service</option>';
        displayLead.innerHTML ='<option>Select Source</option>'

        // Populate Occupation
        data.forEach(item => {
            if (item.type === 'Occupation') {
                displayOccupation.innerHTML += `<option value="${item.id}">${item.value01}</option>`;
            }
        });

        // Populate Services
        data.forEach(item => {
            if (item.type === 'Services') {
                displayService.innerHTML += `<option value="${item.id}">${item.value01}</option>`;
            }
        });

       data.forEach(item=>{
        if(item?.type==="Lead Source"){
            displayLead.innerHTML+=`<option value="${item.id}">${item.value01}</option>`;
        }
       })
    })
    .catch(error => console.error('Error fetching data:', error));
