const Baiacu = require("../enemy/Baiacu")

class Sobrevivente {
  pontos_de_vida = 100;
  nome;
  agilidade;
  forca;
  furtividade;

  constructor(nome, agilidade, forca, furtividade) {
    this.nome = nome
    this.agilidade = agilidade
    this.forca = forca
    this.furtividade = furtividade

    if (agilidade + forca + furtividade > 20) {
      throw new Error("Não foi possível criar o sobrevivente. Distribuição de pontos de habilidade deve totalizar 20.");
    }
  }

  avancar() {
    console.log()
    console.log('Avançando...')
    if (this.furtividade == 0) {
      console.log()
      console.log('Você chamou atenção de um infectado e ele te pegou!');
      this.pontos_de_vida = 0;
    }
  }

  procurar() {
    console.log()
    console.log('Procurando...')
    let chanceSerPego = 1 - (this.furtividade / 10)
    let variavelSerPego = Math.random()
    if (this.furtividade < 3) {
      console.log()
      console.log('Você chamou atenção de um infectado e ele te pegou!');
      this.pontos_de_vida = 0;
    } else if (variavelSerPego < chanceSerPego) {
      console.log()
      console.log('Você chamou atenção de um infectado e ele te pegou!');
      this.pontos_de_vida = 0;
    } else {
      let variavelEncontrarItem = Math.random()
      const chanceEncontrarItem = 0.5; // 50% de chance
      if (variavelEncontrarItem < chanceEncontrarItem) {
        console.log()
        console.log('Você encontrou uma Faca no chão! Seus pontos de força foram melhorados.')
        this.forca = this.forca + 3
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
    if (this.forca == 0) {
      console.log()
      console.log(`O ${infectado.tipo} foi mais forte do que você e te pegou!`);
      this.pontos_de_vida = 0;
    } else {
      let chanceFracasso = 1.6 - (this.forca / 10) + (infectado.forca / 20)
      let variavelFracasso = Math.random()
      console.log(variavelFracasso)
      console.log(chanceFracasso)
      if (variavelFracasso < chanceFracasso) {
        console.log(`O ${infectado.tipo} foi mais forte do que você e te pegou!`)
        this.pontos_de_vida = 0;
      } else {
        console.log(`Muito bom! Você conseguiu derrotar o ${infectado.tipo}!`)
      }
    }
  }

  correr(infectado) {
    if (this.agilidade == 0) {
      console.log()
      console.log(`O ${infectado.tipo} foi mais rápido do que você e te pegou!`);
      this.pontos_de_vida = 0;
    } else {
      let chanceFracasso = 1.6 - (this.agilidade / 10) + (infectado.agilidade / 20)
      let variavelFracasso = Math.random()
      console.log(variavelFracasso)
      console.log(chanceFracasso)
      if (variavelFracasso < chanceFracasso) {
        console.log(`O ${infectado.tipo} foi mais rápido do que você e te pegou!`)
        this.pontos_de_vida = 0;
      } else {
        console.log(`Muito bom! Você conseguiu fugir do ${infectado.tipo}!`)
      }
    }
  }

  passarFurtivimente(infectado) {
    if (this.furtividade == 0) {
      console.log()
      console.log(`O ${infectado.tipo} percebeu sua presença e te pegou!`);
      this.pontos_de_vida = 0;
    } else {
      let chanceFracasso = 1.6 - (this.furtividade / 10) + (infectado.percepcao / 20)
      let variavelFracasso = Math.random()
      console.log(variavelFracasso)
      console.log(chanceFracasso)
      if (variavelFracasso < chanceFracasso) {
        console.log(`O ${infectado.tipo} percebeu sua presença e te pegou!`)
        this.pontos_de_vida = 0;
      } else {
        console.log(`Muito bom! Você conseguiu passar furtivamente do ${infectado.tipo}!`)
      }
    }
  }
}


module.exports = Sobrevivente;