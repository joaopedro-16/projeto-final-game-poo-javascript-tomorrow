const Infectado = require("./Infectado");

class Baiacu extends Infectado {
  tipo = 'Baiacu';
  _forca = 10;
  _agilidade = 2;
  _percepcao = 4;

  constructor() {
    super()
  }
}



module.exports = Baiacu;