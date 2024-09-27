const Sobrevivente = require("../player/Sobrevivente.js");

class Infectado {
  tipo;
  _forca;
  _agilidade;
  _percepcao;

  constructor(tipo, forca, agilidade, percepcao) {
    this.tipo = tipo 
    this._forca = forca
    this._agilidade = agilidade
    this._percepcao = percepcao
  }

  get forca() {
    return this._forca;
  }
  get agilidade() {
    return this._agilidade;
  }
  get percepcao() {
    return this._percepcao;
  }

  atacar(sobrevivente) {
    sobrevivente.pontos_de_vida = 0
  }
  
  modoAlerta() {
  }
}


module.exports = Infectado;