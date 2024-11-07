// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
    
    #turnos;
  
    constructor(nombre, velocidad, ataque, defensa, salud, tecnicaUsada = false, turnos = 0){
      super(nombre, velocidad, ataque, defensa, salud);
      this.tecnicaUsada = tecnicaUsada;
      this.#turnos = turnos;
    }
  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if(!this.tecnicaUsada){
      this.tecnicaUsada = true;
      this.ataque *= 1.1;
      console.log(`${this.nombre} a usado un una tecnica especial`);
      console.log(`A aumentado el ataque a ${this.ataque.toFixed(0)}`);
      this.#turnos = 0;
    }
     
  }

  revertirTecnica(){
    if(this.tecnicaUsada){
      this.tecnicaUsada = false;
      this.ataque /= 1.1;
      console.log(`${this.nombre} a restaurado su ataque original`);
    }
  }

  incrementarTurno(){
    this.#turnos++;
    if(this.#turnos >= 5){
      this.usarTecnicaEspecial();
      
    }
  }

  recibirDanio(danio) {
    this.salud -= danio; // Resta el daño a la salud
    if (this.salud < 0) {
      this.salud = 0; // Asegúrate de que la salud no baje de 0
    }else if(this.salud > 100){
      this.salud = 100;
    }
  
  }
  


  
}

module.exports = Earthling;
