// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Namekian('Piccolo', 100, 60, 70),
    new Saiyan('Goku', 100, 90, 80),
    new Saiyan('Vegeta', 100, 80, 90),
    new Earthling('Krillin', 100, 50, 40),
    // new Earthling('Ten Shin Han', 100, 60, 50),
    // new Saiyan('Gohan', 100, 75, 85),
    // new Saiyan(),
    // new Earthling()
];

// Crear y iniciar el torneo

let torneo = new Torneo(luchadores);
torneo.iniciar();
