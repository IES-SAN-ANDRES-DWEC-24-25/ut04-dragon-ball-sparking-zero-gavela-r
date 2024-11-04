const Luchador = require('./Luchador');
const Saiyan = require('./Saiyan');

console.log(Saiyan);

var luchador =  new Saiyan("Goku",85, 90, 90, true);
var oponente =  new Saiyan("Vegeta",80, 85, 80, false);

luchador.atacar(oponente);
oponente.recibirDanio(23);

luchador.transformar();
luchador.revertirTransformacion();
