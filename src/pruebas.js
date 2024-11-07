const Luchador = require('./Luchador');
const Saiyan = require('./Saiyan');
const Earthling = require('./Earthling');
const Namekian = require('./Namekian');
const {simularBatalla} = require('./simularBatalla');


var luchador = new Saiyan('Goku', 50, 70, 80);
var oponente = new Saiyan('Vegeta', 45, 65, 80);


var terrestre = new Earthling("Krilin", 60, 55, 50);
var namekiano = new Namekian("Picolo", 70, 75, 60, 40);

// console.log(luchador);
// console.log(oponente);

// luchador.atacar(oponente);


// oponente.transformar();
// oponente.revertirTransformacion();

// terrestre.usarTecnicaEspecial();

// namekiano.regenerarSalud();

simularBatalla(luchador, oponente);
