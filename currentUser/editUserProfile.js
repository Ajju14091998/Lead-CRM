console.log("Edit  Javascript file called..!")


function editProfileDetailsFunc(){

    const api = "https://opticalerp.in:85/api/currentuser/getprofile/profile"
    
    fetch(api , {
        method : 'GET',
        headers : {
            "Content-Type":'application/json',
            'Authorization':'root'
        }
    })
    .then((res)=>{
        res.json()
    })
    .then((data)=>{
        console.log("Data : " , data)
    })
    .catch((error)=>{
        console.log(`Error is : \n\n${error}`)
    })

}