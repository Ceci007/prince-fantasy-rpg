import 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Title');
  }

  preload = () => {}

  centerButton = (gameObject, offset = 0) => {
    Phaser.Display.Align.In.Center(// eslint-disable-line
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - offset * 100, config.width, config.height), // eslint-disable-line
    );
  }

  create = () => {
    this.gameButton = this.add.sprite(100, 200, 'playButton').setInteractive();
    this.centerButton(this.gameButton, -2);
    this.gameButton.setScale(1, 0.5);
    this.gameButton.on(
      'pointerdown',
      () => {
        this.scene.start('Game');
      },
    );

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('playButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('playButton');
    });
  }
}