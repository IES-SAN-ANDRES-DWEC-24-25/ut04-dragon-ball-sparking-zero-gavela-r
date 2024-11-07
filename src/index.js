// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Namekian('Piccolo', 80, 75, 70),
    new Saiyan('Goku', 95, 90, 85),
    new Saiyan('Vegeta', 93, 88, 84),
    new Earthling('Krillin', 70, 65, 55),
    new Earthling('Ten Shin Han', 75, 68, 60),
    new Saiyan('Gohan', 90, 88, 80),
    new Saiyan('Trunks', 88, 85, 78),
    new Earthling('Yamcha', 60, 50, 45)
    
];

// Crear y iniciar el torneo

let torneo = new Torneo(luchadores);
torneo.iniciar();
