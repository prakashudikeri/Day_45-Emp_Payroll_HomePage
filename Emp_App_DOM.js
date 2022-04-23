let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollLise')?
        JSON.parse(localStorage.getItem('EmployeePayrollList')): [] ;
}

const createInnerHtml = () => {
        const headerHtml = "<td></td><th>Name</th><th>Gender</th><th>Department</th>" + "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
        let innerHtml = `${headerHtml}`;
        let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr> 
            <td><img class="profile" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</div>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name = "${empPayrollData._id}" onclick="remove(this)" src="delete-black-18dp.svg" alt="Delete">
                    <img name = "${empPayrollData._id}" onclick="update(this)" src="create-black-18dp.svg" alt="Edit/Update">
                </td>
            </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class = 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}