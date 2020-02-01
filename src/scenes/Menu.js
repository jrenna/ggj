import Phaser from "phaser"

export default class Menu extends Phaser.Scene{
    constructor(){
        super("menuScreen")
    }

    preload(){
        this.load.image('robot', 'src/assets/happy-robot.png');
    }
    create(){
        var robot = this.physics.add.image(400, 100, 'robot');

        robot.setBounce(0.5, 0);
        robot.setCollideWorldBounds(true);
    }
}