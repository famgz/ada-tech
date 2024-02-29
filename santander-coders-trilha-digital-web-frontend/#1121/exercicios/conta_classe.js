/*
O saldo deve ser inicializado com zero e o atributo contaAtiva como true;

A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);

O depositar e o sacar só poderão operar se tiver saldo disponível;

A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;

Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
Faça uso de sua classe em um script;

Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, só crie a conta caso não exista (dê feedback ao seu usuários sobre a criação ou não);

*/

const contas = [];

class Conta {
  #saldo = 0;
  #contaAtiva = true;
  #titular;

  constructor(nome) {
    if (!this.#nomeEhValido(nome)) {
      throw new Error('Nome invalido');
    }
    if (!this.#contaEhUnica(nome)) {
      throw new Error(`O titular ${nome} já possui conta!`);
    }
    this.#titular = nome;
    contas.push(this);
    console.log(`Conta do titular ${this.#titular} criada com sucesso`);
  }

  #contaEhUnica(nome) {
    for (const conta of contas) {
      if (conta.titular === nome) {
        console.log('nome existe', conta.titular);
        return false;
      }
    }
    return true;
  }

  #nomeEhValido(nome) {
    if (nome.length < 4) {
      return false;
    }
    for (const letra of nome) {
      if (!isNaN(parseInt(letra))) {
        return false;
      }
    }
    return true;
  }

  get saldo() {
    return this.#saldo;
  }

  get titular() {
    return this.#titular;
  }

  depositar(valor) {
    if (isNaN(parseInt(valor))) {
      console.error('Valor para depósito invalido');
      return false;
    }
    this.#saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso`);
    return true;
  }

  sacar(valor) {
    if (isNaN(parseInt(valor))) {
      console.error('Valor para saque invalido');
      return false;
    }
    if (valor > this.#saldo) {
      console.error('Saldo insuficiente para saque');
      return false;
    }
    this.#saldo -= valor;
    console.log(`Saque de R$ ${valor} realizado com sucesso`);
    return true;
  }

  desativarConta() {
    if (this.#contaAtiva === false) {
      console.error('Conta já está inativa');
      return false;
    }
    if (this.#saldo > 0) {
      console.error('Não é possível desativar conta com saldo');
      return false;
    }
    this.#contaAtiva = false;
    console.log(`Conta do titular ${this.#titular} desativada com sucesso`);
    return true;
  }

  ativarConta() {
    if (this.#contaAtiva === true) {
      console.error('Conta já está ativa');
      return false;
    }
    this.#contaAtiva = true;
    console.log(`Conta do titular ${this.#titular} ativada com sucesso`);
    return true;
  }
}

const conta1 = new Conta('John Galt');
// const conta2 = new Conta('John Galt'); // erro conta já existe
const conta2 = new Conta('John Bool');

conta1.depositar(100);
conta1.sacar(100);

conta2.depositar(500);
conta2.sacar(50.75);
conta2.sacar(500); // erro saldo insuficiente

conta2.desativarConta(); // erro possui saldo

for (const conta of contas) {
  console.log(`Conta de ${conta.titular} possui R$ ${conta.saldo}`);
}
