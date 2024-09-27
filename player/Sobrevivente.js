

class Sobrevivente {
  _pontos_de_vida;
  nome;
  _agilidade;
  _forca;
  _furtividade;

  constructor(nome, pontos_de_vida = 100, agilidade = 0, forca = 0, furtividade = 0) {
    this.nome = nome
    this._pontos_de_vida = pontos_de_vida
    this._agilidade = agilidade
    this._forca = forca
    this._furtividade = furtividade

    if (agilidade + forca + furtividade > 20) {
      throw new Error("Não foi possível criar o sobrevivente. Distribuição de pontos de habilidade deve totalizar 20.");
    }
  }

  get pontos_de_vida() {
    return this._pontos_de_vida;
  }
  get agilidade() {
    return this._agilidade;
  }
  get forca() {
    return this._forca;
  }
  get furtividade() {
    return this._furtividade;
  }

  set agilidade(novaAgilidade) {
    this._agilidade = novaAgilidade;
    if (this._agilidade + this._forca + this._furtividade > 20) {
      throw new Error("Não foi possível criar o sobrevivente. Distribuição de pontos de habilidade deve totalizar 20.");
    }
  }
  set forca(novaForca) {
    this._forca = novaForca;
    if (this._agilidade + this._forca + this._furtividade > 20) {
      throw new Error("Não foi possível criar o sobrevivente. Distribuição de pontos de habilidade deve totalizar 20.");
    }
  }
  set furtividade(novaFurtividade) {
    this._furtividade = novaFurtividade;
    if (this._agilidade + this._forca + this._furtividade > 20) {
      throw new Error("Não foi possível criar o sobrevivente. Distribuição de pontos de habilidade deve totalizar 20.");
    }
  }
  set pontos_de_vida(novoPontoDeVida) {
    this._pontos_de_vida = novoPontoDeVida;
  }


  avancar(infectado) {
    console.log()
    console.log('Avançando...')
    if (this._furtividade == 0) {
      console.log()
      console.log('Você chamou atenção do infectado Corredor e ele te pegou!');
      infectado.atacar(this);
    }
  }

  procurar(infectado) {
    console.log()
    console.log('Procurando...')
    let chanceSerPego = 1 - (this._furtividade / 10)
    let variavelSerPego = Math.random()
    if (this._furtividade < 3) {
      console.log()
      console.log('Você chamou atenção de um infectado Corredor e ele te pegou!');
      infectado.atacar(this);
    } else if (variavelSerPego < chanceSerPego) {
      console.log()
      console.log('Você chamou atenção de um infectado Corredor e ele te pegou!');
      infectado.atacar(this);
    } else {
      let variavelEncontrarItem = Math.random()
      const chanceEncontrarItem = 0.5; // 50% de chance
      if (variavelEncontrarItem < chanceEncontrarItem) {
        console.log()
        console.log('Você encontrou uma Faca no chão! Seus pontos de força foram melhorados.')
        this._forca = this._forca + 3
        console.log()
        console.log('Avançando...')
      } else {
        console.log()
        console.log('Você não encontrou nada.')
        console.log()
        console.log('Avançando...')
      }
    }
  }

  atacar(infectado) {
    if (this._forca == 0) {
      console.log()
      console.log(`O ${infectado.tipo} foi mais forte do que você e te pegou!`);
      infectado.atacar(this);
    } else {
      let chanceFracasso = 1.6 - (this._forca / 10) + (infectado._forca / 20)
      let variavelFracasso = Math.random()
      console.log(variavelFracasso)
      console.log(chanceFracasso)
      if (variavelFracasso < chanceFracasso) {
        console.log(`O ${infectado.tipo} foi mais forte do que você e te pegou!`)
        infectado.atacar(this);
      } else {
        console.log(`Muito bom! Você conseguiu derrotar o ${infectado.tipo}!`)
      }
    }
  }

  correr(infectado) {
    if (this._agilidade == 0) {
      console.log()
      console.log(`O ${infectado.tipo} foi mais rápido do que você e te pegou!`);
      // this._pontos_de_vida = 0;
      infectado.atacar(this);
    } else {
      let chanceFracasso = 1.6 - (this._agilidade / 10) + (infectado._agilidade / 20)
      let variavelFracasso = Math.random()
      console.log(variavelFracasso)
      console.log(chanceFracasso)
      if (variavelFracasso < chanceFracasso) {
        console.log(`O ${infectado.tipo} foi mais rápido do que você e te pegou!`)
        // this._pontos_de_vida = 0;
        infectado.atacar(this);
      } else {
        console.log(`Muito bom! Você conseguiu fugir do ${infectado.tipo}!`)
      }
    }
  }

  passarFurtivimente(infectado) {
    if (this._furtividade == 0) {
      console.log()
      console.log(`O ${infectado.tipo} percebeu sua presença e te pegou!`);
      infectado.atacar(this);
      // this._pontos_de_vida = 0;
    } else {
      let chanceFracasso = 1.6 - (this._furtividade / 10) + (infectado._percepcao / 20)
      let variavelFracasso = Math.random()
      console.log(variavelFracasso)
      console.log(chanceFracasso)
      if (variavelFracasso < chanceFracasso) {
        console.log(`O ${infectado.tipo} percebeu sua presença e te pegou!`)
        infectado.atacar(this);
        // this._pontos_de_vida = 0;
      } else {
        console.log(`Muito bom! Você conseguiu passar furtivamente do ${infectado.tipo}!`)
      }
    }
  }
}

module.exports = Sobrevivente;