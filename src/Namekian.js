// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador{
      constructor(nombre, velocidad, ataque, defensa, salud, regenerado = false){
        super(nombre, velocidad, ataque, defensa, salud);
        this.regenerado = regenerado;
      }
  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
    
    if(this.salud < 50){
      this.regenerado = true;
      this.salud = this.salud + 30;

      console.log(`${this.nombre} ha regenrado su salud`);
      
    }
  }
}

module.exports = Namekian;
