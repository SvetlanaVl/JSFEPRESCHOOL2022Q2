const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

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


