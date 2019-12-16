console.log('js');

let totalMonthlyCost = 0;

//Jquery ready 
$(document).ready(readyNow);

function readyNow() {
    console.log('readyNow');
    // add click listeners
    $('#submitBtn').on('click', addEmployee);
    // delete click listener
    $('#employeeTable').on('click', '.deletBtn', deleteEmployee);
    calculateMonthlyCost();
}

function addEmployee(){
    console.log('submitBtn works!');
     //get user input
    let firstName = $('#firstNameIn').val(); 
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idNumIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    totalMonthlyCost += Number(annualSalary)/12; //makes it monthly, not annual cost

    //This section makes the idNum and annualSalary Numbers and not Strings, then checks all the above variables in the console.
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
          <td><button class="deleteBtn">DELETE!</button></td>
        </tr>
        `
      );

      //empty inputs (once data pushed to DOM
      $('#firstNameIn').val(''); 
      $('#lastNameIn').val('');
      $('#idNumIn').val('');
      $('#jobTitleIn').val('');
      $('#dangerIn').val('');
      $('#annualSalaryIn').val('');

}

function calculateMonthlyCost() {
    console.log('total monthy cost');
    $('#costContainer').empty();
    $('#costContainer').append('<p id="totalAnnualCost">Total Cost: $ </p>');
// LEFT OFF HERE !!!!!!!
}

//Delete employee button    
function deleteEmployee() {
    console.log('clicked delete');
    let button = $(this);
    button.closest('tr').remove();
}
