// const title = document.querySelector(".player__label");
// const audio = document.querySelectorAll(".player__audio");
// const btnPlay = document.querySelectorAll(".player__play");
// const progress = document.querySelector(".player__progress-in");
// const currentTime = document.querySelector(".player__current-time");
// const allTime = document.querySelector(".player__all-time");


// function playAudio (n) {
//   audio[n].play();
// }

// function pauseAudio (n) {
//   audio[n].pause();
// }

// function handlerBtnPlay(n) {
//   if (btnPlay[n].classList.contains("player__play--pause")) {
//     pauseAudio(n);
//   } else {
//     playAudio(n);
//   }
//   btnPlay[n].classList.toggle("player__play--pause");
// };

// btnPlay[0].addEventListener("click", () => handlerBtnPlay(0));
// btnPlay[1].addEventListener("click", () => handlerBtnPlay(1));


// function load(obj,i) {
//   audio[i].src = obj.mp3;
// }

// audio[0].addEventListener("ended", () => {
//   btnPlay[0].classList.toggle("player__play--pause");
// });
// audio[1].addEventListener("ended", () => {
//   btnPlay[1].classList.toggle("player__play--pause");
// });

const playerDOM = document.querySelector(".player");

class Player {
  constructor() {
    this.audio = new Audio();
    this.isPlay = false;
    this.timerShowVolume = 3;
    this.playerPlayBtn = document.createElement("button");
  };

  log() {
    console.log("ok:");
    console.log(this.audio.src);
  };

  play() {
    this.audio.play();
    this.isPlay = true;
    this.playerPlayBtn.classList.add("player__play--pause");
  };

  pause() {
    this.audio.pause();
    this.isPlay = false;
    this.playerPlayBtn.classList.remove("player__play--pause");
  };

  load(src) {
    this.audio.src = src;
  };

  createDOMElements() {
    const player = document.createElement("div");
    const playerControl = document.createElement("div");
    const playerVolumeBtn = document.createElement("button");
    const playerProgress = document.createElement("input");  
    const playerVolume = document.createElement("input");  
    const playerCurrentTime = document.createElement("label");  
    const playerAllTime = document.createElement("label");  
    const playerRowProgress = document.createElement("div");
    const playerRowVolume = document.createElement("div");

    player.className = "player";
    playerControl.className = "player__control";
    this.playerPlayBtn.className = "player__play";
    playerVolume.className = "player__volume"
    playerProgress.type = "range";
    playerVolume.type = "range";
    playerVolumeBtn.className = "player__volume-btn";
    playerCurrentTime.className = "player__current-time";
    playerAllTime.className = "player__all-time";
    
    playerProgress.className = "player__progress";
    playerRowProgress.className = "player__row";
    playerRowVolume.className = "player__row";

    playerRowProgress.append(this.playerPlayBtn, playerProgress, playerCurrentTime, playerAllTime);
    playerRowVolume.append(playerVolumeBtn, playerVolume);

    playerControl.append(playerRowProgress, playerRowVolume);

    player.append(playerControl, this.audio);

    //add listener for button
    this.playerPlayBtn.addEventListener("click", () => {
      if (this.isPlay) {
        this.pause();
      } else {
        this.play();
      };
    });

    playerVolumeBtn.addEventListener("click", () => {
      
    });

    return player;
  }    

}

export { Player }