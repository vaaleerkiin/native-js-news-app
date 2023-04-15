import moment from 'moment/moment';
import Notiflix from 'notiflix';
import imgLocation from '../images/location.svg';
export { loadWeather };

const weatherBlock = document.querySelector('#weather');
const positionForWeather = document.querySelector('.gallery__cards-list');

const apiWeather = '92b7ae078a5ceba812c34c84b6f882cb';
let server;

const date = moment(new Date());
const resultMonth = date.format('D MMM YYYY');
const resultDay = date.format('ddd');

server = `https://api.openweathermap.org/data/2.5/weather?lat=40.71&lon=-74.00&units=metric&appid=${apiWeather}`;
loadWeather();

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorLocation);
} else {
  return Notiflix.Notify.failure('Your browser not support geolocation api');
}

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  server = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiWeather}`;
  loadWeather();
}

function errorLocation() {
  return Notiflix.Notify.failure('Unable to get your location');
}

async function loadWeather() {
  try {
    const response = await fetch(server);
    const responseResult = await response.json();
    renderWeather(responseResult);
  } catch (error) {
    console.log(error.message);
  }
}

function renderWeather(data) {
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const status = data.weather[0].main;
  const icon = data.weather[0].icon;

  const markup = `<div class="weather">
<div class="weather-header">
<p class="weather-temp">${temp}&deg;</p>
<div class="weather-main">
  <p class="weather-status">${status}</p>
  <div class="weather-city_box">
  <img class="location-icon" src ="${imgLocation}" alt = "location" width = "27" height = "27">
  <p class="weather-city">${location}</p>
    </div>
</div>
</div>

<img class="weather-icon" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${status}" >

<ul class="weather-date">
<li class="weather-day">${resultDay}</li>
<li class="weather-month">${resultMonth}</li>
</ul>
</div>`;
  weatherBlock.innerHTML = markup;

  let x = document.documentElement.clientWidth;

  // if(window.innerWidth <= 320) {
  //     positionForWeather.prepend(weatherBlock)
  // } else if(window.innerWidth > 320 && window.innerWidth <= 768) {positionForWeather.insertBefore(weatherBlock, positionForWeather.children[1]);
  // } else {positionForWeather.insertBefore(weatherBlock, positionForWeather.children[2]);}

  if (x < 768) {
    positionForWeather.insertBefore(
      weatherBlock,
      positionForWeather.children[0]
    );
  } else if (x >= 768 && x <= 1279) {
    positionForWeather.insertBefore(
      weatherBlock,
      positionForWeather.children[1]
    );
  } else {
    positionForWeather.insertBefore(
      weatherBlock,
      positionForWeather.children[2]
    );
  }

  // if (window.matchMedia("screen and (min-width: 320px)").matches) {
  //     positionForWeather.insertBefore(weatherBlock, positionForWeather.children[0])
  // } else if (window.matchMedia("screen and (min-width: 768px)").matches) {
  //     positionForWeather.insertBefore(weatherBlock, positionForWeather.children[1]);
  // } else {positionForWeather.insertBefore(weatherBlock, positionForWeather.children[2]);}
}
