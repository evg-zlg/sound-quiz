const menu = document.querySelectorAll(".menu__link");
const aboutLink = menu[0];
const quizLink = menu[1];
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

function changeLang () {
    if (languaguesIcon.classList.contains("languague__icon--en")) {
      languaguesIcon.classList.add("languague__icon--ru");
      languaguesIcon.classList.remove("languague__icon--en");
      languaguesLabel.textContent = "Русский"
    } else {
      languaguesIcon.classList.add("languague__icon--en");
      languaguesIcon.classList.remove("languague__icon--ru");
      languaguesLabel.textContent = "English"
    }
};

languagues.addEventListener("click", changeLang);