import playList from './playList.js';
console.log(playList);

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
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const city = document.querySelector('.city');
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const play = document.querySelector('.play');
const buttonPlayPrev = document.querySelector('.play-prev');
const buttonPlayNext = document.querySelector('.play-next');
const album = document.querySelector('.play-list');
const progressBar = document.querySelector('.progress-bar');
const durationTime = document.querySelector('.durationTime');
const currentTime = document.querySelector('.currentTime');


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

// Local Storage

function setLocalStorage() {
  if (city.value === '') {
    city.value = 'Minsk';
  }

  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }

  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}

window.addEventListener('load', getLocalStorage);

// slider


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bgNum = String(getRandomNum(1, 20)).padStart(2, '0');

function setBg() {  
  const date = new Date();
  const hours = date.getHours();
  const timesOfDay = day();
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/SvetlanaVl/stage1-tasks/assets/images/${timesOfDay}/${bgNum}.jpg?raw=true`;
  
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
  
  img.onload = () => {   
    body.style.backgroundImage = `url('${img.src}')`;
  };

  img.onerror = function() {
    alert("Ошибка загрузки " + this.src);
  };

}

setBg();

function getSlideNext() {
  if(bgNum === '20') {
    bgNum = '01';
  }else if(bgNum < 20) {
    bgNum = String(Number(bgNum) + 1).padStart(2, '0');
  }

  setBg();
}

slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
  if(bgNum === '01') {
    bgNum = '20';
  }else if(bgNum <= 20) {
    bgNum = String(Number(bgNum) - 1).padStart(2, '0');
  }

  setBg()
}

slidePrev.addEventListener('click', getSlidePrev);


// weather

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=05363d60e9bf09f12042afb599fe8cb9&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  // if (res.cod === '404') {
  //   weatherError.textContent = `Error! city not found for ${city.value}!`;
  // } 
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/c`;
  humidity.textContent = `Humidity: ${Math.ceil(data.main.humidity)} %`;
}

getWeather()

async function getWeatherCity() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=05363d60e9bf09f12042afb599fe8cb9&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

city.addEventListener('change', getWeatherCity);


// quote of the Day

async function getQuotes() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  const quoteText = data[getRandomNum(0, data.length)].text;
  const authorText = data[getRandomNum(0, data.length)].author;

  quote.textContent = quoteText;
  author.textContent = authorText;
}

getQuotes();

changeQuote.addEventListener('click', getQuotes);

// Audio player

let isPlay = false;

const audio = new Audio();

function playAudio() {  
  if (isPlay === false) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;

    isPlay = true;

    audio.play();

  } else {
    audio.pause();

    isPlay = false;
  }

  play.classList.toggle('pause');

  showDurationTime ()

  setInterval(progressValue, 100);
}


play.addEventListener('click', playAudio);

let playNum = 0;

function playNext() {
  if (playNum === (playList.length - 1)) {
    playNum = 0;
  } else if (playNum < (playList.length - 1)) {
    playNum = playNum + 1;
  }
  isPlay = false;

  playAudio();

  play.classList.toggle('pause');
}

buttonPlayNext.addEventListener('click', playNext);

function playPrev() {
  if (playNum === 0) {
    playNum = playList.length -1;
  } else if (playNum <= (playList.length -1)) {
    playNum = playNum - 1;
  }

  isPlay = false;

  playAudio();

  play.classList.toggle('pause');
}

buttonPlayPrev.addEventListener('click', playPrev);

audio.classList.add('item-active');

for(let i = 0; i < playList.length; i++) {

  const li = document.createElement('li');

  li.classList.add('play-item');

  li.textContent = playList[i].title;

  album.append(li);
  
  
  // li.classList.add('item-active');
  
}

audio.addEventListener('ended', function() {

  playPrev();
});

function showDurationTime () {
  let audioLength = playList[playNum].duration;
  let audioTime = Math.round(audio.currentTime);

  progressBar.style.width = (audioTime * 100) / audioLength + '%';

  

  durationTime.textContent = audioLength;
  console.log(audioTime)
};


progressBar.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(progressBar).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

function progressValue () {
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  currentTime.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};



// audioPlay = setInterval(function() {
//   // Получаем значение на какой секунде песня
//   let audioTime = Math.round(audio.currentTime);
//   // Получаем всё время песни
//   let audioLength = Math.round(audio.duration)
//   // Назначаем ширину элементу time
//   time.style.width = (audioTime * 100) / audioLength + '%';
//   // Сравниваем, на какой секунде сейчас трек и всего сколько времени длится
//   // И проверяем что переменная treck меньше четырёх
//   if (audioTime == audioLength && treck < 3) {
//       treck++; // То Увеличиваем переменную 
//       switchTreck(treck); // Меняем трек
//   // Иначе проверяем тоже самое, но переменная treck больше или равна четырём
//   } else if (audioTime == audioLength && treck >= 3) {
//       treck = 0; // То присваиваем treck ноль
//       switchTreck(treck); Меняем трек
//   }
// }, 10)