export default class Character extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'bunny')
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setScale(0.01)

        this.setCollideWorldBounds(true)
            .setBounce(0.3)
    }

    move(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        if (cursors.left!.isDown)
            this.setVelocityX(-500);
        else if (cursors.right!.isDown)
            this.setVelocityX(500);
        else 
            this.setVelocityX(0);
        if (cursors.up!.isDown)
            this.collide();
    }

    collide() {
        this.setVelocityY(-400)
    }
}
