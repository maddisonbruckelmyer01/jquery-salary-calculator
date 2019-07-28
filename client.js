console.log('dom is loading');

$(document).ready(readyNow); 

let total = 0;
let yearlyIncome = 0;

function readyNow() {
    console.log('JQ');
    $('#grabInputs').on('click', inputTable);
    $('#grabInputs').on('click', monthlySalary);
    $('#inputsForTable').on('click', '.deleteButton', deleteInputs);
}//end readyNow

function inputTable () {
    //console.log('working');
    $('#inputsForTable').append(`<tr>
    <td>${$('#firstName').val()}</td>
    <td>${$('#lastName').val()}</td>
    <td>${$('#idNumber').val()}</td>
    <td>${$('#jobTitle').val()}</td>
    <td>${$('#annualSalary').val()}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`)
   yearlyIncome += parseFloat($('#annualSalary').val());
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}//end inputTable

function monthlySalary () {
  // console.log('its working');
   total = (yearlyIncome / 12);
   console.log(total);
   $('#money').text('Total Monthly: $ ' + total);
   if (total > 20000) {
       $('#money').css('background-color', 'red');
       $('#money').css('color', 'white');
   }

}//end monthlySalary

function deleteInputs() {
    console.log('click');
$(this).parent().parent().remove();
}//end deleteInputs 




console.log('dom is loaded');