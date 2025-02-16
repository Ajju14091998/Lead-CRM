document.addEventListener("DOMContentLoaded", function () {




    fetchPermissions();

});


function fetchPermissions() {
    // 🍪 Get Token from Cookie
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // 🔑 Get Auth Token

    // ✅ API Call
    fetch("https://opticalerp.in:85/api/permissions/getlist", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 🔑 Authorization Token
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("✅ Permissions Fetched:", data);
        populatePermissionTable(data);
    })
    .catch(error => console.error("❌ Error Fetching Permissions:", error));
}



// 📝 Populate Permissions Table
function populatePermissionTable(permissions) {
    let tableBody = document.getElementById("permissionTableBody");
    tableBody.innerHTML = ""; // Clear Old Data

    permissions.forEach((permission) => {
        let row = `
            <tr>
                <td>${permission?.
                    description
                    }</td>  <!-- ✅ Module Name -->
                <td>${permission?.canCreate ? '✅' : '❌'}</td>
                <td>${permission?.canEdit ? '✅' : '❌'}</td>
                <td>${permission?.canDelete ? '✅' : '❌'}</td>
                <td>${permission?.canView ? '✅' : '❌'}</td>
                <td>${permission?.canPrint ? '✅' : '❌'}</td>
                <td>${permission?.canImport ? '✅' : '❌'}</td>
                <td>${permission?.canExport ? '✅' : '❌'}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
