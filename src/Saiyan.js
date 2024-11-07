// src/Saiyan.js

const Luchador = require("./Luchador");
  
class Saiyan extends Luchador{
  
    constructor(nombre, velocidad, ataque, defensa, salud, esSuperSaiyan = false){
      super(nombre, velocidad, ataque, defensa, salud)
      this.esSuperSaiyan = esSuperSaiyan;
      
    }  
  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if(!this.esSuperSaiyan){
      this.esSuperSaiyan = true;
      this.velocidad *= 1.3;
      this.ataque *= 1.5;
      this.defensa *= 1.2;
      this.energia = 0;
      console.log(`${this.nombre} se ha transformado en super saiyan`);
      console.log(`La velocidad a aumentado a: ${this.velocidad}`);
      console.log(`El ataque a aumentado a: ${this.ataque}`);
      console.log(`la defensa a aumentado a: ${this.defensa}`);
    }
    
  }

  recibirDanio(danio) {
    this.salud -= danio; // Resta el daño a la salud
    if (this.salud < 0) {
      this.salud = 0; // Asegúrate de que la salud no baje de 0
    }else if(this.salud > 100){
      this.salud = 100;
    }

    if(this.salud < 50){
      this.transformar();
      
    }
  }



  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    if(this.esSuperSaiyan){
      this.esSuperSaiyan = false;
      this.velocidad /= 1.3;
      this.ataque /= 1.5;
      this.defensa /= 1.2;
      console.log(`${this.nombre} a vuleto a su forma original`);
      console.log(`La velocidad a disminuido a: ${this.velocidad}`);
      console.log(`El ataque a disminuido a: ${this.ataque}`);
      console.log(`La defensa a disminuido a: ${this.defensa}`);
    }
  }
}

module.exports = Saiyan;