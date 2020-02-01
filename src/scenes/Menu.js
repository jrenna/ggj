import Phaser from "phaser"

export default class Loading extends Phaser.Scene{
    constructor(){
        super("menuScreen")
    }

    create(){
        this.add.text(50,50, "Press Any Key to Start")

        setTimeout(() => {this.scene.start("mainWorld")}, 2000)
    }
}