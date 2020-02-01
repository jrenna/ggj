const Phaser = require("phaser")

import scenes from "./scenes"

const config = {
    width: 800,
    height: 600,
    backgroundColor: "#333",
    scene: scenes,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }
        }
    }
}

window.onload = function(){
    var game = new Phaser.Game(config)
}