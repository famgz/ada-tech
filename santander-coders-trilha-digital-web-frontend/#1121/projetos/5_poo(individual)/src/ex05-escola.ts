class Pessoa {
  private _nome: string;
  private _cpf: string;
  private _dataNascimento: string;

  constructor(nome: string, cpf: string, dataNascimento: string) {
    this._nome = nome;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
  }
}

class Aluno extends Pessoa {
  private _matricula: string;
  private _matriculaAtiva: boolean;

  constructor(
    nome: string,
    cpf: string,
    dataNascimento: string,
    matricula: string
  ) {
    super(nome, cpf, dataNascimento);
    this._matricula = matricula;
    this._matriculaAtiva = true;
  }

  alterarEstadoMatricula(): void {
    this._matriculaAtiva = !this._matriculaAtiva;
    console.log(`Matricula esta ${this._matriculaAtiva ? 'ativa' : 'inativa'}`);
  }

  // desativarMatricula(): boolean {
  //   if (!this._matriculaAtiva) {
  //     console.error('Matricula ja esta inativa');
  //     return false;
  //   }
  //   this._matriculaAtiva = false;
  //   return true;
  // }
}

const aluno1 = new Aluno('Cesar', '123456789', '01/10/2001', 'AL_001');

aluno1.alterarEstadoMatricula();
