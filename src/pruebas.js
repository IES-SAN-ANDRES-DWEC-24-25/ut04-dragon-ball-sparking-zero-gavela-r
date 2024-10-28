const Luchador = require('./Luchador');

var luchador =  new Luchador("Goku",100,90,80, 85);
var oponente =  new Luchador("Vegeta",100,80,90,85);

luchador.atacar(oponente);