/* eslint-disable no-undef */
import 'phaser';

export default class OptionsScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Options');
  }

  preload() {
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
    if (this.model.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(160, 20, 'Options', { fontSize: 20 });
    this.musicButton = this.add.image(140, 100, 'checkedBox').setInteractive();
    this.musicText = this.add.text(160, 94, 'Music Enabled', { fontSize: 12 });

    this.soundButton = this.add.image(140, 150, 'checkedBox').setInteractive();
    this.soundText = this.add.text(160, 144, 'Sound Enabled', { fontSize: 12 });

    this.menuButton = this.add.sprite(200, 250, 'playButton').setInteractive();
    this.menuText = this.add.text(0, 0, 'Back', { fontSize: '16px', fill: '#fff' });
    
    this.menuButton.setScale(0.5, 0.5);
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', (pointer) => {
      this.scene.start('Title');
    });

    this.musicButton.setScale(0.25, 0.25);
    this.soundButton.setScale(0.25, 0.25);

    this.musicButton.on('pointerdown', (pointer) => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', (pointer) => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.updateAudio();
  }
}