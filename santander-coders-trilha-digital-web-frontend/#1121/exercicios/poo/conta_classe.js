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
const pessoas = [];

class Conta {
  #titular;
  #saldo = 0;
  #contaAtiva = true;

  constructor(titular) {
    if (this.#titularPossuiConta(titular)) {
      throw new Error(`O titular ${nome} já possui conta!`);
    }

    this.#titular = titular;
    contas.push(this);
    console.log(`Conta do titular ${this.#titular.nome} criada com sucesso`);
  }

  #titularPossuiConta(titular) {
    for (const conta of contas) {
      if (conta.titular === titular) {
        console.log(`Titular ${titular.nome} já possui conta`);
        return true;
      }
    }
    return false;
  }

  get saldo() {
    return this.#saldo;
  }

  get titular() {
    return this.#titular;
  }

  get estaAtiva() {
    return this.#contaAtiva;
  }

  exibirDados() {
    console.log(
      `Conta do titular ${this.#titular.nome} possui R$ ${this.#saldo}`
    );
  }

  depositar(valor, logar = true) {
    // TODO: implementar validacao do valor externamente
    valor = parseFloat(valor);
    if (isNaN(valor)) {
      console.error('Valor para depósito inválido');
      return false;
    }
    if (valor < 0) {
      console.error('Valor para depósito não pode ser negativo');
      return false;
    }
    this.#saldo += valor;
    if (logar) {
      console.log(`Depósito de R$ ${valor} realizado com sucesso`);
    }
    return true;
  }

  sacar(valor, logar = true) {
    // TODO: implementar validacao do valor externamente

    valor = parseFloat(valor);
    if (isNaN(valor)) {
      console.error('Valor para saque inválido');
      return false;
    }
    if (valor > this.#saldo) {
      console.error('Saldo insuficiente para saque');
      return false;
    }
    this.#saldo -= valor;
    if (logar) {
      console.log(`Saque de R$ ${valor} realizado com sucesso`);
    }
    return true;
  }

  transferir(valor, titularDestino) {
    if (titularDestino === this.titular) {
      console.error(`Titular origem e destino são os mesmos`);
      return false;
    }
    const contaDestino = contas.find(
      (conta) => conta.titular === titularDestino
    );
    if (!contaDestino) {
      console.error(`A conta do titular ${titularDestino.nome} não existe`);
      return false;
    }
    if (!contaDestino.estaAtiva) {
      console.error(`A conta do titular ${titularDestino.nome} não está ativa`);
      return false;
    }

    // TODO: implementar validacao do valor externamente

    valor = parseFloat(valor);
    if (isNaN(valor)) {
      console.error('Valor para transferência inválido');
      return false;
    }
    if (valor < 0) {
      console.error('Valor para transferência não pode ser negativo');
      return false;
    }
    if (valor > this.#saldo) {
      console.error('Saldo insuficiente para transferência');
      return false;
    }

    // ! método atômico?
    const depositado = contaDestino.depositar(valor, false);
    if (!depositado) {
      console.error('Erro ao depositar na conta destino');
    }
    const sacado = this.sacar(valor, false);
    if (!sacado) {
      console.error('Erro ao sacar na conta origem');
      // reverter depósito
      contaDestino.sacar(valor, false);
    }

    console.log(
      `Transferência de ${this.#titular.nome} para ${
        titularDestino.nome
      } no valor de R$ ${valor} realizada com sucesso!`
    );
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
    console.log(
      `Conta do titular ${this.#titular.nome} desativada com sucesso`
    );
    return true;
  }

  ativarConta() {
    if (this.#contaAtiva === true) {
      console.error('Conta já está ativa');
      return false;
    }
    this.#contaAtiva = true;
    console.log(`Conta do titular ${this.#titular.nome} ativada com sucesso`);
    return true;
  }
}

class Pessoa {
  #nome;
  #idade;
  #cpf;

  constructor(nome, idade, cpf) {
    if (!this.#nomeEhValido(nome)) {
      throw new Error('Nome inválido');
    }
    if (this.#nomeJaExiste(nome)) {
      throw new Error('Nome já existe');
    }

    // TODO: validar CPF

    this.#nome = nome;
    this.#idade = idade;
    this.#cpf = cpf;

    pessoas.push(this);
  }

  exibirDados() {
    const dados = {
      'Nome Titular': this.#nome,
      'Idade Titular': this.#idade,
      'CPF Titular': this.#cpf,
    };
    console.table(dados);
  }

  #nomeEhValido(nome) {
    if (nome.length < 4) {
      console.error('Nome titular deve conter no mínimo 4 caracteres');
      return false;
    }
    for (const letra of nome) {
      if (!isNaN(parseInt(letra))) {
        console.error('Nome titular não pode contar números');
        return false;
      }
    }
    return true;
  }

  #nomeJaExiste(nome) {
    for (const pessoa of pessoas) {
      if (pessoa.nome.toLowerCase() === nome.toLowerCase()) {
        console.log('nome já existe:', pessoa.nome);
        return true;
      }
    }
    return false;
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  get idade() {
    return this.#idade;
  }
}

// TODO: criarConta() dentro de Pessoa -> eg.: pessoa.conta.sacar() ?

const pessoa1 = new Pessoa('joao', 32, '123456');
const pessoa2 = new Pessoa('pedro', 20, '456789');

console.log();

const conta1 = new Conta(pessoa1);
const conta2 = new Conta(pessoa2);

console.log();

conta1.depositar(500);
conta1.transferir(50, pessoa2);

console.log();

conta1.exibirDados();
conta2.exibirDados();

console.log(conta2.teste);
