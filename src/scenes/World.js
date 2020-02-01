import Phaser from "phaser"

export default class Menu extends Phaser.Scene{
    constructor(){
        super("mainWorld")
    }

    preload(){
        this.load.spritesheet('robot', 'src/assets/dude.png', {frameWidth:32, frameHeight:48})
        this.load.image('platform', 'src/assets/platform.png');
    }
    create(){
        this.platform = this.physics.add.staticGroup()
        this.platform.create(400, 600, 'platform').setScale(2.5).refreshBody()
        
        this.robot = this.physics.add.sprite(400, 100, 'robot');
        this.robot.setBounce(0.5, 0.5);
        this.robot.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'robot', frame: 4 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('robot', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.keys = {
            left : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            up : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            right : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            down : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            jump : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        }

        this.physics.add.collider(this.robot, this.platform)
        
    }

    update(){
        if (this.keys.left.isDown){
            this.robot.setVelocityX(-160);

            this.robot.anims.play('left', true);
        }
        else if (this.keys.right.isDown){
            this.robot.setVelocityX(160);

            this.robot.anims.play('right', true);
        }
        else{
            this.robot.setVelocityX(0);

            this.robot.anims.play('turn');
        }

        if (this.keys.jump.isDown && this.robot.body.touching.down){
            this.robot.setVelocityY(-400);
        }
    }
}