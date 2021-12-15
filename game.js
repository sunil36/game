const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const express = require('express');
const Phaser = require("phaser");
// import Phaser from 'phaser';
import logoImg from './assets/logo.png';



const app = express();
const port = 3000;

// set layout  
app.use(expressLayout);
app.set('views', path.join(__dirname, "/resources/views"));
app.set('view engine', 'ejs');
// set layout end 
//getting route data of web.js file here
require('./routes/web')(app);



class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('logo', logoImg);
    }

    create() {
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);







app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});