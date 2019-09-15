export default class Bell extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene) {
        super(scene, scene.cameras.main.width * Math.random(), scene.cameras.main.height  * Math.random(), 'bell')
        scene.add.existing(this)

        this.setScale(0.2)
    }
    collide () {
        this.disableBody(true, true)
    }
}
