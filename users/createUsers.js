

document.addEventListener("DOMContentLoaded", function () {
    fetchUsers();
    
});

function fetchUsers() {
    // 🍪 Token Cookie मधून Get करा
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // Get Auth Token

    // ✅ API Call  
    fetch("https://opticalerp.in:85/api/users/getlistwithroles", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 🔑 Bearer Token
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("✅ Users Fetched:", data); 
        populateUserTable(data);
    })
    .catch(error => console.error("❌ Error Fetching Users:", error));
}

// 📝 Populate User Table in HTML
function populateUserTable(users) {
    let tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Clear old data

    users.forEach((user) => {
        let row = `
            <tr>
                <td>${user?.user?.id}</td>
                <td>${user?.user?.userName}</td>
              
                <td>${user?.user?.phoneNumber
                }</td>
                <td>${user?.roleName
                }</td>
                <td>
                <a href="#" data-bs-toggle="offcanvas" onclick=edituser(${user?.user?.id}) data-bs-target="#offcanvasEdit" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                   
                    <a href="#" class="btn btn-greys me-2" onclick="deleteUser(${user?.id})"><i class="fe fe-trash-2"></i></a>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // $("#userList").dataTable(); // ✅ DataTable Apply करा
}



// // 🛠 Debugging - Button Click वर User Fetch
// document.getElementById("fetchUsersBtn").addEventListener("click", function () {
//     fetchUsers();
// });

