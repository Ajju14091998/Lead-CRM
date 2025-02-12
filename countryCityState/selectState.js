


//? This is mainly used to display the all the cities in the dropbox 

api = "https://opticalerp.in:85/api/cascadecountrycitystate/getstates"
const displayState = document.getElementById("displayState")

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    displayState.innerHTML = '<option>Select a Value</option>'
    // console.log(data)

    data.forEach(element => {
        let val = displayState.innerHTML
        displayState.innerHTML = val + `<option>${element.stateName}</option>` 
    });
})