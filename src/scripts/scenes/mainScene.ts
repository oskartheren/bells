import Character from '../objects/character'
import Bell from '../objects/bell'

export default class MainScene extends Phaser.Scene {
  character: Character

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.character = new Character(this, this.cameras.main.width * Math.random(), this.cameras.main.height)
    const bells = this.physics.add.staticGroup()
    for (let i = 0 ; i < 10 ; i++) bells.add(new Bell(this))
    this.physics.add.overlap(this.character, bells, this.collide, undefined, this)
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys()
    this.character.move(cursors)
  }

  collide(character: Phaser.GameObjects.GameObject, bell: Phaser.GameObjects.GameObject) {
    (<Character> character).collide();
    (<Bell> bell).collide()
  }
}