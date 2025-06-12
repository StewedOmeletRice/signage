function getWeatherData() {
    var weatherdata = '';
    fetch('https://weather.tsukumijima.net/api/forecast/city/230010')
        .then((response) => response.json())
        .then((jsondata) => {
            // console.log(jsondata);
            document.getElementById('weather').innerHTML = '<img src="' + jsondata.forecasts[0].image.url + '">'
            document.getElementById('high').innerHTML = jsondata.forecasts[0].temperature.max.celsius + ' ℃';
            document.getElementById('low').innerHTML = jsondata.forecasts[0].temperature.min.celsius + ' ℃';
    });
}

getWeatherData();

var dateObject = new Date();
var year = String(dateObject.getFullYear()).slice(-2);
var month = lengthFix(dateObject.getMonth() + 1);
var date = lengthFix(dateObject.getDate() + 1);
var hours = lengthFix(dateObject.getHours());
var minutes = lengthFix(dateObject.getMinutes());
var dayObject = dateObject.getDay() + 1;
const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = dayArray[dayObject];

var panels = 2;

var time1HTML = document.getElementById("time1");
time1HTML.innerHTML = String(hours) + ':' + String(minutes);

var time2lHTML = document.getElementById('time2l');
time2lHTML.innerHTML = String(hours) + ':' + String(minutes);

var dateHTML = document.getElementById('date');
dateHTML.innerHTML = String(year) + '.' + String(month) + '.' + String(date) + ' (' + day + ')';

// var weatherHTML = document.getElementById('weather');
// weatherHTML.innerHTML = weather;

// var number = 0;

function lengthFix(number) {
    if (number < 10) {
        return '0' + String(number);
    } else {
        return String(number);
    }
}

var element = document.getElementsByClassName('panel');
// console.log(element);

/* const interval = setInterval(function() {
    console.log('interval');
}, 1000); */

var i = 1;
var dateOld = date;
const interval = setInterval(function() {
    dateObject = new Date();
    year = String(dateObject.getFullYear()).slice(-2);
    month = lengthFix(dateObject.getMonth() + 1);
    date = lengthFix(dateObject.getDate() + 1);
    hours = lengthFix(dateObject.getHours());
    minutes = lengthFix(dateObject.getMinutes());
    dayObject = dateObject.getDay() + 1;
    day = dayArray[dayObject];
    if (dateOld != date) { getWeatherData(); }
    /* function lengthFix(number) {
        if (number < 10) {
            return '0' + String(number);
        } else {
            return String(number);
        }
    } */
    time1HTML.innerHTML = String(hours) + ':' + String(minutes);
    time2lHTML.innerHTML = String(hours) + ':' + String(minutes);
    dateHTML.innerHTML = String(year) + '.' + String(month) + '.' + String(date) + ' (' + day + ')';
    if (i == 0) {
        element[panels - 1].id = '';
        element[i].id = 'active';
        i++;
    } else if (i == panels - 1) {
        element[i - 1].id = '';
        element[i].id = 'active';
        i = 0;
    } else {
        element[i - 1].id = '';
        element[i].id = 'active';
        i++;
    }
}, 5000);
