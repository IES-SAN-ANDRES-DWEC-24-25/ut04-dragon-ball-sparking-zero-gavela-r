const Luchador = require('./Luchador');

var luchador =  new Luchador("Goku",85, 90, 90);
var oponente =  new Luchador("Vegeta",80, 85, 80);

console.log(luchador)
console.log(oponente);
luchador.atacar(oponente);
oponente.recibirDanio(23);