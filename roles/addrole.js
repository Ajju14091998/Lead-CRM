
let Name;
let addapi="https://opticalerp.in:85/api/roles/registerrole"
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};


async function submitrole(event){
    event.preventDefault();
    const token = getCookie('token'); 
    Name = document.getElementById("rolename").value;
    let data={Name};
    try{
          let senddata = await fetch(addapi,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify(data)
          }) 
   
          if(senddata.status===200){
            window.location.href ='/role.html'
          }
          
    }catch(err){
        console.log(err);
    }

    
    console.log("submitted")
}