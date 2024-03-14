interface IPessoa {
  nome: string;
  idade: number;
  cpf: string;
}

interface IConta {
  titular: Pessoa;
  saldo: number;
  contaAtiva: boolean;
}

const contas: Conta[] = [];
const titulares: Pessoa[] = [];

class Conta {
  private _titular: Pessoa;
  private _saldo: number;
  private _contaAtiva: boolean;

  constructor(titular: Pessoa) {
    if (this.titularPossuiConta(titular)) {
      throw new Error(`O titular ${titular.nome} já possui conta!`);
    }
    this._titular = titular;
    this._saldo = 0;
    this._contaAtiva = true;
    contas.push(this);
  }

  private titularPossuiConta(titular: Pessoa) {
    for (const conta of contas) {
      if (conta.titular === titular) {
        console.log(`Titular ${titular.nome} já possui conta`);
        return true;
      }
    }
    return false;
  }

  get titular(): Pessoa {
    return this._titular;
  }

  get saldo(): number {
    return this._saldo;
  }

  get nomeTitular(): string {
    return this._titular.nome;
  }

  get contaAtiva(): boolean {
    return this._contaAtiva;
  }

  exibirDados() {
    console.log(
      `Conta do titular ${this._titular.nome} possui R$ ${this._saldo}`
    );
  }

  ativarConta(): boolean {
    if (this._contaAtiva) {
      console.error('ERRO: Conta já está ativa');
      return false;
    }
    this._contaAtiva = true;
    console.log(`Conta do titular ${this._titular.nome} ativada com sucesso`);
    return true;
  }

  inativarConta(): boolean {
    if (!this._contaAtiva) {
      console.error('ERRO: Conta já está inativa');
      return false;
    }
    if (this._saldo > 0) {
      console.error('ERRO: Não é possível desativar conta com saldo');
      return false;
    }
    this._contaAtiva = false;
    console.log(
      `Conta do titular ${this._titular.nome} desativada com sucesso`
    );
    return true;
  }

  depositar(valor: number, logar: boolean = true): boolean {
    if (!this._contaAtiva) {
      console.error('ERRO: Conta está inativa');
      return false;
    }
    if (valor <= 0) {
      console.error('ERRO: Valor para depósito não pode ser zero ou negativo');
      return false;
    }
    this._saldo += valor;
    if (logar) {
      console.log(`Depósito de R$ ${valor} realizado com sucesso`);
    }
    return true;
  }

  sacar(valor: number, logar: boolean = true): boolean {
    if (!this._contaAtiva) {
      console.error('ERRO: Conta está inativa');
      return false;
    }
    if (valor <= 0) {
      console.error('ERRO: Valor para depósito não pode ser zero ou negativo');
      return false;
    }
    if (valor > this._saldo) {
      console.error('ERRO: Saldo insuficiente para saque');
      return false;
    }
    this._saldo -= valor;
    if (logar) {
      console.log(`Saque de R$ ${valor} realizado com sucesso`);
    }
    return true;
  }

  transferir(valor: number, contaDestino: Conta): boolean {
    if (contaDestino === this) {
      console.error(`ERRO: Conta origem e destino são as mesmos`);
      return false;
    }
    if (!this._contaAtiva) {
      console.error('ERRO: Conta origem está inativa');
      return false;
    }
    if (!contaDestino._contaAtiva) {
      console.error(`ERRO: Conta destino não está ativa`);
      return false;
    }
    if (valor <= 0) {
      console.error('ERRO: Valor para depósito não pode ser zero ou negativo');
      return false;
    }
    if (valor > this._saldo) {
      console.error('ERRO: Saldo insuficiente para transferência');
      return false;
    }

    const depositado = contaDestino.depositar(valor, false);
    if (!depositado) {
      console.error('ERRO: Erro ao depositar na conta destino');
    }
    this._saldo -= valor;

    console.log(
      `Transferência de ${this._titular.nome} para ${contaDestino.titular.nome} 
      no valor de R$ ${valor} realizada com sucesso!`
    );
    return true;
  }
}

class Pessoa {
  private _nome: string;
  private _idade: number;
  private _cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    if (this.nomeInvalido(nome)) {
      throw new Error(`Nome inválido: ${nome}`);
    }
    if (this.titularJaExiste(cpf)) {
      throw new Error(`Já existe conta com o CPF ${cpf}`);
    }
    this._nome = nome;
    this._idade = idade;
    this._cpf = cpf;
    console.log(
      `Titular ${nome} portador do CPF ${cpf} cadastrado com sucesso`
    );
    titulares.push(this);
  }

  get nome(): string {
    return this._nome;
  }
  get idade(): number {
    return this._idade;
  }
  get cpf(): string {
    return this._cpf;
  }

  private nomeInvalido(nome: string): boolean {
    if (nome.length < 4) {
      console.error('ERRO: Nome titular deve conter no mínimo 4 caracteres');
      return true;
    }
    for (const letra of nome) {
      if (!isNaN(parseInt(letra))) {
        console.error('ERRO: Nome titular não pode contar números');
        return true;
      }
    }
    return false;
  }

  private titularJaExiste(cpf: string): boolean {
    for (const titular of titulares) {
      if (titular._cpf === cpf) {
        return true;
      }
    }
    return false;
  }

  exibirDados(): void {
    const dados = {
      'Nome Titular': this._nome,
      'Idade Titular': this._idade,
      'CPF Titular': this._cpf,
    };
    console.table(dados);
  }
}

const titular1 = new Pessoa('Pedro', 23, '123456');
const titular2 = new Pessoa('Joao', 25, '456789');

console.log();

const conta1 = new Conta(titular1);
const conta2 = new Conta(titular2);

conta1.depositar(500);
conta1.sacar(100);
conta1.transferir(200, conta2);
conta2.sacar(100);

console.log();

conta1.exibirDados();
conta2.exibirDados();
