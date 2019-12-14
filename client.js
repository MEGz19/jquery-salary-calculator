console.log('js');

//Jquery ready 
$(document).ready(readyNow);

function readyNow() {
    console.log('readyNow');
    // add click listeners
    $('#submitBtn').on('click', addEmployee);
}

function addEmployee(){
    console.log('subitBtn works!');
     //get user input
    let firstName = $('#firstNameIn').val(); 
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idNumIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    idNum = Number(idNum);
    annualSalary = Number(annualSalary);
    console.log(firstName, lastName, idNum, jobTitle, annualSalary);

    


}