import { info } from "autoprefixer";
import { Player } from "./../../components/player/player.js";
import { updateScoreCount } from "./../../pages/results-page/results-page.js";
import questions from "./quiz-data";

const inputs = document.querySelectorAll(".game__input");
const btnNext = document.querySelector(".game__next");
const count = document.querySelector(".score__count");
const imgPlayer = document.querySelector(".game__image");
const gameInfo = document.querySelector(".info");
const infoImage = document.querySelector(".info__image");
const infoText = document.querySelector(".info__text");
const infoPlayerDOM = document.querySelector(".info__player");
const gamePlayer = document.querySelector(".game__player");
const questLabel = document.querySelector(".player__label");
const progressItems = document.querySelectorAll(".choise-group__item");
const countQuestions = questions.length;
const groupCategoryInstruments = document.querySelectorAll(".choise-group__category")[0];
const groupCategoryComposers = document.querySelectorAll(".choise-group__category")[1];
const scoreLabel = document.querySelector(".score__label").childNodes[0];
const questPlayer = new Player();
const infoPlayer = new Player();

// const rightSound = new Player(require("./../../assets/sounds/right.mp3"));
// const wrongSound = new Player(require("./../../assets/sounds/wrong.mp3"));

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
  gamePlayer.append(questPlayer.createDOMElements(".game__player"));
  infoPlayerDOM.append(infoPlayer.createDOMElements(".info__player"));

  // pause other player button play
  gamePlayer.querySelector(".player__play").addEventListener("click", () => {
    infoPlayer.pause();
  });
  infoPlayerDOM.querySelector(".player__play").addEventListener("click", () => {
    questPlayer.pause();
  });
  
});


btnNext.addEventListener("click", handlerBtnNext);

