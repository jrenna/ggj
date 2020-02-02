import Phaser from "phaser"

export default class Complete extends Phaser.Scene{
    constructor(){
        super({key: "complete"})
    }
    create(){
        this.add.text(150,150,"You have repaired yourself!", {fontSize:"40px"})
    }
}