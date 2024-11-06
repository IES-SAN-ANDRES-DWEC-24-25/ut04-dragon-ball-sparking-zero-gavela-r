// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');
    
class Namekian extends Luchador{
      #regenerar;

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

  recibirDanio(danio) {
    this.salud -= danio; // Resta el daño a la salud
    if (this.salud < 0) {
      this.salud = 0; // Asegúrate de que la salud no baje de 0
    }else if(this.salud > 100){
      this.salud = 100;
    }

    if(this.salud < 40){
      this.regenerarSalud();
    }
  }
}

module.exports = Namekian;
