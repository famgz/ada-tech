abstract class FormaGeometrica {
  private _nomeDaForma: string;

  constructor(nomeDaforma: string = 'generica') {
    this._nomeDaForma = nomeDaforma;
  }

  obterInformacao(): void {
    console.log(`forma geometrica ${this._nomeDaForma}`);
  }
}

class Circulo extends FormaGeometrica {
  private _raio: number;

  constructor(raio: number) {
    super('circulo');
    this._raio = raio;
  }
}

class Quadrado extends FormaGeometrica {
  private _lado: number;

  constructor(lado: number) {
    super('quadrado');
    this._lado = lado;
  }
}

class Triangulo extends FormaGeometrica {
  private _a: number;
  private _b: number;
  private _c: number;

  constructor(a: number, b: number, c: number) {
    super('triangulo');
    this._a = a;
    this._b = b;
    this._c = c;
  }
}

const generica = new FormaGeometrica();
const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(4, 3, 5);

generica.obterInformacao();
circulo.obterInformacao();
quadrado.obterInformacao();
triangulo.obterInformacao();
