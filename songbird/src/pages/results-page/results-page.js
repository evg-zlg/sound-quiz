import { score, startNewGame } from "./../quiz-page/quiz-page.js";

const resultsTitle = document.querySelector(".results__title");
const resultsText = document.querySelector(".results__text");
const resultsCount = document.querySelector(".results__count");
const resultsQuestion = document.querySelector(".results__question");
const resultsBtns = document.querySelectorAll(".results__btn");

function updateScoreCount(score) {
  document.querySelector(".results__count").textContent = score;
}

function updateLangResults(lang) {
  if (lang === "en") {
    resultsTitle.textContent = "Congratulations";
    resultsText.textContent = "You passed the quiz and scored " + score + " points";
    resultsQuestion.textContent = "Do you want to play more?";
    resultsBtns[0].textContent = "start a new game";
    resultsBtns[1].textContent = "open gallery";

  } else if (lang === "ru") {
    resultsTitle.textContent = "поздравляю";
    resultsText.textContent = "Викторина закончилась, у тебя " + score + " points";
    resultsQuestion.textContent = "Хочешь сыграть ещё?";
    resultsBtns[0].textContent = "начать новую игру";
    resultsBtns[1].textContent = "открыть галлерею";
  }
}
//start new game
resultsBtns[0].addEventListener("click", () => {
  document.querySelector(".quiz-page").classList.remove("quiz-page--hidden");
  document.querySelector(".results-page").classList.add("results-page--hidden");
  document.querySelectorAll(".menu__link")[1].classList.add("menu__link--active");
  startNewGame();
});

resultsBtns[1].addEventListener("click", () => {
  document.querySelector(".gallery-page").classList.remove("gallery-page--hidden");
  document.querySelector(".results-page").classList.add("results-page--hidden");
  document.querySelectorAll(".menu__link")[2].classList.add("menu__link--active");
  document.querySelectorAll(".menu__link")[1].classList.remove("menu__link--active");
  startNewGame();
});

export { updateLangResults, updateScoreCount }