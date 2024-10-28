// src/Luchador.js

class Luchador {
    // Implementa el constructor y los métodos necesarios
    constructor(nombre, vida, velocidad, ataque, defensa){
      this.nombre = nombre;  
      this.vida = vida;
      this.velocidad = velocidad;
      this.ataque = ataque;
      this.defensa = defensa;
    }
  
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */
    atacar(oponente) {
      // Decidir si el ataque es esquivado
      let vida = oponente.vida
      let velocidadAtaque = Math.floor(Math.random() * 10 + 1);
      if(velocidadAtaque < 3){
        console.log(`${oponente.nombre} a esquivado el ataque`);
      }else if(this.ataque < oponente.defensa){
         // Calcular daño
        let daño = oponente.defensa - this.ataque;
        if (this.ataque > oponente.defensa){
          daño = daño * 1.1;
          vida = oponente.vida - daño;
        }
        vida = oponente.vida - daño;
        console.log(`${oponente.nombre} recibe un daño de ${daño}, su vida queda en un total de ${vida}`);
      }
  
      // Asegurar que el daño no sea negativo
      
  
      // Aplicar daño al oponente
     
  
      // Retornar resultado del ataque
      
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
      
    }
  
    /**
     * Verifica si el luchador está vivo.
     * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
     */
    estaVivo() {
     
    }
  }
 
  module.exports = Luchador;
  