import playList from "./playList.js";

const play = document.querySelector(".play");
const buttonPlayPrev = document.querySelector(".play-prev");
const buttonPlayNext = document.querySelector(".play-next");
const album = document.querySelector(".play-list");
const progressBar = document.querySelector(".progress-bar");
const durationTime = document.querySelector(".durationTime");
const currentTime = document.querySelector(".currentTime");
const playItemActive = document.querySelector(".play-item-active");
const sound = document.querySelector(".sound");
const volumeImage = document.querySelector(".volume-image");

// Audio player

let isPlay = false;

const audio = new Audio();

let audioActive = "";

// Play - Pause

function playAudio() {
  if (isPlay === false) {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;

    isPlay = true;

    audio.play();

    audioActive = playList[playNum].title;
  } else {
    audio.pause();

    isPlay = false;
  }

  play.classList.toggle("pause");

  showDurationTime();

  setInterval(progressCurrentTime, 100);

  activeAudio();

  playNow();

  itemActive();
}

play.addEventListener("click", playAudio);

// play Next - play Prev

let playNum = 0;

function playNext() {
  if (playNum === playList.length - 1) {
    playNum = 0;
  } else if (playNum < playList.length - 1) {
    playNum = playNum + 1;
  }

  if (isPlay === false) {
    isPlay = true;
  } else {
    isPlay = false;
  }

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

  if (isPlay === false) {
    isPlay = true;
  } else {
    isPlay = false;
  }

  playAudio();

  play.classList.toggle("pause");
}

buttonPlayPrev.addEventListener("click", playPrev);

// Play List

function seePlayList() {
  for (let i = 0; i < playList.length; i++) {
    const li = document.createElement("li");

    li.classList.add("play-item");

    li.textContent = playList[i].title;

    album.append(li);

    li.classList.add("play-icon-list");
  }
}
seePlayList();

// self-switching

audio.addEventListener("ended", function () {
  playNext();
});

// show Duration Time

function showDurationTime() {
  let audioLength = playList[playNum].duration;
  let audioTime = Math.round(audio.currentTime);

  progressBar.style.width = (audioTime * 100) / audioLength + "%";

  durationTime.textContent = audioLength;
}

// progress Current Time

function progressCurrentTime() {
  progressBar.ontimeupdate = (audio.currentTime / audio.duration) * 100 + "%";

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

// click progress Current Time on progressBar

progressBar.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(progressBar).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

// progress Bar play

audio.ontimeupdate = function () {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
};

// name active Audio

function activeAudio() {
  playItemActive.textContent = playList.title;
}

const playItems = document.querySelectorAll(".play-item");

function playNow() {
  for (let i = 0; i < playItems.length; i++) {
    if (playList[playNum].title == playItems[i].textContent) {
      playItemActive.textContent = playList[playNum].title;
    }
  }
}

// item Active

function itemActive() {
  for (let i = 0; i < playItems.length; i++) {
    if (playList[playNum].title == playItems[i].textContent) {
      playItems[i].classList.add("active");
      playItems[i].classList.add("pause-item");
    } else {
      playItems[i].classList.remove("active");
      playItems[i].classList.remove("pause-item");
    }
  }
}

// audio volume

sound.addEventListener(
  "click",
  (e) => {
    const volumeLineWidth = window.getComputedStyle(sound).width;
    const volumeToSeek = e.offsetX / parseInt(volumeLineWidth);
    audio.volume = volumeToSeek;
  },
  false
);

// on or off the sound

function onSound() {
  if (audio.volume > 0) {
    audio.volume = 0;
    sound.value = 0;
  } else {
    audio.volume = 0.4;
    sound.value = 40;
  }

  volumeImage.classList.toggle("volume-image-off");
}

volumeImage.addEventListener("click", onSound);

// start and stop playing a track by clicking on the button next to it in the playlist

// function clickOnIcon() {
//   itemActive()
//   playAudio ()
//   isPlay = false
// }

// for (let i = 0; i < playItems.length; i += 1) {
//   playItems[i].addEventListener("click", clickOnIcon);

// }

// audio.ontimeupdate = function(){
//   progressBar.max = audio.duration;
//   progressBar.value = audio.currentTime;
// };
// progressBar.addEventListener('click', (e) => {
// const progressBarLineWidth = window.getComputedStyle(progressBar.value).width;
//   const progressBarToSeek = e.offsetX / parseInt(progressBarLineWidth);
//   progressBar.timeupdate = progressBarToSeek

// },
// false
// );
