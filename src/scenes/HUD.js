import Phaser from "phaser"

export default class HUD extends Phaser.Scene{
    constructor(){
        super({
            key:"sideScreen",
            width:400,
            height:600,
            backgroundColor:"#f00"
        })
    }

    create(){
        this.add.text(100, 100, "Press Any Key to Start")

        setTimeout(() => {this.scene.start("mainWorld")}, 2000)
    }
}