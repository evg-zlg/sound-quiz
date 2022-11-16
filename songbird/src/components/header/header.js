import { updateLangQuiz, changeThemeImgComposers } from "./../../pages/quiz-page/quiz-page.js";
import { updateLangResults } from "./../../pages/results-page/results-page.js";
import { updateLangGallery, changeThemeImgGallery } from "./../../pages/gallery-page/gallery-page.js";
import { lsOptions } from "./../../index.js";

const menu = document.querySelectorAll(".menu__link");
const aboutLink = menu[0];
const quizLink = menu[1];
const galleryLink = menu[2];
const logoLink = document.querySelector(".logo__link");
const themeToggleLable = document.querySelector(".toggle__label").childNodes[0];
const languagues = document.querySelector(".languague");
const languaguesIcon = document.querySelector(".languague__icon");
const languaguesLabel = document.querySelector(".languague__label");
const toggleTheme = document.querySelector(".toggle");
const logoAnimate = document.querySelector(".logo-animate");

logoLink.onclick = function() {
  logoAnimate.childNodes[1].classList.toggle("logo-animate__left--on-anim");
  logoAnimate.childNodes[2].classList.toggle("logo-animate__mid--on-anim");
  logoAnimate.childNodes[3].classList.toggle("logo-animate__right--on-anim");
  // logoAnimate.childNodes[4].classList.toggle("logo-animate__label--on-anim");
  
  return false;
};

aboutLink.onclick = function () {
  document.querySelector(".quiz-page").classList.add("quiz-page--hidden");
  quizLink.classList.remove("menu__link--active");
  
  document.querySelector(".results-page").classList.add("results-page--hidden");

  document.querySelector(".gallery-page").classList.add("gallery-page--hidden");
  galleryLink.classList.remove("menu__link--active");

  document.querySelector(".start-page").classList.remove("start-page--hidden");
  aboutLink.classList.add("menu__link--active");
  
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  return false;
};

quizLink.onclick = function () {
  document.querySelector(".gallery-page").classList.add("gallery-page--hidden");
  galleryLink.classList.remove("menu__link--active");
  
  document.querySelector(".start-page").classList.add("start-page--hidden");
  aboutLink.classList.remove("menu__link--active");

  document.querySelector(".quiz-page").classList.remove("quiz-page--hidden");
  quizLink.classList.add("menu__link--active");

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  return false;
}

galleryLink.onclick = function () {
  document.querySelector(".start-page").classList.add("start-page--hidden");
  aboutLink.classList.remove("menu__link--active");

  document.querySelector(".results-page").classList.add("results-page--hidden");

  document.querySelector(".quiz-page").classList.add("quiz-page--hidden");
  quizLink.classList.remove("menu__link--active");

  document.querySelector(".gallery-page").classList.remove("gallery-page--hidden");
  galleryLink.classList.add("menu__link--active");

  return false;
}

function updateLang (lang = "en") {
  const title = document.querySelector(".title").childNodes[0];
  const titleColored = document.querySelector(".title--colored");
  const mainTitle = document.querySelector(".main__title");
  const mainText = document.querySelector(".main__text");
  const mainBtn = document.querySelector(".main__btn");
  const songsTitle = document.querySelector(".songs__title");
  const songsText = document.querySelector(".songs__text");
  const songsBtn = document.querySelector(".songs__btn");
  const composerTitle = document.querySelector(".composer__title");
  const composerText = document.querySelector(".composer__text");
  const composerBtn = document.querySelector(".composer__btn");
  
  
  if (lang === "en") {
    // update lang in header 
    aboutLink.textContent = "About";
    quizLink.textContent = "Quiz";
    galleryLink.textContent = "Gallery";
    themeToggleLable.textContent = "dark theme";

    //update main section
    title.textContent = "WELCOME TO THE";
    titleColored.textContent = "sound quiz";
    mainTitle.textContent = "music instruments";
    mainText.textContent = "Listen to the music and try to identify the musical instrument";
    mainBtn.textContent = "Try it";

    //update songs section
    songsTitle.textContent = "listen to the great music";
    songsText.textContent = "Listen, listen more.. and find right song";
    songsBtn.textContent = "Hmm, that's interesting";

    //update composer section
    composerTitle.textContent = "Do you know the classics?";
    composerText.textContent = "Test your knowledge and learn something new in the sound quiz";
    composerBtn.textContent = "I'm ready to play";

    //update quiz
    updateLangQuiz("en");

    //update results
    updateLangResults("en");

    //update gallery
    updateLangGallery("en");

  } else  if (lang === "ru") {
    // update lang in header 
    aboutLink.textContent = "Главная";
    quizLink.textContent = "Викторина";
    galleryLink.textContent = "Галлерея";
    themeToggleLable.textContent = "тёмная тема";

    //update main section
    title.textContent = "добро пожаловать в";
    titleColored.textContent = "музыкальную викторину";
    mainTitle.textContent = "музыкальные инструменты";
    mainText.textContent = "Послушай музыку и попробуй определить музыкальный инструмент";
    mainBtn.textContent = "Попробовать";

    //update songs section
    songsTitle.textContent = "Слушай красивую музыку";
    songsText.textContent = "Слушай, слушай ещё.. и найди правильный ответ";
    songsBtn.textContent = "Хмм, интересно";
    
    //update composer section
    composerTitle.textContent = "Знаешь классиков?";
    composerText.textContent = "Проверь себя и узнай что-то новое в музыкальной викторине";
    composerBtn.textContent = "Готов сыграть";

    //update quiz
    updateLangQuiz("ru");
    //update resulte
    updateLangResults("ru");

    //update gallery
    updateLangGallery("ru");
  }
}

