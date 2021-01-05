import 'phaser';

export default class GameScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo', './src/assets/title.jpeg');
  }

  create() {
    this.add.image(200, 300, 'logo');
  }
}
