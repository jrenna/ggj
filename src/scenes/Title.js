import Phaser from "phaser"

export default class Title extends Phaser.Scene{
    constructor(){
        super("titleScreen")
    }

    create(){
        this.add.text(50,50, "...Loading")

        setTimeout(() => {this.scene.start("menuScreen")}, 1500)
    }
}