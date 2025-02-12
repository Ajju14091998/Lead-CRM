// console.log("Profile Javascript file called..!")
const api = "https://opticalerp.in:85/api/currentuser/getprofile/profile"

fetch(api)
.then((res)=>{
    res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{})