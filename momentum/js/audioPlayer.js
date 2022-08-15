import playList from "./playList.js";
console.log(playList);

const play = document.querySelector(".play");
const buttonPlayPrev = document.querySelector(".play-prev");
const buttonPlayNext = document.querySelector(".play-next");
const album = document.querySelector(".play-list");
const progressBar = document.querySelector(".progress-bar");
const durationTime = document.querySelector(".durationTime");
const currentTime = document.querySelector(".currentTime");
const playItemActive = document.querySelector(".play-item-active");

// Audio player

let isPlay = false;

const audio = new Audio();

let audioActive = "";

function playAudio() {
  if (isPlay === false) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;

    isPlay = true;

    audio.play();

    audioActive = playList[playNum].title;

    // playItemActive.textContent = 'audioActive'
    playItemActive.textContent = "yes";

    console.log(audioActive);
  } else {
    audio.pause();

    isPlay = false;
  }

  play.classList.toggle("pause");

  showDurationTime();

  setInterval(progressValue, 100);

  activeAudio();
}

play.addEventListener("click", playAudio);

let playNum = 0;

function playNext() {
  if (playNum === playList.length - 1) {
    playNum = 0;
  } else if (playNum < playList.length - 1) {
    playNum = playNum + 1;
  }
  isPlay = false;

  playAudio();

  play.classList.toggle("pause");
}

buttonPlayNext.addEventListener("click", playNext);

function playPrev() {
  if (playNum === 0) {
    playNum = playList.length - 1;
  } else if (playNum <= playList.length - 1) {
    playNum = playNum - 1;
  }

  isPlay = false;

  playAudio();

  play.classList.toggle("pause");
}

buttonPlayPrev.addEventListener("click", playPrev);

audio.classList.add("item-active");

for (let i = 0; i < playList.length; i++) {
  const li = document.createElement("li");

  li.classList.add("play-item");

  li.textContent = playList[i].title;

  album.append(li);

  // li.classList.add('item-active');
}

audio.addEventListener("ended", function () {
  playPrev();
});

function showDurationTime() {
  let audioLength = playList[playNum].duration;
  let audioTime = Math.round(audio.currentTime);

  progressBar.style.width = (audioTime * 100) / audioLength + "%";

  durationTime.textContent = audioLength;
}

progressBar.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(progressBar).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

function progressValue() {
  // progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  currentTime.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

function activeAudio() {
  playItemActive.textContent = playList.title;
  console.log(audio);
}

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
