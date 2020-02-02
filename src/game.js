// import Phaser from "phaser"
import scenes from "./scenes.index.js"

export default gameConfig = {
    width: 1200,
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
