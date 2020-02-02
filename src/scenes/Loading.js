// import Phaser from "phaser"

// export default 

class Loading extends Phaser.Scene{
    constructor(){
        super("titleScreen")
    }

    create(){
        this.add.text(50,50, "...Loading")

        setTimeout(() => {this.scene.start("mainWorld")}, 1500)
    }
}