function handlerBtnNext() {
  // document.body.scrollTop = document.documentElement.scrollTop = 160;
  // playerPlaySecond.classList.remove("player__play--pause");
  questPlayer.pause();
  infoPlayer.pause();

  updateProgress();
  if (isFinish()) {
    progressItems[progressItems.length - 1].classList.remove(".choise-group__item");
    btnNext.classList.remove("game__next--last-quest");
    //open result page
    document.querySelector(".quiz-page").classList.add("quiz-page--hidden");
    document.querySelector(".results-page").classList.remove("results-page--hidden");
    // update score on the results page
    updateScoreCount(score);
  } else {
    currentQuestIndex ++;
    updateQuestion();
    questPlayer.play();
  };
    //check last quest and change button
  if ((currentQuestIndex) === (countQuestions - 1)) {
    btnNext.classList.add("game__next--last-quest");
    lang === "en" ? btnNext.textContent = "show results" : btnNext.textContent = "показать результаты"
  };
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
      questLabel.innerText = currentQuest[rightAnswerIndex].name;
    } else {
      questLabel.textContent = "Listen to music and find the answer";
    }
    // update answers
    for (let i = 0; i < currentQuest.length; i++) {
      //label answer
      inputs[i].parentNode.childNodes[2].data = currentQuest[i].name;
    };
    //update info
    infoText.textContent = answer.descript;
    //update btn
    btnNext.classList.contains("game__next--last-quest") ? btnNext.textContent = "show results" :
                                                           btnNext.textContent = "next question"

  } else if (lang === "ru") {
    groupCategoryInstruments.textContent = "инструменты";
    groupCategoryComposers.textContent = "композиторы";
    scoreLabel.textContent = "Счёт: ";
    // update label player
    if (answerFound) {
      questLabel.innerText = currentQuest[rightAnswerIndex].nameRU;
    } else {
      questLabel.textContent = "Послушай музыку и найди ответ";
    }
    // update answers
    for (let i = 0; i < currentQuest.length; i++) {
      //label answer
      inputs[i].parentNode.childNodes[2].data = currentQuest[i].nameRU;
    };
    //update info
    infoText.textContent = answer.descriptRU;
    //update btn
    btnNext.classList.contains("game__next--last-quest") ? btnNext.textContent = "показать результаты" :
                                                           btnNext.textContent = "следующий вопрос"

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

  //pause for pleyer info
  infoPlayer.pause();

  // create wrong and right audio for clicks
  const wrongSound = new Player();
  const rightSound = new Player();
  wrongSound.load(require("./../../assets/sounds/wrong.mp3"));
  rightSound.load(require("./../../assets/sounds/right.mp3"));

  // get answer object
  if (lang === "en") {
    answer = currentQuest.filter(item => item.name == e.target.parentNode.childNodes[2].textContent)[0];
  } else if (lang === "ru") {
    answer = currentQuest.filter(item => item.nameRU == e.target.parentNode.childNodes[2].textContent)[0];
  }
  
  //load new data into game__info
  answer.pngColor ? infoImage.src = answer.pngColor : infoImage.src = answer.png;
  // infoImage.src = answer.png;
  lang === "en" ? infoText.innerText = answer.descript : infoText.innerText = answer.descriptRU;
  
  //load audi into 
  infoPlayer.load(answer.mp3);
  // load(answer, 1)
  //show info of item
  gameInfo.classList.remove("info--masked");

  if (checkAnswer(e.target.parentNode.childNodes[2].data, currentQuest[rightAnswerIndex])) {
    // if music play, set pause
    answerFound = true;
    rightSound.play();
    questPlayer.pause();

    if ( ! e.target.parentNode.classList.contains("game__answer--is-right")) {
      e.target.parentNode.classList.add("game__answer--is-right");
      btnNext.disabled = false;
      
      //update score
      score += scoreTemp;
      count.innerText = score;

      //load quest image
      // currentQuest[rightAnswerIndex].pngColor ? imgPlayer.src = currentQuest[rightAnswerIndex].pngColor:
                                                imgPlayer.src = currentQuest[rightAnswerIndex].png;

      //update player label
      lang === "en" ? questLabel.innerText = currentQuest[rightAnswerIndex].name :
                      questLabel.innerText = currentQuest[rightAnswerIndex].nameRU;
    }

  } else {
    //check for repeat incorrect answer
    if ((! e.target.parentNode.classList.contains("game__answer--is-wrong")) && ( ! answerFound )) {
      e.target.parentNode.classList.add("game__answer--is-wrong");
      if ( ! answerFound ) {
        scoreTemp -= 1;
        wrongSound.play();
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
  rightAnswerIndex = Math.floor(Math.random() * (arr.length));
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
  window.lang === "en" ? questLabel.innerText = "Listen to music and find the answer" :
                         questLabel.innerText = "Послушай музыку и найди ответ";
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
  questPlayer.load(currentQuest[rightAnswerIndex].mp3);
  //update current and duration
  
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
  if (mode === "dark") {
    // without composers
    if (currentQuestIndex < 4) {
      for (let i = 0; i < imagesQuizPage.length; i++) {
        imagesQuizPage[i].classList.contains("info__image") ? imagesQuizPage[i].classList.add("info__image--dark") :
                                                              imagesQuizPage[i].classList.add("--invert");
      };
    } 
    // add class for players buttons
    document.querySelectorAll(".player__play").forEach(elem => {
      elem.classList.add("player__play--dark");
    })
    document.querySelectorAll(".player__volume-btn").forEach(elem => {
      elem.classList.add("player__volume-btn--dark");
    })

  } else {
    for (let i = 0; i < imagesQuizPage.length; i++) {
      imagesQuizPage[i].classList.contains("info__image") ? imagesQuizPage[i].classList.remove("info__image--dark") :
                                                            imagesQuizPage[i].classList.remove("--invert");
    };
    // remove class for players buttons
    document.querySelectorAll(".player__play").forEach(elem => {
      elem.classList.remove("player__play--dark");
    })
    document.querySelectorAll(".player__volume-btn").forEach(elem => {
      elem.classList.remove("player__volume-btn--dark");
    })

  }
};

function startNewGame() {
  // clear progress
  progressItems.forEach(elem => {
    elem.classList.remove("choise-group__item--current");
    elem.textContent = "";
  })
  progressItems[0].classList.add("choise-group__item--current");

  //clear score
  score = 0;
  count.textContent = 0;

  //setup quetsindex in begin
  currentQuestIndex = 0;

  //update quets
  updateQuestion();

  //update text in button 
  lang === "en" ? btnNext.textContent = "next questions" : btnNext.textContent = "следующий вопрос"
}

export { startNewGame, updateLangQuiz, changeThemeImgComposers, score }