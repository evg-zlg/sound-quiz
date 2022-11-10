// console.log("hello from quiz-page");
import { load, handlerBtnPlay, playAudio, pauseAudio } from "./../../components/player/player.js";
import instruments from "./quiz-data-instruments";
import composers from "./quiz-data-composers";

const inputs = document.querySelectorAll(".game__input");
const btnNext = document.querySelector(".game__next");
const temp = document.querySelector(".game__temp");
const count = document.querySelector(".score__count");
const imgPlayer = document.querySelector(".game__image");
const gameInfo = document.querySelector(".info");
const infoImage = document.querySelector(".info__image");
const infoText = document.querySelector(".info__text");
const playerPlayFirst = document.querySelectorAll(".player__play")[0];
const playerPlaySecond = document.querySelectorAll(".player__play")[1];
const playerLabelFirst = document.querySelectorAll(".player__label")[0];

let category = 0;
let score = 0;
let scoreTemp = 0;
let currentQuestIndex = 0;
let currentQuest = new Object;
let rightAnswerIndex = 0;


// on load quiz
document.addEventListener("DOMContentLoaded", () => {
  updateQuestion();
  // add click event for inputs with answer
  for (let i = 0; i < currentQuest.length; i++) {
    inputs[i].addEventListener("click", handlerAnswersInput);
  }  
});


btnNext.addEventListener("click", handlerBtnNext);

function handlerBtnNext() {
  document.body.scrollTop = document.documentElement.scrollTop = 160;
  playerPlaySecond.classList.remove("player__play--pause");
  playerPlayFirst.classList.remove("player__play--pause");
  pauseAudio(1);
  pauseAudio(0);
  
  if (isFinish()) {
    alert("finish");
  } else {
    currentQuestIndex ++;
    updateQuestion();
  }
};

function checkAnswer(answer, obj) {
  if (answer == obj.name) {
    return true
  } else {
    return false
  }
}

function handlerAnswersInput (e) {

  // get answer object
  let answer = currentQuest.filter(item => item.name == e.target.parentNode.childNodes[2].textContent)[0];
  
  //load new data into game__info
  infoImage.src = answer.png;
  infoText.innerText = answer.descript;

  gameInfo.classList.remove("info--masked");

  if (checkAnswer(e.target.parentNode.childNodes[2].data, currentQuest[rightAnswerIndex])) {
    // if music play, set pause
    if (playerPlayFirst.classList.contains("player__play--pause")) {
      playerPlayFirst.classList.remove("player__play--pause");
      pauseAudio(0);
    }

    if ( ! e.target.parentNode.classList.contains("game__answer--is-right")) {
      e.target.parentNode.classList.add("game__answer--is-right");
      btnNext.disabled = false;
      
      //update score
      score += scoreTemp;
      count.innerText = score;

      //load quest image
      imgPlayer.src = currentQuest[rightAnswerIndex].png;
      //update player label
      playerLabelFirst.innerText = currentQuest[currentQuestIndex].name;
    }

  } else {
    //check for repeat incorrect answer
    if (! e.target.parentNode.classList.contains("game__answer--is-wrong")) {
      e.target.parentNode.classList.add("game__answer--is-wrong");
      scoreTemp -= 1;
    }
    
  }
}

function isFinish() {
    if ((currentQuestIndex) == currentQuest.length) {
        return true
    } else return false
}

function updateGameQuestionPlayerLabel () {
  if (category === 0) {
    playerLabelFirst.innerText = "What instrument?";
  } else if (category === 1) {
    playerLabelFirst.innerText = "Who is the composer?";
  } else if (category === 2) {
    playerLabelFirst.innerText = "Do you know this music?";
  }
};

function choiseCurrentQuest () {
  if (category === 0) {
    choiseRightAnswer(instruments[currentQuestIndex]);
    return shuffleAnswers(instruments[currentQuestIndex]);
  }
}

function choiseRightAnswer(arr) {
  rightAnswerIndex = Math.floor(Math.random() * (arr.length - 1));
  console.log(rightAnswerIndex);
}

function shuffleAnswers(arr) {
  const newArr = Array.from(arr);
  let j = 0;
  let temp = 0;
  for (let i = newArr.length - 1; i > 0 ; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  };
  return newArr;
}

function updateQuestion() {
    //update player label
    updateGameQuestionPlayerLabel();

    //update score
    scoreTemp = 5;

    //update currentQuest
    currentQuest = choiseCurrentQuest();

    // clear style answers block, unchecked inputs
    inputs.forEach(elem => {
      elem.parentNode.classList.remove("game__answer--is-right");
      elem.parentNode.classList.remove("game__answer--is-wrong");
      elem.checked = false;
    });

    //disabled button next
    btnNext.disabled = true;

    // hidden info
    gameInfo.classList.add("info--masked");

    // load audio for quest
    load(currentQuest[rightAnswerIndex]);

    // load answers
    for (let i = 0; i < currentQuest.length; i++) {
      //label answer
      inputs[i].parentNode.childNodes[2].data = currentQuest[i].name;
      //image answer
      inputs[i].parentNode.childNodes[0].src = currentQuest[i].png;
    };

    //load quest image by default
    imgPlayer.src = require("./../../assets/images/collage-main.png");
};




