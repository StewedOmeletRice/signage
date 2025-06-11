var dateObject = new Date();
var year = dateObject.getFullYear();
var month = lengthFix(dateObject.getMonth() + 1);
var date = lengthFix(dateObject.getDate() + 1);
var hours = lengthFix(dateObject.getHours());
var minutes = lengthFix(dateObject.getMinutes());
var dayObject = dateObject.getDay() + 1;
const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = dayArray[dayObject];

var timeHTML = document.getElementById("time");
timeHTML.innerHTML = String(hours) + ':' + String(minutes);

var number = 0;

function lengthFix(number) {
    if (number< 10) {
        return '0' + String(number);
    } else {
        return String(number);
    }
}