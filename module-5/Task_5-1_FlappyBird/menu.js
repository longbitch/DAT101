"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, EGameStatus, hero, obstacles, baits } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spInfoText;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  #highScore;
  #isMuted;

  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 236, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 276, 190);
    this.#spCountDown.visible = false;

    this.#sfCountDown = null;
    this.#sfRunning = null;

    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;

    this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 188, 140);
    this.#spInfoText.index = 0;
    this.#spInfoText.hidden = true;

    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 175, 120);
    this.#spGameOver.hidden = true;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 200, 165);
    this.#spMedal.hidden = true;

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 370, 155);
    this.#spFinalScore.visible = false;

    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 370, 195
    );
    this.#spHighScore.visible = false;

    this.#highScore = 0;
    this.#isMuted = false;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    if (this.#sfRunning) {
      this.#sfRunning.stop();
    }
  }

  setSoundMute(aIsMuted){
    this.#isMuted = aIsMuted;
    if (this.#sfRunning) {
      if (aIsMuted) {
        this.#sfRunning.stop();
      } else if (EGameStatus.state === EGameStatus.gaming) {
        this.#sfRunning.play();
      }
    }
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spInfoText.draw();
    this.#spGameScore.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);
    }else{
      this.#spCountDown.visible = false;
      this.#spInfoText.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
      if (!this.#isMuted) {
        this.#sfRunning.play();
      }
      startGame();
    }
  }

  spPlayBtnClick(){
    if (EGameStatus.state === EGameStatus.gameOver) {
      hero.restart();
      obstacles.length = 0;
      baits.length = 0;
      this.#spGameScore.value = 0;
      this.#spGameOver.hidden = true;
      this.#spMedal.hidden = true;
      this.#spFinalScore.visible = false;
      this.#spHighScore.visible = false;
    }

    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#spTitle.hidden = true;
    this.#spInfoText.hidden = false;
    this.#spGameScore.visible = true;
    EGameStatus.state = EGameStatus.countDown;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!this.#isMuted) {
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }

  showGameOver(){
    this.stopSound();
    this.#spInfoText.hidden = true;
    this.#spGameScore.visible = false;

    const score = this.#spGameScore.value;
    if (score > this.#highScore) {
      this.#highScore = score;
    }

    this.#spFinalScore.value = score;
    this.#spHighScore.value = this.#highScore;
    this.#spFinalScore.visible = true;
    this.#spHighScore.visible = true;

    if (score >= 10) {
      this.#spMedal.index = 1; // Gold
    } else if (score >= 5) {
      this.#spMedal.index = 2; // Silver
    } else if (score >= 1) {
      this.#spMedal.index = 3; // Bronze
    } else {
      this.#spMedal.index = 0; // None
    }

    this.#spGameOver.hidden = false;
    this.#spMedal.hidden = false;
    this.#spPlayBtn.x = 236;
    this.#spPlayBtn.y = 260;
    this.#spPlayBtn.hidden = false;
  }

}
