// console.log("hello from quiz-page");
import load from "./../../components/player/player.js";
import songs from "./quiz-data-songs";
import composers from "./quiz-data-composers";

const inputs = document.querySelectorAll(".game__input");
const btnNext = document.querySelector(".game__next");
const temp = document.querySelector(".game__temp");
const count = document.querySelector(".game__count");
let score = 0;
let scoreTemp = 0;

let currentQuest = new Object;;

// on load quiz
document.addEventListener("DOMContentLoaded", () => {
  updateQuestion();
});

function choiseQuest() {
  currentQuest = songs[0];
}

function checkAnswer(answer, obj) {
  if (answer == obj.answer) {
    return true
  } else {
    return false
  }
}

function handlerAnswersInput (e) {
  if (checkAnswer(e.target.parentNode.childNodes[1].data, currentQuest)) {
    e.target.parentNode.classList.add("game__answer--is-right");
    btnNext.disabled = false;
    inputs[0].parentNode.parentNode.classList.add("game__inputs--disabled");
    document.querySelector(".info").classList.remove("info--masked");
    score += scoreTemp;
    count.innerText = score;
  } else {
    e.target.parentNode.classList.add("game__answer--is-wrong");
    scoreTemp -= 2;
    temp.innerText = scoreTemp;
  }
}

function updateQuestion() {
  scoreTemp = 10;
  choiseQuest();
  load(currentQuest);
  for (let i = 0; i < currentQuest.answers.length; i++) {
    inputs[i].parentNode.childNodes[1].data = currentQuest.answers[i];
    inputs[i].addEventListener("click", handlerAnswersInput);
  };
};




