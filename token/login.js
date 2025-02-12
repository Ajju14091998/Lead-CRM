
const api = "https://opticalerp.in:85/api/tokens/gettoken"

const loginForm = document.getElementById("loginForm")
let userCustomerId = document.getElementById("customerId")
let userEmail = document.getElementById("email")
let userPassword = document.getElementById("password")



loginForm.addEventListener("submit" , function(event){

    event.preventDefault()

    let email = userEmail.value
    let password = userPassword.value
    let customerId = userCustomerId.value


    fetch('https://opticalerp.in:85/api/tokens/gettoken', {
        method: 'POST', // Specify POST method
        headers: {
            'Content-Type': 'application/json', // Explicitly set the content type
            'tenant' : customerId
        },
        body: JSON.stringify({
            email: email, // Replace with actual email
            password: password        // Replace with actual password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        // console.log("Data received..!")
        try{
            // console.log("Inside Try Block")
            document.cookie = `token=${data.token} ; path=/`
            // console.log("Cookie Created")
            // window.location.href = 'https://127.0.0.1:5500/views/index.html'
            window.location.href = './dashboard.html'
            // console.log("Location Transfered")
        }
        catch(err){
            document.getElementById("result").innerHTML = `
                <p class="alert alert-danger pt-3 pb-3 ps-2 mt-3">Login Failed</p>`
            // console.log(err)
        }

    })
    .catch(error => {
        document.getElementById("result").innerHTML = `
                <p class="alert alert-danger pt-3 pb-3 ps-3 mt-3">Something Went Wrong</p>`
        // console.error('Error:', error)
    });
    

})