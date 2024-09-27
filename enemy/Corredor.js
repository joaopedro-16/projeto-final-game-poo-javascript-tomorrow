const Infectado = require("./Infectado");

class Corredor extends Infectado {
  tipo = 'Corredor';
  _forca = 3;
  _agilidade = 10;
  _percepcao = 7;

  constructor() {
    super()
  }
}



module.exports = Corredor;