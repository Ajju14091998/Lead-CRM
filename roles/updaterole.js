let myname;
let froleapi = "https://opticalerp.in:85/api/roles/getbyid"

function updatesrole(id){
    console.log(id);
    fetchroles(id);
    
}

async function fetchroles(id){
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };
    
    const token = getCookie('token'); // 🔑 Get Auth Token
    let fetchrole = await fetch(`${froleapi}/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        }
    })
    let data =await fetchrole.json();
    myname = document.getElementById('rolenames');
    myname.value = data.name;
 

}
// s
function roleupdate (event)
{
    event.preventDefault();
    try{
      let Name = myname.value;
      
    }catch(err){
        console.log(err)
    }

 
  
}
