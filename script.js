var dateObject = new Date();
var year = dateObject.getFullYear();
var month = dateObject.getMonth() + 1;
var date = dateObject.getDate() + 1;
var hours = dateObject.getHours();
var minutes = dateObject.getMinutes();
var dayObject = dateObject.getDay() + 1;
const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = dayArray(dayObject);

var timeHTML = document.getElementById('time');
timeHTML.innerHTML = String(hours) + ':' + String(minutes);