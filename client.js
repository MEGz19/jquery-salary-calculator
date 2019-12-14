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
}