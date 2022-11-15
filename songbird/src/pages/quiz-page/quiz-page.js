// console.log("hello from quiz-page");
import { load, handlerBtnPlay, playAudio, pauseAudio } from "./../../components/player/player.js";
import questions from "./quiz-data";

const inputs = document.querySelectorAll(".game__input");
const btnNext = document.querySelector(".game__next");
const count = document.querySelector(".score__count");
const imgPlayer = document.querySelector(".game__image");
const gameInfo = document.querySelector(".info");
const infoImage = document.querySelector(".info__image");
const infoText = document.querySelector(".info__text");
const playerPlayFirst = document.querySelectorAll(".player__play")[0];
const playerPlaySecond = document.querySelectorAll(".player__play")[1];
const playerLabelFirst = document.querySelectorAll(".player__label")[0];
const playerLabelSecond = document.querySelectorAll(".player__label")[1];
const progressItems = document.querySelectorAll(".choise-group__item");
const countQuestions = questions.length;
const groupCategoryInstruments = document.querySelectorAll(".choise-group__category")[0];
const groupCategoryComposers = document.querySelectorAll(".choise-group__category")[1];
const scoreLabel = document.querySelector(".score__label").childNodes[0];


let category = 0;
let score = 0;
let scoreTemp = 0;
let currentQuestIndex = 0;
let currentQuest = new Object;
let rightAnswerIndex = 0;
let answerFound = false;
let answer = new Object;

window.lang = "en";

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
  // document.body.scrollTop = document.documentElement.scrollTop = 160;
  playerPlaySecond.classList.remove("player__play--pause");
  playerPlayFirst.classList.remove("player__play--pause");
  pauseAudio(1);
  pauseAudio(0);

  updateProgress();
  if (isFinish()) {
    progressItems[progressItems.length - 1].classList.remove(".choise-group__item");
    alert("finish");
  } else {
    currentQuestIndex ++;

    updateQuestion();
  }
};

function updateProgress() {
  let mode = "choise-group__item--current";
  for (let i = 0; progressItems.length; i++) {
    if (progressItems[i].classList.contains(mode)) {
      progressItems[i].classList.remove(mode);
      progressItems[i].textContent = scoreTemp;
      i++;
      if (progressItems[i]) {
        progressItems[i].classList.add(mode);
      } 
      break;
    }
  }
};

function updateLangQuiz (lang = "en") {
  if (lang === "en") {
    groupCategoryInstruments.textContent = "instruments";
    groupCategoryComposers.textContent = "composers";
    scoreLabel.textContent = "Score: ";
    // update label player
    if (answerFound) {
      playerLabelFirst.innerText = currentQuest[rightAnswerIndex].name;
    } else {
      playerLabelFirst.textContent = "Listen to music and find the answer";
    }
    // update answers
    for (let i = 0; i < currentQuest.length; i++) {
      //label answer
      inputs[i].parentNode.childNodes[2].data = currentQuest[i].name;
    };
    //update info
    infoText.textContent = answer.descript;
    //update btn
    btnNext.textContent = "next question";

  } else if (lang === "ru") {
    groupCategoryInstruments.textContent = "инструменты";
    groupCategoryComposers.textContent = "композиторы";
    scoreLabel.textContent = "Счёт: ";
    // update label player
    if (answerFound) {
      playerLabelFirst.innerText = currentQuest[rightAnswerIndex].nameRU;
    } else {
      playerLabelFirst.textContent = "Послушай музыку и найди ответ";
    }
    // update answers
    for (let i = 0; i < currentQuest.length; i++) {
      //label answer
      inputs[i].parentNode.childNodes[2].data = currentQuest[i].nameRU;
    };
    //update info
    infoText.textContent = answer.descriptRU;
    //update btn
    btnNext.textContent = "следующий вопрос";

  }
}

function checkAnswer(answer, obj) {
  if ((answer == obj.name) || (answer == obj.nameRU)) {
    return true
  } else {
    return false
  }
}

function handlerAnswersInput (e) {

  // get answer object

  if (lang === "en") {
    answer = currentQuest.filter(item => item.name == e.target.parentNode.childNodes[2].textContent)[0];
  } else if (lang === "ru") {
    answer = currentQuest.filter(item => item.nameRU == e.target.parentNode.childNodes[2].textContent)[0];
  }
  
  //load new data into game__info
  infoImage.src = answer.png;
  lang === "en" ? infoText.innerText = answer.descript : infoText.innerText = answer.descriptRU;
  
  //load audi into info
  load(answer, 1)
  //show info of item
  gameInfo.classList.remove("info--masked");

  if (checkAnswer(e.target.parentNode.childNodes[2].data, currentQuest[rightAnswerIndex])) {
    // if music play, set pause
    answerFound = true;
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
      lang === "en" ? playerLabelFirst.innerText = currentQuest[rightAnswerIndex].name :
                      playerLabelFirst.innerText = currentQuest[rightAnswerIndex].nameRU;
    }

  } else {
    //check for repeat incorrect answer
    if ((! e.target.parentNode.classList.contains("game__answer--is-wrong")) && ( ! answerFound )) {
      e.target.parentNode.classList.add("game__answer--is-wrong");
      if ( ! answerFound ) {
        scoreTemp -= 1;
      }
    }
    
  }
}

function isFinish() {
    if ((currentQuestIndex) === (countQuestions - 1)) {
        return true
    } else return false
}

function choiseCurrentQuest () {
  if (category === 0) {
    choiseRightAnswer(questions[currentQuestIndex]);
    return shuffleAnswers(questions[currentQuestIndex]);
  }
}

function choiseRightAnswer(arr) {
  rightAnswerIndex = Math.floor(Math.random() * (arr.length - 1));
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
  //exclude composers images dark theme
  if ((document.querySelector(".toggle__input").checked) && (currentQuestIndex >= 4)) {
    imgPlayer.classList.remove("--invert");
    inputs.forEach(elem => {
      elem.parentNode.children[0].classList.remove("--invert");
    })
    infoImage.classList.remove("--invert");
  }

  answerFound = false;
  //update player label
  window.lang === "en" ? playerLabelFirst.innerText = "Listen to music and find the answer" :
                         playerLabelFirst.innerText = "Послушай музыку и найди ответ";
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
  load(currentQuest[rightAnswerIndex], 0);
  // load answers
  for (let i = 0; i < currentQuest.length; i++) {
    //label answer
    window.lang === "en" ? inputs[i].parentNode.childNodes[2].data = currentQuest[i].name :
                           inputs[i].parentNode.childNodes[2].data = currentQuest[i].nameRU;
    //image answer
    inputs[i].parentNode.childNodes[0].src = currentQuest[i].png;
  };
  //load quest image by default
  imgPlayer.src = require("./../../assets/images/collage-main.png");
};

function changeThemeImgComposers(mode) {
  const imagesQuizPage = document.querySelector(".quiz-page").querySelectorAll("img");
  console.log(imagesQuizPage);
  if (mode === "dark") {
    // withou composers
    if (currentQuestIndex < 4) {
      for (let i = 0; i < imagesQuizPage.length; i++) {
        imagesQuizPage[i].classList.add("--invert");
      };
    } 
  } else {
    for (let i = 0; i < imagesQuizPage.length; i++) {
      imagesQuizPage[i].classList.remove("--invert");
    };
  }
};

export { updateLangQuiz, changeThemeImgComposers }