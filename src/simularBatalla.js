// src/simularBatalla.js

const Earthling = require("./Earthling");


/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
function simularBatalla(luchador1, luchador2) {
  console.log("Siguiente combate");
  console.log(`\nComienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`);
  let contador = 1;




  
  // Determinar quién ataca primero basado en la velocidad
  
    // Si la velocidad es igual, elegir al azar

    if((luchador1.velocidad < luchador2.velocidad) || (luchador1.velocidad === luchador2.velocidad && Math.random() < 0.2)){
      [luchador1, luchador2] = [luchador2, luchador1];
      console.log(`${luchador1.nombre} tiene mayor velocidad y ataca primero`);
    }else{
      console.log(`${luchador1.nombre} tiene mas velocidad y ataca primero`);
    }
    console.log(luchador1.salud);
    console.log(luchador2.salud);
    console.log(luchador1.ataque);
    console.log(luchador1.defensa);
    console.log(luchador2.ataque);
    console.log(luchador2.defensa);

  // Simular turnos hasta que uno de los luchadores pierda
  
  

  while(luchador1.estaVivo() && luchador2.estaVivo()){
    console.log(`Turno: ${contador}`);
      
    luchador1.atacar(luchador2);
    if (luchador1 instanceof Earthling) {
      luchador1.incrementarTurno();
    }
    

    if (luchador2.estaVivo()) {
      luchador2.atacar(luchador1);
      if (luchador2 instanceof Earthling) {
        luchador2.incrementarTurno();
      }
    }
      
      contador++;
    

    [luchador1, luchador2] = [luchador2, luchador1];
      
    
  }

  const ganador = luchador1.salud > 0 ? luchador1 : luchador2;
    
    ganador.reiniciarLuchador();

    console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
    return ganador;
  
}

module.exports =  {simularBatalla};