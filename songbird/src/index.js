import "./components/player/player.js";
import "./components/toggle/toggle.js";
import "./components/header/header.js";
import "./pages/quiz-page/quiz-page.js";
import "./pages/results-page/results-page.js";
import "./pages/gallery-page/gallery-page.js";


const startPage = document.querySelector(".start-page");
const quizPage = document.querySelector(".quiz-page");
const resultsPage = document.querySelector(".results-page");


function handlerPlayBtn() {
  startPage.classList.add("start-page--hidden");
  quizPage.classList.remove("quiz-page--hidden");
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.querySelector(".menu__link--active").classList.remove("menu__link--active");
  document.querySelectorAll(".menu__link")[1].classList.add("menu__link--active");
}

document.querySelectorAll(".js-btn--play").forEach(elem => {
    elem.addEventListener("click", handlerPlayBtn);
});

