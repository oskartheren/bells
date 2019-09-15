export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('bunny', 'assets/img/bunny.png');
    this.load.image('bell', 'assets/img/bell.png');
  }

  create() {
    this.scene.start('MainScene')
  }
}
