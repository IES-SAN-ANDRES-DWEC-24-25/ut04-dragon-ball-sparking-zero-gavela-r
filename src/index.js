// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Namekian('Piccolo', 80, 60, 70),
    new Saiyan('Goku', 100, 95, 85),
    new Saiyan('Vegeta', 100, 80, 90),
    new Earthling('Krillin', 65, 60, 40),
    new Earthling('Ten Shin Han', 75, 60, 50),
    new Saiyan('Gohan', 95, 95, 85),
    new Saiyan('Trunks', 90, 80, 75),
    new Earthling('Yamcha', 50, 40, 50),
];

// Crear y iniciar el torneo

let torneo = new Torneo(luchadores);
torneo.iniciar();
