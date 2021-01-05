/* eslint-disable no-undef */
import 'phaser';

export default class GameScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('title', './src/assets/title.jpeg');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tiles = map.addTilesetImage('backgound', 'tiles');

    const grass = map.createStaticLayer('Background', tiles, 0, 0);
    const obstacles = map.createStaticLayer('Obstables', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);


    this.camera = this.cameras.main.setBounds(0, 0, 400, 320);
  }
}
