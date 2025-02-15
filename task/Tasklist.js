document.addEventListener("DOMContentLoaded", function () {
    fetchtask();
});


function fetchtask() {
    // Get the token from cookies
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const token = getCookie('token'); // Get the token from the 'token' cookie

    fetch("https://opticalerp.in:85/api/taskdetails/getlist", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Sending token in the header
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data); 
        populateTable(data);
    })
    .catch(error => console.error("Error fetching leads:", error));
}

function populateTable(task) {
    let taskBody = document.getElementById("taskbody");
    taskBody.innerHTML = ""; // Clear existing data

    task.forEach((item) => {
        let row = `
               <tr>
                                                                        <td>${item?.id}</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href=""  data-bs-toggle="offcanvas" data-bs-target="#leadinfo" aria-controls="leadinfo" class="avatar avatar-md me-2 d-flex gap-2">
    ${item?.taskName}</a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            <div class="progress progress-sm">
                                                                                 <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                         </td>
                                                                        <td>${item?.assignedTo}</td>
                                                                        <td>${item?.dueDate}</td>
                                                                        <td><span class="badge bg-info">${item?.taskStatus}</span></td>
                                                                        <td class="">
                                                                            <a href="" class="btn btn-greys me-2"><i class="fe fe-edit"></i></a>
                                                                            <a href="" data-bs-toggle="modal" data-bs-target="#delete_modal" class="btn btn-greys me-2"><i class="fe fe-trash-2"></i></a> 
                                                                            <a href=""  data-bs-toggle="modal" data-bs-target="#status_modal" aria-controls="status_modal" class="btn btn-greys me-2"><i class="fe fe-clipboard"></i></a>
                                                                            </td>
                                                                    </tr>
        `;
        taskBody.innerHTML += row;
    });
}
