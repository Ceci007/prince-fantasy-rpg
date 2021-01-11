/* eslint-disable no-undef */
import 'phaser';

export default class BootScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', './src/assets/logo.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}