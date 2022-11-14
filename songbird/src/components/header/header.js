import updateLangQuiz from "./../../pages/quiz-page/quiz-page.js";

const menu = document.querySelectorAll(".menu__link");
const aboutLink = menu[0];
const quizLink = menu[1];
const galleryLink = menu[2];
const themeToggleLable = document.querySelector(".toggle__label").childNodes[0];
const languagues = document.querySelector(".languague");
const languaguesIcon = document.querySelector(".languague__icon");
const languaguesLabel = document.querySelector(".languague__label");


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
    aboutLink.textContent = "Об игре";
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