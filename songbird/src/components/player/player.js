class Player {
  constructor() {
    this.audio = new Audio();
    this.isPlay = false;
    this.timerShowVolume = 3;
    this.playerPlayBtn = document.createElement("button");
    this.playerCurrentTime = document.createElement("label");  
    this.playerAllTime = document.createElement("label");  
    this.playerProgress = document.createElement("input");
    this.playerVolume = document.createElement("input");  
    this.currentTime = 0;
    this.duration = 0;
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

    this.audio.addEventListener("loadedmetadata", () => {
       const duration = Math.trunc(this.audio.duration);

      // update duration label  
      if (duration > 0) {
        let time = "";
        let seconds = duration % 60; 
        if (duration > 60) {
          time = "0" + Math.trunc(duration / 60) + ":";
        } else {
          time = "00:";
        };
        if (duration % 60 >= 10) {
          time += seconds;
        } else {
          time += "0" + seconds;
        };
        this.playerAllTime.textContent = time;
      } else {
        this.playerAllTime.textContent = "00:00";
      };

      //update progress value
      this.playerProgress.value = 0;
    });

    // update current time audio after change input range
    this.playerProgress.addEventListener("input", (e) => {
      const duration = this.audio.duration;
      this.audio.currentTime = e.target.value * duration / 100;
    });

    // update volume audio after change input range
    this.playerVolume.addEventListener("input", (e) => {
      this.audio.volume = e.target.value / 100;
      console.log(this.audio.volume);
    })

  };

  createDOMElements() {
    const player = document.createElement("div");
    const playerControl = document.createElement("div");
    const playerVolumeBtn = document.createElement("button");
    
    
    const playerRowProgress = document.createElement("div");
    const playerRowVolume = document.createElement("div");

    player.className = "player";
    playerControl.className = "player__control";
    this.playerPlayBtn.className = "player__play";
    

    const playerProgress = this.playerProgress;
    playerProgress.type = "range";
    playerProgress.value = 0;

    const playerVolume = this.playerVolume;
    playerVolume.className = "player__volume"
    playerVolume.type = "range";
    playerVolumeBtn.className = "player__volume-btn";
    this.playerCurrentTime.className = "player__current-time";
    this.playerCurrentTime.textContent = "00:00";
    this.playerAllTime.className = "player__all-time";
    
    playerProgress.className = "player__progress";
    playerRowProgress.className = "player__row";
    playerRowVolume.className = "player__row";

    playerRowProgress.append(this.playerPlayBtn, playerProgress, this.playerCurrentTime, this.playerAllTime);
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

    //update progress
    function updateProgress (e) {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      const progressLength = ( currentTime / duration ) * 100;
      playerProgress.value = progressLength;
    };

    //get string for update current time label
    function getStringOfTime(currentTime) { 
      // console.log("currentTime = ", currentTime);
      if (currentTime > 0) {
        let time = "";
        if (currentTime > 60) {
          time = "0" + Math.trunc(currentTime / 60) + ":";
        } else {
          time = "00:";
        };
        if ((currentTime % 60) >= 10) {
          time += Math.trunc(currentTime % 60);
        } else {
          time += "0" + Math.trunc(currentTime % 60);
        };
        return time;
      } else {
        return "00:00";
      };
    };

    this.audio.addEventListener("timeupdate", (e) => {
      // console.log(this.playerCurrentTime);
      this.playerCurrentTime.textContent = getStringOfTime(e.target.currentTime);
      updateProgress(e);
    });

    return player;
  }    

}

export { Player }