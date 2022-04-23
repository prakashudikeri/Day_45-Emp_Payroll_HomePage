window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>   <th>Name</th>   <th>Gender</th>     <th>Department</th>
                        <th>Salary</th> <th>Start Date</th> <th>Actions</th>    
    </tr>
        <tr>
            <td><img class="profile" src="C:\Users\Prakash Udikeri\BridgeLabz\Day_45-Emp_App\Images\Profile Pic\Ellipse -2.png" alt="Pic-1"></td>
                <td>Prakash Udikeri</td>
                <td>Male</td>
                <td><div class="dept-label">Engineering</div>
                    <div class="dept-label">Finance</div></td>
                <td>3000000</td>
                <td>1 Nov 2020</td>
                <td>
                    <img id="1" onclick="remove(this)" src="C:\Users\Prakash Udikeri\BridgeLabz\Day_45-Emp_App\Images\Icons\delete-black-18dp.svg" alt="Delete">
                    <img id="1" onclick="update(this)" src="C:\Users\Prakash Udikeri\BridgeLabz\Day_45-Emp_App\Images\Icons\create-black-18dp.svg" alt="Edit/Update">
                </td>
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
