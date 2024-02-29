/*
Vocês deverão implementar uma calculadora simples, contendo as 4 operações básicas;

REQUISITOS:

Quando a calculadora for instanciada, deverá receber 3 argumentos (um número qualquer, uma operação a ser realizada e um segundo número);

Vocês precisam validar se os argumentos recebidos são válidos;

A partir disso, demonstram o uso de sua calculadora através do terminal, executando seu script;
*/

class Calculadora {
  constructor(num1, operacao, num2) {
    this.operacao = operacao;
    this.num1 = Number(num1);
    this.num2 = Number(num2);

    if (!this.operacaoEhValida()) {
      throw new TypeError('Operacao invalida');
    }
    if (!this.numerosSaoValidos()) {
      throw new TypeError('Numero invalido');
    }
    if (operacao === '/' && num2 === 0) {
      throw new Error('Erro: divisao por zero');
    }
  }

  calcular() {
    switch (this.operacao) {
      case '+':
        return this.num1 + this.num2;
      case '-':
        return this.num1 - this.num2;
      case '*':
        return this.num1 * this.num2;
      case '/':
        return this.num1 / this.num2;
    }
  }

  operacaoEhValida() {
    const operacoes = ['+', '-', '/', '*'];
    return operacoes.includes(this.operacao);
  }

  numerosSaoValidos() {
    if (isNaN(this.num1) || isNaN(this.num2)) {
      return false;
    }
    return true;
  }
}

const calc = new Calculadora(12, '/', 0);

const resultado = calc.calcular();

console.log(resultado);
