const Infectado = require("./Infectado");

class Estalador extends Infectado {
  tipo = 'Estalador';
  _forca = 6;
  _agilidade = 6;
  _percepcao = 10;

  constructor() {
    super()
  }
}


module.exports = Estalador;