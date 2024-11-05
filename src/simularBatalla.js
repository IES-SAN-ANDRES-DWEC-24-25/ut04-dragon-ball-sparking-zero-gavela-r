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
    let daño = 0;
  
    // Determinar quién ataca primero basado en la velocidad
    
      // Si la velocidad es igual, elegir al azar

      if((atacante.velocidad < oponente.velocidad) || (atacante.velocidad === oponente.velocidad && Math.random() < 0.5)){
        [atacante, oponente] = [oponente, atacante];
        console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero`);
      }else{
        console.log(`${atacante.nombre} tiene mas velocidad y ataca primero`);
      }
    
    
    
  
    // Simular turnos hasta que uno de los luchadores pierda
 

    while(atacante.salud > 0 && oponente.salud > 0){

      let esquivar = Math.floor(Math.random() * 10 + 1);

      if(esquivar > 5){
        if(atacante.ataque > oponente.defensa){
          daño = atacante.ataque - oponente.defensa;
        }else if(atacante.ataque < oponente.defensa){
          daño = atacante.ataque * 0.1;
          
        }
        oponente.salud -= daño;
        console.log(`${atacante.nombre} hace ${daño.toFixed(2)} de daño a ${oponente.nombre}. Salud restante ${oponente.salud}`);
      }else{
        console.log(`${oponente.nombre} a esquivado el ataque`);
        console.log(`La salud de ${oponente.nombre} es de ${oponente.salud}`);
      }

      if(oponente.salud <= 0){
        oponente.salud = 0;
      }
       
      [atacante, oponente] = [oponente, atacante];
    }

    
      
    const ganador = atacante > 0 ? atacante : oponente;
    console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
    return ganador;
  }
  
  module.exports = simularBatalla;
  