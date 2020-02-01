import Phaser from "phaser"

export default class Menu extends Phaser.Scene{
    constructor(){
        super("menuScreen")
    }

    preload(){
        // this.load.image('robot', 'src/assets/happy-robot.png');
        this.load.spritesheet('robot', 'src/assets/dude.png', {frameWidth:32, frameHeight:48})
        this.load.image('platform', 'src/assets/platform.png');
    }
    create(){
        const platform = this.physics.add.staticGroup()
        platform.create(400, 400, 'platform').refreshBody()
        
        var robot = this.physics.add.sprite(400, 100, 'robot');
        robot.setBounce(0.5, 0.5);
        robot.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(robot, platform)
        
    }
}