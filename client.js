console.log('js');

//Jquery ready 
$(document).ready(readyNow);

function readyNow() {
    console.log('readyNow');
    // add click listeners
    $('#submitBtn').on('click', addEmployee);
}

function addEmployee(){
    console.log('submitBtn works!');
     //get user input
    let firstName = $('#firstNameIn').val(); 
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idNumIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    //This section makes the idNum and annualSalary Numbers and not Strings, then checks them in the console.
    idNum = Number(idNum);
    annualSalary = Number(annualSalary);
    console.log(firstName, lastName, idNum, jobTitle, annualSalary);

    //append employee user added
    $('#employeeTable').append(
        `
        <tr>
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${idNum}</td>
          <td>${jobTitle}</td>
          <td>${annualSalary}</td>
          <td><button class="deleteBtn btn btn-danger">DELETE!</button></td>
        </tr>
        `
      );

      //empty inputs (once data pushed to DOM)
      $('#firstNameIn').val(''); 
      $('#lastNameIn').val('');
      $('#idNumIn').val('');
      $('#jobTitleIn').val('');
      $('#dangerIn').val('');
      $('#annualSalaryIn').val('');

}