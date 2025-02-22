document.addEventListener("DOMContentLoaded", function () {
    fetchRoles();
});

function fetchRoles() {
    // 🍪 Token Cookie मधून Get करा
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // 🔑 Get Auth Token

    // ✅ API Call
    fetch("https://opticalerp.in:85/api/roles/getlist", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 🔑 Authorization Token
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("✅ Roles Fetched:", data);
        populateRoleTable(data);
    })
    .catch(error => console.error("❌ Error Fetching Roles:", error));
}

// 📝 Populate Role Table (Only Role Name & Buttons)
function populateRoleTable(roles) {
    let tableBody = document.getElementById("roleTableBody");
    tableBody.innerHTML = ""; // Clear Old Data

    roles.forEach((role) => {
        let row = `
            <tr>
                <td>${role?.name}</td>
                <td>  <a href="permission.html" class="btn btn-greys me-2"><i
                        class="fa fa-shield me-1" data-bs-toggle="tooltip"
                        data-bs-placement="Top" title="Permissions"></i>
                    </a></td>
               
                <td class="d-flex align-items-center">
                     <a href="#" data-bs-toggle="offcanvas"  data-bs-target="#offcanvasEdit" onclick="updatesrole(${role?.id})" aria-controls="offcanvasRight" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                                     <a href="#" data-bs-toggle="modal"    data-bs-target="#delete_modal" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a> 
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// 🛠 Debugging - Button Click वर Roles Fetch
document.getElementById("fetchRolesBtn").addEventListener("click", function () {
    fetchRoles();
});
