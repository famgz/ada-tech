import { formatToReal } from './utils';

class Estoque {
  private _produtos: Produto[] = [];

  adicionar(produto: Produto): boolean {
    const produtoExiste = this._produtos.find((p) => p.nome === produto.nome);
    if (produtoExiste) {
      console.error(`Produto ${produto.nome} ja existe`);
      return false;
    }
    this._produtos.push(produto);
    return true;
  }

  mostrarProdutos(): void {
    const obj = this._produtos.map((p) => ({
      nome: p.nome,
      preco: formatToReal(p.preco),
      qtde: p.qtde,
      total: formatToReal(p.valorTotal),
      disponivel: p.disponivel ? 'em estoque' : 'esgotado',
    }));
    console.table(obj);
  }

  calcularValorTotal(): number {
    return this._produtos.reduce((acc, curr) => acc + curr.valorTotal, 0);
  }
}

class Produto {
  private _nome: string;
  private _preco: number;
  private _qtde: number;
  private _disponivel: boolean;

  constructor(nome: string, preco: number, qtde: number) {
    this._nome = nome;
    this._preco = preco;
    this._qtde = qtde;
    this._disponivel = qtde > 0;
    estoque.adicionar(this);
  }

  get nome(): string {
    return this._nome;
  }

  get preco(): number {
    return this._preco;
  }

  get qtde(): number {
    return this._qtde;
  }

  get disponivel(): boolean {
    return this._disponivel;
  }

  get valorTotal(): number {
    return this._preco * this._qtde;
  }
}

const estoque = new Estoque();

const produto1 = new Produto('sabao', 2.42, 2);
const produto2 = new Produto('arroz', 9.25, 1);
const produto3 = new Produto('cafe', 5.1, 3);
const produto4 = new Produto('batata', 12.43, 0);

estoque.mostrarProdutos();

produto1.disponivel;
produto4.disponivel;

console.log(
  `Valor total em estoque: ${formatToReal(estoque.calcularValorTotal())}`
);
