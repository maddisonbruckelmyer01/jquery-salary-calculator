console.log('dom is loading');

$(document).ready(readyNow); 

function readyNow() {
    console.log('JQ');
    $('#grabInputs').on('click', inputTable);

    
}//end readyNow

function inputTable () {
    console.log('working');
    $('#inputsForTable').append(`<tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#idNumber').val()}</td>
    <td>${$('#jobTitle').val()}</td>
    <td>${$('#annualSalary').val()}</td>
    </tr>`)
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}//end inputTable

function monthlySalary () {
   
}//end monthlySalary







console.log('dom is loaded');