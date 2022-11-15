import questions from "./../quiz-page/quiz-data.js";

const galleryItems = document.querySelector(".gallery__items");

function appendObjects() {
  
  questions.forEach(elem => {
    elem.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      const cardImage = document.createElement("div");
      cardImage.className = "card__image";
      const cardImg = document.createElement("img");
      cardImg.className = "card__img";
      cardImg.src = item.png;
      cardImg.alt = item.name;
      const cardInfo = document.createElement("div");
      cardInfo.className = "card__info";
      const cardTitle = document.createElement("h2");
      cardTitle.className = "card__title";
      cardTitle.textContent = item.name;
      const cardDescription = document.createElement("div");
      cardDescription.className = "card__description";
      const cardText = document.createElement("p");
      cardText.className = "card__text";
      cardText.textContent = item.descript;
      const cardControl = document.createElement("div");
      cardControl.className = "card__control";
      const cardPlay = document.createElement("button");
      cardPlay.className = "btn card__play";
      cardPlay.textContent = "play";
  
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
