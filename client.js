console.log('js');

let employeeList = [];

//Jquery ready 
$(document).ready(readyNow);

function readyNow() {
    console.log('readyNow');
    // add click listeners
    $('#submitBtn').on('click', addEmployee);
    // delete click listener
    $('#employeeTable').on('click', '.deleteBtn', deleteEmployee);
    // calculateMonthlyCost();
}

function addEmployee(){
    console.log('submitBtn works!');
     //get user input
    let firstName = $('#firstNameIn').val(); 
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idNumIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    let employeeObject = {firstName, lastName, idNum, jobTitle, annualSalary};

    //This section makes the idNum into Number and not a String, then checks all the above variables in the console.
    idNum = Number(idNum);
    console.log(employeeObject);

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
      $('#annualSalaryIn').val('');

      employeeList.push(employeeObject);

      console.log(employeeList);
      calculateMonthlyCost();

}

//Delete employee button    
function deleteEmployee() {
    console.log('clicked delete');
    // let button = 
    $(this).closest('tr').remove();
}

function calculateMonthlyCost() {
    console.log(' in total monthy cost');
    let totalMonthlyCost = 0;
    for (i = 0; i < employeeList.length; i++ ) {
        totalMonthlyCost += Number(employeeList[i].annualSalary)
    }
    totalMonthlyCost = (totalMonthlyCost/12);
    // annualSalary = Number(annualSalary);
    // totalMonthlyCost += (annualSalary)/12; 

    $('#costContainer').empty();
    $('#costContainer').append('Total Cost: $ ', totalMonthlyCost);
    changeColor();

    //Change color to Red if total cost > $20k
    function changeColor() {
        console.log ('change color');
        if (totalMonthlyCost > 19999)
        $('#costContainer').addClass(`redText`); 

    }

}
