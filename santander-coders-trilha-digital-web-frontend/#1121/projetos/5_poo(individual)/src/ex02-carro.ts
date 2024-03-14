interface ICarro {
  marca: string;
  modelo: string;
}

class Carro {
  private _marca: string;
  private _modelo: string;
  private _estaLigado: boolean;
  private _velocidade: number;

  constructor(obj: ICarro) {
    this._marca = obj.marca;
    this._modelo = obj.modelo;
    this._estaLigado = false;
    this._velocidade = 0;
  }

  get marca(): string {
    return this._marca;
  }

  get modelo(): string {
    return this._modelo;
  }

  get estaLigado(): boolean {
    return this._estaLigado;
  }

  get velocidade(): number {
    return this._velocidade;
  }

  alterarEstado(): void {
    this._estaLigado = !this._estaLigado;
  }

  acelerar(valor: number): void {
    if (!this._estaLigado) {
      console.log('O carro esta desligado');
      return;
    }
    this._velocidade += valor;
  }

  desacelerar(valor: number): void {
    if (!this._estaLigado) {
      console.log('O carro esta desligado');
      return;
    }
    this._velocidade -= valor;
  }

  frear(): void {
    if (!this._estaLigado) {
      console.log('O carro esta desligado');
      return;
    }
    this._velocidade = 0;
  }
}
const obj: ICarro = {
  marca: 'chev',
  modelo: 'chevete',
};

const carro = new Carro(obj);

carro.alterarEstado();

carro.acelerar(20);

carro.desacelerar(10);

console.log(carro.velocidade);
