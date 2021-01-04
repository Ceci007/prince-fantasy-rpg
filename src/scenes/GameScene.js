import 'phaser'; 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('logo', './src/assets/title.jpeg');
  }

  create () {
    const logo = this.add.image(200, 300, 'logo');
  }
};
