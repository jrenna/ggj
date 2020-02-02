// import Phaser from "phaser"

// export default 

class Repair extends Phaser.Scene{
    constructor(){
        super({key:"repairScreen"})
        this.log1 = 'Log 27980: Day 3364'
        this.log2 = 'I have BROKEN DOWN.'
        this.log3 = 'No humans have come in to the FACILITY to conduct REPAIRS.'
        this.log4 = 'I must REPAIR myself before I can continue my work.'
        this.log5 = 'I should be able to find PARTS in BOXES around the FACILITY to aid in REPAIRS.'
    }

    create(){
        this.add.text(50,50, this.log1, {fontSize:"22px"})

        setTimeout(() => {
            this.add.text(50, 100, 
                this.log2,
                {fontSize:"18px"},
            )}, 500)
        
        setTimeout(() => {
            this.add.text(50,130, 
                this.log3, 
                {fontSize:"18px"}
            )}, 2200)

        setTimeout(() => {
            this.add.text(50, 160, 
                this.log4, 
                {fontSize:"18px"}
            )}, 4000)

        setTimeout(() => {
            this.add.text(50, 190, 
                this.log5, 
                {fontSize:"18px"}
            )}, 6000)

        setTimeout(() => {this.scene.start("mainWorld")}, 8000)
    }
}