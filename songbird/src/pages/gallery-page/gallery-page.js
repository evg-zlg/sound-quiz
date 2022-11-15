import questions from "./../quiz-page/quiz-data.js";

const galleryItems = document.querySelector(".gallery__items");
const galleryTitle = document.querySelector(".gallery__title");
const galleryDescription = document.querySelector(".gallery__description");

function appendObjects() {
  
  questions.forEach(elem => {
    elem.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      const cardImage = document.createElement("div");
      cardImage.className = "card__image";
      const cardImg = document.createElement("img");
      cardImg.className = "card__img";
      item.pngColor ? cardImg.src = item.pngColor : cardImg.src = item.png;
      cardImg.alt = item.name;
      const cardInfo = document.createElement("div");
      cardInfo.className = "card__info";
      const cardTitle = document.createElement("h2");
      cardTitle.className = "card__title";
      lang === "en" ? cardTitle.textContent = item.name : cardTitle.textContent = item.nameRU;
      const cardDescription = document.createElement("div");
      cardDescription.className = "card__description";
      const cardText = document.createElement("p");
      cardText.className = "card__text";
      lang === "en" ? cardText.textContent = item.descript : cardText.textContent = item.descriptRU;
      const cardControl = document.createElement("div");
      cardControl.className = "card__control";
      const cardPlay = document.createElement("button");
      cardPlay.className = "btn card__play";
      lang === "en" ? cardPlay.textContent = "play" : cardPlay.textContent = "послушать";
  
      //build structure    
      cardControl.append(cardPlay);
      cardDescription.append(cardText, cardControl);
      cardInfo.append(cardTitle, cardDescription);
      cardImage.append(cardImg);
      card.append(cardImage, cardInfo);
  
      galleryItems.append(card);
    });
  })
};

appendObjects();

function updateLangGallery(lang) {
  const buttons = document.querySelectorAll(".card__play");
  const descriptions = document.querySelectorAll(".card__text");
  const names = document.querySelectorAll(".card__title");

  lang === "en" ? galleryTitle.textContent = "musical gallery" : galleryTitle.textContent = "музыкальная галлерея";
  lang === "en" ? galleryDescription.textContent = "Here you can listen to all the music and learn the information" : 
                  galleryDescription.textContent = "Здесь ты можешь послушать музыку и узнать что-нибудь новое";

  let k = 0;
  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].length; j++) {
      if (lang === "en") {
        buttons[k].textContent = "play";
        descriptions[k].textContent = questions[i][j].descript;
        names[k].textContent = questions[i][j].name;
      } else if (lang === "ru") {
        buttons[k].textContent = "воспроизвести";
        descriptions[k].textContent = questions[i][j].descriptRU;
        names[k].textContent = questions[i][j].nameRU;
      };
      k++;
    };
  };
};

function changeThemeImgGallery(theme) {
  const cardImages = document.querySelectorAll(".card__image");
  cardImages.forEach(elem => {
    if (theme === "dark") {
      elem.classList.add("card__image--dark");
    } else {
      elem.classList.remove("card__image--dark");
    };
  });
};

export { updateLangGallery, changeThemeImgGallery }