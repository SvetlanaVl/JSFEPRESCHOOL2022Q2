const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherError = document.querySelector(".weather-error");
const city = document.querySelector(".city");


const name = document.querySelector(".name");
// const city = document.querySelector(".city");

// Local Storage

function setLocalStorage() {
  if (city.value === "") {
    city.value = "Minsk";
  }

  localStorage.setItem("name", name.value);
  localStorage.setItem("city", city.value);
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }

  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}

window.addEventListener("load", getLocalStorage);


// weather

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=05363d60e9bf09f12042afb599fe8cb9&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  // if (res.cod === '404') {
  //   weatherError.textContent = `Error! city not found for ${city.value}!`;
  // }

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/c`;
  humidity.textContent = `Humidity: ${Math.ceil(data.main.humidity)} %`;
}

getWeather();

async function getWeatherCity() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=05363d60e9bf09f12042afb599fe8cb9&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

city.addEventListener("change", getWeatherCity);