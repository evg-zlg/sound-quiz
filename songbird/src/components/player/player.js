const title = document.querySelector(".player__label");
const audio = document.querySelectorAll(".player__audio");
const btnPlay = document.querySelectorAll(".player__play");
const progress = document.querySelector(".player__progress-in");
const currentTime = document.querySelector(".player__current-time");
const allTime = document.querySelector(".player__all-time");


function playAudio (n) {
  audio[n].play();
}

function pauseAudio (n) {
  audio[n].pause();
}

function handlerBtnPlay(n) {
  if (btnPlay[n].classList.contains("player__play--pause")) {
    pauseAudio(n);
  } else {
    playAudio(n);
  }
  btnPlay[n].classList.toggle("player__play--pause");
};

btnPlay[0].addEventListener("click", () => handlerBtnPlay(0));
btnPlay[1].addEventListener("click", () => handlerBtnPlay(1));


function load(obj) {
  audio[0].src = obj.mp3;
  audio[1].src = obj.mp3;
}

audio[0].addEventListener("ended", () => {
  btnPlay[0].classList.toggle("player__play--pause");
});
audio[1].addEventListener("ended", () => {
  btnPlay[1].classList.toggle("player__play--pause");
});

export { load, handlerBtnPlay, playAudio, pauseAudio }