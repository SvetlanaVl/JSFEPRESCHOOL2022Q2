const body = document.querySelector("body");
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");

// slider

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bgNum = String(getRandomNum(1, 20)).padStart(2, "0");

function setBg() {
  const date = new Date();
  const hours = date.getHours();
  const timesOfDay = day();
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/SvetlanaVl/stage1-tasks/assets/images/${timesOfDay}/${bgNum}.jpg?raw=true`;

  function day() {
    if (hours >= 6 && hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 18) {
      return "afternoon";
    } else if (hours >= 18 && hours < 24) {
      return "evening";
    } else if (hours >= 24 && hours < 6) {
      return "night";
    }
  }

  img.onload = () => {
    body.style.backgroundImage = `url('${img.src}')`;
  };

  img.onerror = function () {
    alert("Ошибка загрузки " + this.src);
  };
}

setBg();

function getSlideNext() {
  if (bgNum === "20") {
    bgNum = "01";
  } else if (bgNum < 20) {
    bgNum = String(Number(bgNum) + 1).padStart(2, "0");
  }

  setBg();
}

slideNext.addEventListener("click", getSlideNext);

function getSlidePrev() {
  if (bgNum === "01") {
    bgNum = "20";
  } else if (bgNum <= 20) {
    bgNum = String(Number(bgNum) - 1).padStart(2, "0");
  }

  setBg();
}

slidePrev.addEventListener("click", getSlidePrev);