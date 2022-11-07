// console.log("hello from quiz-page");
import { load, handlerBtnPlay, playAudio, pauseAudio } from "./../../components/player/player.js";
import songs from "./quiz-data-songs";
import composers from "./quiz-data-composers";

const inputs = document.querySelectorAll(".game__input");
const btnNext = document.querySelector(".game__next");
const temp = document.querySelector(".game__temp");
const count = document.querySelector(".game__count");
const imgPlayer = document.querySelector(".game__image");
const playerPlayFirst = document.querySelectorAll(".player__play")[0];
const playerPlaySecond = document.querySelectorAll(".player__play")[1];
let score = 0;
let scoreTemp = 0;
let currentQuestIndex = 0;
let currentQuest = new Object;

// on load quiz
document.addEventListener("DOMContentLoaded", () => {
  updateQuestion();
  // add click for answers
  for (let i = 0; i < currentQuest.answers.length; i++) {
    inputs[i].addEventListener("click", handlerAnswersInput);
  }  
});

// function choiseQuest() {
//   currentQuest = songs[0];
// }
btnNext.addEventListener("click", handlerBtnNext)

function handlerBtnNext() {
  playerPlaySecond.classList.remove("player__play--pause");
  playerPlayFirst.classList.remove("player__play--pause");
  pauseAudio(1);
  pauseAudio(0);
  
  if (isFinish()) {
    alert("finish");
  } else {
    updateQuestion();
  }
};

function checkAnswer(answer, obj) {
  if (answer == obj.answer) {
    return true
  } else {
    return false
  }
}

function handlerAnswersInput (e) {
  if (playerPlayFirst.classList.contains("player__play--pause")) {
    playerPlayFirst.classList.remove("player__play--pause");
    pauseAudio(0);
  }

  if (checkAnswer(e.target.parentNode.childNodes[1].data, currentQuest)) {
    e.target.parentNode.classList.add("game__answer--is-right");
    btnNext.disabled = false;
    inputs[0].parentNode.parentNode.classList.add("game__inputs--disabled");
    document.querySelector(".info").classList.remove("info--masked");
    score += scoreTemp;
    count.innerText = score;
    //load quest image
    imgPlayer.src = currentQuest.png;

  } else {
    e.target.parentNode.classList.add("game__answer--is-wrong");
    scoreTemp -= 2;
    temp.innerText = scoreTemp;
  }
}

function shuffle() {

}

function isFinish() {
    if ((currentQuestIndex) == songs.length) {
        return true
    } else return false
}

function updateQuestion() {

    //update score
    scoreTemp = 10;
    currentQuest = songs[currentQuestIndex++];

    // clear answers block
    inputs[0].parentNode.parentNode.classList.remove("game__inputs--disabled");
    inputs.forEach(elem => {
      elem.parentNode.classList.remove("game__answer--is-right");
      elem.parentNode.classList.remove("game__answer--is-wrong");
      elem.checked = false;
    });

    //disabled button netx
    btnNext.disabled = true;

    // hidden info
    document.querySelector(".info").classList.add("info--masked");

    // load audio
    load(currentQuest);

    // load answers
    for (let i = 0; i < currentQuest.answers.length; i++) {
      inputs[i].parentNode.childNodes[1].data = currentQuest.answers[i];
    };

    setTimeout(() => {
      //load quest image by default
      imgPlayer.src = require("./../../assets/images/collage-main.png");
      //load info
      document.querySelector(".info__image").src = currentQuest.png;
      document.querySelector(".info__text").innerText = currentQuest.descript;
    }, 300);  
};




