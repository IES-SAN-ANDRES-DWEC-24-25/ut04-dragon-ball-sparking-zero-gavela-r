// src/Luchador.js

class Luchador {
    // Implementa el constructor y los métodos necesarios
    constructor(nombre, velocidad, ataque, defensa, vida = 100){
      this.nombre = nombre;  
      this.salud = vida;
      this.velocidad = velocidad;
      this.ataque = ataque;
      this.defensa = defensa;
    }
  
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */

    getVida(){
      return this.salud;
    }
    atacar(oponente) {
      // Decidir si el ataque es esquivado
      let daño = 0;
      let velocidadAtaque = Math.floor(Math.random() * 10 + 1);
      if(velocidadAtaque < 3){
        
        let mensaje = (`${oponente.nombre} esquivó el ataque de ${this.nombre}!`);
        return {daño , mensaje};
      } 
       // Calcular daño
      if(this.ataque < oponente.defensa){
        daño = this.ataque * 0.1;
      }else if(this.ataque > oponente.defensa){
        daño = this.ataque - oponente.defensa ;
      }
      oponente.recibirDanio(daño);
      let mensaje = `${this.nombre} ataca a ${oponente.nombre} y causa ${daño.toFixed(2)} de daño.`;
      console.log(mensaje);
      console.log(daño)
      console.log(`Es el turno de ${oponente.nombre}`);
      return {daño, mensaje};
    }

    
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
      this.salud -= danio;
      if(this.salud < 0){
        this.salud = 0;
      }
    }
  
    /**
     * Verifica si el luchador está vivo.
     * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
     */
    estaVivo() {
      if(this.salud > 0){
        return true;
      }else{
        return false;
      }

    }
}
 
  module.exports = Luchador;
  