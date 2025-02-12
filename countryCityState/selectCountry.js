


//? This is mainly used to display the all the countries in the dropbox 

api = "https://opticalerp.in:85/api/cascadecountrycitystate/getcountries"
const displayCountry = document.getElementById("displayCountry")

fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    displayCountry.innerHTML = '<option>Select a Value</option>'
    // console.log(data)

    data.forEach(element => {
        let val = displayCountry.innerHTML
        displayCountry.innerHTML = val + `<option>${element.countryName}</option>`
    });
})