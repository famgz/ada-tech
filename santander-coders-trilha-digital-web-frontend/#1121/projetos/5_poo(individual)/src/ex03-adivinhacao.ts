import { input } from './utils';

class JogoAdivinhacao {
  _numero: number;

  constructor() {
    this._numero = this.gerarNumero();
  }

  atualizarNumero() {
    this._numero = this.gerarNumero();
  }

  private gerarNumero(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  darPalpite(numero: number): boolean {
    if (this._numero > numero) {
      console.log('Palpite errado. O número secreto é maior\n');
      return false;
    }
    if (this._numero < numero) {
      console.log('Palpite errado. O número secreto é menor\n');
      return false;
    }
    console.log(`Acertou! O número secreto é: ${this._numero}`);
    return true;
  }
}

const jogo = new JogoAdivinhacao();

while (true) {
  let numero;

  do {
    numero = parseInt(input('Digite um numero entre 1 e 10: '));
  } while (isNaN(numero) || numero < 1 || numero > 10);

  if (jogo.darPalpite(numero)) {
    break;
  }
}
