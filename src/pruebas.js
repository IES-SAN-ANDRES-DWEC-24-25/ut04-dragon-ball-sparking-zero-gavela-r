const Luchador = require('./Luchador');
const Saiyan = require('./Saiyan');
const Earthling = require('./Earthling');
const Namekian = require('./Namekian');
const simularBatalla = require('./simularBatalla');

var luchador = new Luchador('Testeador', 50, 60, 40);
var oponente = new Luchador('Oponente', 45, 55, 70);


var terrestre = new Earthling("Krilin", 60, 55, 50);
var namekiano = new Namekian("Picolo", 70, 75, 60, 40);

console.log(luchador);
console.log(oponente);
console.log(luchador.atacar(oponente));
luchador.atacar(oponente);
oponente.recibirDanio(23);

// luchador.transformar();
// luchador.revertirTransformacion();

// terrestre.usarTecnicaEspecial();

// namekiano.regenerarSalud();

// simularBatalla(luchador, oponente);