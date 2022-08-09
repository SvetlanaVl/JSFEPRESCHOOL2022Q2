const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


let randomNum;

// clock and calendar

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  getTimeOfDay();
  showDate();
  setTimeout(showTime, 1000);
  
}
showTime();

function showDate() {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString('en-US', options);
  day.textContent = currentDate;
  setTimeout(showDate, 1000);
}

// greeting

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  const timesOfDay = ['morning', 'afternoon', 'evening', 'night'];

  if (hours >= 6 && hours < 12) {
    greeting.textContent = `Good  ${timesOfDay[0]},`;
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = `Good  ${timesOfDay[1]},`;
  } else if (hours >= 18 && hours < 24) {
    greeting.textContent = `Good  ${timesOfDay[2]},`;
  } else if (hours >= 24 && hours < 6) {
    greeting.textContent = `Good  ${timesOfDay[3]},`;
  } 
}

// user name

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);

// slider


// the background image is formed taking into account the time of day and a random number of the image


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {  
  const date = new Date();
  const hours = date.getHours();
  const timesOfDay = day();
  const bgNum = String(getRandomNum(1, 20)).padStart(2, '0');
  const img = `'https://raw.githubusercontent.com/SvetlanaVl/stage1-tasks/assets/images/${timesOfDay}/${bgNum}.jpg?raw=true'`;
  
  function day() {
    if (hours >= 6 && hours < 12) {
      return 'morning';
    } else if (hours >= 12 && hours < 18) {
      return 'afternoon';
    } else if (hours >= 18 && hours < 24) {
      return 'evening';
    } else if (hours >= 24 && hours < 6) {
      return 'night';
    }
  }
  
  body.style.backgroundImage = `url(${img})`;

}



setBg();

function getSlideNext() {
  // randomNum = String(getRandomNum(1, 20)).padStart(2, '0');
  // if(randomNum === '20') {
  //   randomNum = '01';
  // }else if(randomNum < 20) {
  //   randomNum = String(Number(randomNum) + 1).padStart(2, '0');
  // }
  setBg();

}
slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
  setBg()
}
slidePrev.addEventListener('click', getSlidePrev);




// weather

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=05363d60e9bf09f12042afb599fe8cb9&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
getWeather()

async function getWeatherCity() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=05363d60e9bf09f12042afb599fe8cb9&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
city.addEventListener('change', getWeatherCity);

// quote of the Day

