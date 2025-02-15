

//? This is mainly used to display the all the cities in the dropbox 

var api = "https://opticalerp.in:85/api/cascadecountrycitystate/getcities"

var displayCity = document.getElementById("displayCity")

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    displayCity.innerHTML = '<option>Select a Value</option>'
    // console.log(data)

    data.forEach(element => {
        let val = displayCity.innerHTML
        displayCity.innerHTML = val + `<option value =${element.id}>${element.cityName}</option>`
    });
    
})
