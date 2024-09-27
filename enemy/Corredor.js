const Infectado = require("./Infectado");

class Corredor extends Infectado {
  tipo = 'Corredor';
  forca = 3;
  agilidade = 10;
  percepcao = 7;

  constructor() {
    super()
  }

  metodo1() {
  }

  metodo2() {
  }

  metodo3() {
  }
}



module.exports = Corredor;