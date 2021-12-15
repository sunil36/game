const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const express = require('express');
const Phaser = require("phaser");
//import Phaser from 'phaser';
const app = express();
const port = 3000;
// set layout  
app.use(expressLayout);
app.set('views', path.join(__dirname, "/resources/views"));
app.set('view engine', 'ejs');
// set layout end 
//getting route data of web.js file here
require('./routes/web')(app);

app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});