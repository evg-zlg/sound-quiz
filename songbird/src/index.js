console.log("script work");

import "./components/header/header.js";
import "./components/player/player.js";

const startPage = document.querySelector(".start-page");
const quizPage = document.querySelector(".quiz-page");


function handlerPlayBtn() {
    startPage.classList.add("start-page--hidden");
    quizPage.classList.remove("quiz-page--hidden");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

document.querySelectorAll(".js-btn--play").forEach(elem => {
    elem.addEventListener("click", handlerPlayBtn)
});