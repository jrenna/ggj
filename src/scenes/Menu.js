import Phaser from "phaser"

export default class Menu extends Phaser.Scene{
    constructor(){
        super("menuScreen")
    }

    create(){
        this.add.text(100, 100, "Press Any Key to Start")

        setTimeout(() => {this.scene.start("mainWorld")}, 2000)
    }
}