function changeLang (lang) {
  if ( ! (typeof lang === "string")) {
    languaguesIcon.classList.contains("languague__icon--en") ? lang = "ru" : lang = "en";
  } 
    if (lang === "ru") {
      // change icon and label in header
      languaguesIcon.classList.add("languague__icon--ru");
      languaguesIcon.classList.remove("languague__icon--en");
      languaguesLabel.textContent = "Русский";
      window.lang = "ru";
      updateLang("ru");
      //update local storage
      lsOptions["lsLangEvgZlg"] = "ru";
    } else {
      // change icon and label in header on ru
      languaguesIcon.classList.add("languague__icon--en");
      languaguesIcon.classList.remove("languague__icon--ru");
      languaguesLabel.textContent = "English";
      updateLang("en");
      window.lang = "en";
      lsOptions["lsLangEvgZlg"] = "en";
    };
    localStorage.setItem("lsLangEvgZlg", lsOptions["lsLangEvgZlg"]);
};

languagues.addEventListener("click", changeLang);

toggleTheme.addEventListener("click", changeTheme);

function changeTheme (theme) {
  if ((toggleTheme.childNodes[1].childNodes[1].checked) || (theme === "dark")) {
    toggleTheme.childNodes[1].childNodes[1].checked = true;

    //change colors dark
    document.documentElement.style.setProperty("--primary-bg-color", "rgb(58, 58, 58)");
    document.documentElement.style.setProperty("--primary-text-color", "#fffefc");
    document.documentElement.style.setProperty("--right-light-color", "rgb(150, 192, 150)");
    document.documentElement.style.setProperty("--right-color", "rgb(86 213 86)");
    document.documentElement.style.setProperty("--shadow-color", "rgb(94, 94, 94)");
    document.documentElement.style.setProperty("--drop-shadow-color", "rgba(170, 170, 170, 0.3)");
    document.documentElement.style.setProperty("--wrong-color", "#ff7f62");
    //invert logo
    logoAnimate.children[0].classList.add("--invert");
    logoAnimate.children[1].classList.add("--invert");
    logoAnimate.children[2].classList.add("--invert");
    //invert png on start page
    let startPage = document.querySelector(".start-page");
    let imagesStartPage = startPage.querySelectorAll("img");
    imagesStartPage[0].classList.add("--invert");
    imagesStartPage[1].classList.add("--invert");
    imagesStartPage[4].classList.add("--invert");
    imagesStartPage[5].classList.add("--invert");
    document.querySelector(".songs__image").classList.add("songs__image--invert");      

    //change color image quiz-page
    changeThemeImgComposers("dark");

    //change color image gallery
    changeThemeImgGallery("dark");

    //update local storage options
    lsOptions["lsThemeEvgZlg"] = "dark";

  } else {
    //change colors light
    document.documentElement.style.setProperty("--primary-bg-color", "#fffefc");
    document.documentElement.style.setProperty("--primary-text-color", "#040404");
    document.documentElement.style.setProperty("--right-light-color", "rgba(53, 136, 53, 0.5)");
    document.documentElement.style.setProperty("--right-color", "rgb(53, 136, 53)");
    document.documentElement.style.setProperty("--shadow-color", "rgb(167, 167, 167)");
    document.documentElement.style.setProperty("--drop-shadow-color", "rgba(0,0,0,0.3)");
    document.documentElement.style.setProperty("--wrong-color", "#e32a1d");

    //invert logo
    logoAnimate.children[0].classList.remove("--invert");
    logoAnimate.children[1].classList.remove("--invert");
    logoAnimate.children[2].classList.remove("--invert");
    //invert png on start page
    let startPage = document.querySelector(".start-page");
    let imagesStartPage = startPage.querySelectorAll("img");
    imagesStartPage[0].classList.remove("--invert");
    imagesStartPage[1].classList.remove("--invert");
    imagesStartPage[4].classList.remove("--invert");
    imagesStartPage[5].classList.remove("--invert");
    document.querySelector(".songs__image").classList.remove("songs__image--invert");
    
    //change color image quiz-page
    changeThemeImgComposers("light");

    //change color image gallery
    changeThemeImgGallery("light");

    //update local storage options
    lsOptions["lsThemeEvgZlg"] = "light";
  }

  //update local storage 
  localStorage.setItem("lsThemeEvgZlg", lsOptions["lsThemeEvgZlg"]);
};

export { changeTheme, changeLang }
