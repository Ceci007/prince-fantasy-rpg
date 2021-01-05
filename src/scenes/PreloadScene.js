/* eslint-disable no-undef */
import 'phaser';
import config from '../config/config';

export default class PreloaderScene extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('Preloader');
  }

  preload() {
    this.add.image(config.width / 2, 200, 'logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(100, 150, 200, 20);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 100,
      text: 'Loading...',
      style: {
        font: '10px Dragon',
        fill: '#ffffff',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '8px Dragon',
        fill: '#ffffff',
      },
    });

    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '8px Dragon',
        fill: '#ffffff',
      },
    });

    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`); // eslint-disable-line
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(100, 150, 200 * value, 15);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('playButton', './src/assets/ui/Button.png');
    this.load.image('playButton2', './src/assets/ui/ButtonPressed.png');
    this.load.image('box', './src/assets/ui/Box.png');
    this.load.image('checkedBox', './src/assets/ui/CheckedBox.png');
    this.load.image('tiles', './src/assets/map/tileset.png');
    this.load.image('title', './src/assets/title.png');
    this.load.tilemapTiledJSON('map', './src/assets/map/map.json');
    this.load.audio('bgMusic', ['./src/assets/title.mp3']);
    this.load.spritesheet('player', './src/assets/adventurer.png', { frameWidth: 50, frameHeight: 37 });
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    let count = this.readyCount;
    count++; // eslint-disable-line

    if (count === 2) {
      this.scene.start('Title');
    }
  }

  // create() {}
}