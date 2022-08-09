const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const timeGive = document.querySelector('.timeGive');
const count = document.querySelector('.contador-container');
const itemCount = document.querySelectorAll('.contador h4');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

//new Date(año, mes, fecha, horas, minutos, segundos, ms)
const futureDate = new Date(year, month, day + 10, 11, 30, 0);

let mon = futureDate.getMonth();
const years = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const dates = futureDate.getDate();

mon = months[month]; //mon sera igual al mes que se encuentre dentro del mapa

const weekday = weekdays[futureDate.getDay()];

timeGive.textContent = `Giveaway Ends On ${weekday} ${mon} ${years} ${hours}:${minutes}am`

//tiempo futuro en ms
const futureTime = futureDate.getTime();
console.log(futureTime);

//Obtener tiempo(remaining) restante
function getRemainingTime() {
    const hoy = new Date().getTime();
    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds

    const oneDay = 24 * 60 *60 *1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let h = t / oneHour;
    
}

getRemainingTime();
