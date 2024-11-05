// src/simularBatalla.js

/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
function simularBatalla(luchador1, luchador2) {
    console.log(`\nComienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`);
    let atacante = luchador1;
    let oponente = luchador2;
    
  
    // Determinar quién ataca primero basado en la velocidad
    
      // Si la velocidad es igual, elegir al azar

      // if(atacante.velocidad < oponente.velocidad || (atacante.velocidad === oponente.velocidad && Math.random() < 0.5)){
      //   [atacante, oponente] = [oponente, atacante];
      //   console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero`);
      // }
      if(atacante.velocidad < oponente.velocidad || (atacante.velocidad === oponente.velocidad && Math.random() < 0.5)) {
        [atacante, oponente] = [oponente, atacante];
        console.log(`${atacante.nombre} ataca primero.`);
    }
    
    
  
    // Simular turnos hasta que uno de los luchadores pierda
   
      
    // const ganador = null;
    // console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
    return luchador1;
  }
  
  module.exports = simularBatalla;
  