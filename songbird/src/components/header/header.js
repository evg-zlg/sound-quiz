import { updateLangQuiz, changeThemeImgComposers } from "./../../pages/quiz-page/quiz-page.js";

const menu = document.querySelectorAll(".menu__link");
const aboutLink = menu[0];
const quizLink = menu[1];
const galleryLink = menu[2];
const themeToggleLable = document.querySelector(".toggle__label").childNodes[0];
const languagues = document.querySelector(".languague");
const languaguesIcon = document.querySelector(".languague__icon");
const languaguesLabel = document.querySelector(".languague__label");
const toggleTheme = document.querySelector(".toggle");

aboutLink.onclick = function () {
  document.querySelector(".quiz-page").classList.add("quiz-page--hidden");
  quizLink.classList.remove("menu__link--active");
  
  document.querySelector(".start-page").classList.remove("start-page--hidden");
  aboutLink.classList.add("menu__link--active");
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  return false;
};

quizLink.onclick = function () {
  document.querySelector(".quiz-page").classList.remove("quiz-page--hidden");
  quizLink.classList.add("menu__link--active");
  
  document.querySelector(".start-page").classList.add("start-page--hidden");
  aboutLink.classList.remove("menu__link--active");
  document.body.scrollTop = document.documentElement.scrollTop = 0;

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
    
  }
}

function changeLang () {
    if (languaguesIcon.classList.contains("languague__icon--en")) {
      // change icon and label in header
      languaguesIcon.classList.add("languague__icon--ru");
      languaguesIcon.classList.remove("languague__icon--en");
      languaguesLabel.textContent = "Русский";
      window.lang = "ru";
      updateLang("ru");

    } else {
      // change icon and label in header on ru
      languaguesIcon.classList.add("languague__icon--en");
      languaguesIcon.classList.remove("languague__icon--ru");
      languaguesLabel.textContent = "English";
      updateLang("en");
      window.lang = "en";
    }
};

languagues.addEventListener("click", changeLang);

toggleTheme.addEventListener("click", changeTheme);

function changeTheme (e) {
  // // --primary-bg-color: #fffefc;
  // --primary-bg-color: rgb(58, 58, 58);
  // // --primary-text-color: #040404;
  // --primary-text-color: #fffefc;
  // --primary-accent-color: #e16259;
  // --hover-color: #c0443b;
  // --right-color: rgb(53, 136, 53);
  // // --right-light-color: rgba(53, 136, 53, 0.5);
  // --right-light-color: rgb(150, 192, 150);
  // // --shadow-color: rgb(167, 167, 167);
  // --shadow-color: rgb(94, 94, 94);
  // --drop-shadow-color: rgba(0,0,0,0.3);
  // --shadow-light-color: rgba(167, 167, 167, 0.8);

  if (toggleTheme.childNodes[1].childNodes[1].checked) {
    //change colors
    document.documentElement.style.setProperty("--primary-bg-color", "rgb(58, 58, 58)");
    document.documentElement.style.setProperty("--primary-text-color", "#fffefc");
    document.documentElement.style.setProperty("--right-light-color", "rgb(150, 192, 150)");
    document.documentElement.style.setProperty("--right-color", "rgb(86 213 86)");
    document.documentElement.style.setProperty("--shadow-color", "rgb(94, 94, 94)");
    //invert logo
    let logoAnimate = document.querySelector(".logo-animate");
    logoAnimate.children[0].classList.add("--invert");
    logoAnimate.children[1].classList.add("--invert");
    logoAnimate.children[2].classList.add("--invert");
    //invert png on start page
    let startPage = document.querySelector(".start-page");
    let imagesStartPage = startPage.querySelectorAll("img");
    imagesStartPage[0].classList.add("--invert");
    imagesStartPage[1].classList.add("--invert");
    //change color image quiz-page
    changeThemeImgComposers("dark");
  } else {
    //change colors
    document.documentElement.style.setProperty("--primary-bg-color", "#fffefc");
    document.documentElement.style.setProperty("--primary-text-color", "#040404");
    document.documentElement.style.setProperty("--right-light-color", "rgba(53, 136, 53, 0.5)");
    document.documentElement.style.setProperty("--right-color", "rgb(53, 136, 53)");
    document.documentElement.style.setProperty("--shadow-color", "rgb(167, 167, 167)");
    //invert logo
    let logoAnimate = document.querySelector(".logo-animate");
    logoAnimate.children[0].classList.remove("--invert");
    logoAnimate.children[1].classList.remove("--invert");
    logoAnimate.children[2].classList.remove("--invert");
    //invert png on start page
    let startPage = document.querySelector(".start-page");
    let imagesStartPage = startPage.querySelectorAll("img");
    imagesStartPage[0].classList.remove("--invert");
    imagesStartPage[1].classList.remove("--invert");

    //change color image quiz-page
    changeThemeImgComposers("light");
  }
};

