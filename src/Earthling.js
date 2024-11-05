// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
    constructor(nombre, velocidad, ataque, defensa, salud, tecnicaUsada = false){
      super(nombre, velocidad, ataque, defensa, salud);
      this.tecnicaUsada = tecnicaUsada;
    }
  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if(!this.tecnicaUsada){
      this.tecnicaUsada = true;
      this.ataque *= 1.4;
      console.log(`${this.nombre} a usado un Kamehameha`);
    }
  }
}

module.exports = Earthling;
