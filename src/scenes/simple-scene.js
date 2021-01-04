export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', '/src/assets/logo.png');
  }

  create() {
    this.add.text(50, 10, 'Hello Phaser!', { fill: '#fff' });
    this.add.image(100, 200, 'cokecan');
  }
}