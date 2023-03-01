// import "./components/player/player.js";
import "./components/toggle/toggle.js";
import "./components/header/header.js";
import "./pages/quiz-page/quiz-page.js";
import "./pages/results-page/results-page.js";
import "./pages/gallery-page/gallery-page.js";

import { changeTheme, changeLang } from "./components/header/header.js";
import { startNewGame } from "./pages/quiz-page/quiz-page.js";

const startPage = document.querySelector(".start-page");
const quizPage = document.querySelector(".quiz-page");
const resultsPage = document.querySelector(".results-page");
const lsOptions = new Object;

document.addEventListener("DOMContentLoaded", () => {
  //load theme from local storage
  try {
    lsOptions["lsThemeEvgZlg"] = localStorage.getItem("lsThemeEvgZlg");
  } catch (err) {
  } finally {
    lsOptions["lsThemeEvgZlg"] ? lsOptions["lsThemeEvgZlg"] : lsOptions["lsThemeEvgZlg"] = "light";
    changeTheme(lsOptions["lsThemeEvgZlg"]);
  };
  //load theme from local storage
  try {
    lsOptions["lsLangEvgZlg"] = localStorage.getItem("lsLangEvgZlg");
  } catch (err) {
  } finally {
    lsOptions["lsLangEvgZlg"] ? lsOptions["lsLangEvgZlg"] : lsOptions["lsLangEvgZlg"] = "en";
    changeLang(lsOptions["lsLangEvgZlg"]);
  };
});

function handlerPlayBtn() {
  startPage.classList.add("start-page--hidden");
  quizPage.classList.remove("quiz-page--hidden");
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.querySelector(".menu__link--active").classList.remove("menu__link--active");
  document.querySelectorAll(".menu__link")[1].classList.add("menu__link--active");
  startNewGame();
}

document.querySelectorAll(".js-btn--play").forEach(elem => {
    elem.addEventListener("click", handlerPlayBtn);
});

export { lsOptions }