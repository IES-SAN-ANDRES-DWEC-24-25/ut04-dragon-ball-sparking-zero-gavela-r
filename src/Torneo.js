// src/Torneo.js

const {simularBatalla} = require('./simularBatalla');
const { esPotenciaDeDos, mezclarArray } = require('./utils');

class Torneo {
  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores - Array de luchadores participantes.
   */
  constructor(luchadores) {
   if(!esPotenciaDeDos()){
    throw new Error('El número de luchadores debe ser una potencia de 2.')
   }
   this.participantes = [...luchadores]
  }
  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
     let participantes = [...this.participantes]// Copiar el array de luchadores
    mezclarArray(participantes);
    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);
    let ronda = 1;
    while(participantes.length > 1){
      console.log(`----- Ronda ${ronda} -----`);
      const ganadores = [];
      for(let k = 0; k < participantes.length; k += 2){
        const luchador1 = participantes[k];
        const luchador2 = participantes[k + 1];
        const ganador = simularBatalla(luchador1, luchador2);
        ganadores.push(ganador);
      }
      participantes = ganadores
      ronda++;
    }
    
    // Simular rondas hasta que quede un solo luchador
   
    const campeón = participantes[0];
    console.log(`El campeón del torneo es ${campeón.nombre}!\n`);
    return campeón;
  }
}

module.exports = Torneo;
