// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');
    
class Namekian extends Luchador{
      #regenerar;

      constructor(nombre, velocidad, ataque, defensa, salud, regenerado = false, regenerar = 2){
        super(nombre, velocidad, ataque, defensa, salud);
        this.regenerado = regenerado;
        this.#regenerar = regenerar;
      }
  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
    
    if(this.salud < 40 && this.#regenerar > 0){
      this.regenerado = true;
      this.salud = this.salud + 30;
      this.#regenerar -= 1; 
      console.log(`REGENERACION RESTANTE: ${this.#regenerar}`);
      if(this.#regenerar == 0){
        this.detenerRegeneracion();
      }
      console.log(`${this.nombre} ha regenrado su salud`);
    }

  }

  detenerRegeneracion(){
    this.regenerado = false;
    console.log(`${this.nombre} ya no puede volver a regenerarse`);
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
