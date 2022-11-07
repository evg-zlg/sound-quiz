const title = document.querySelector(".player__label");
const audio = document.querySelector(".player__audio");
const btnPlay = document.querySelector(".player__play");
const progress = document.querySelector(".player__progress-in");
const currentTime = document.querySelector(".player__current-time");
const allTime = document.querySelector(".player__all-time");


function playAudio () {
  audio.play();
}

function pauseAudio () {
  audio.pause();
}

function handlerBtnPlay() {
  if (btnPlay.classList.contains("player__play--pause")) {
    pauseAudio();
  } else {
    playAudio();
  }
  btnPlay.classList.toggle("player__play--pause");
};

btnPlay.addEventListener("click", handlerBtnPlay);


export default function load(obj) {
  audio.src = obj.mp3;
}