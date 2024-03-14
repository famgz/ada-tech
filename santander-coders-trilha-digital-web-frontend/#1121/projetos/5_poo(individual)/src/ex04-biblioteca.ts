class Livro {
  private _titulo: string;
  private _autor: string;
  private _anoPublicacao: number;

  constructor(titulo: string, autor: string, anoPublicacao: number) {
    this._titulo = titulo;
    this._autor = autor;
    this._anoPublicacao = anoPublicacao;
  }

  get titulo(): string {
    return this._titulo;
  }

  get autor(): string {
    return this._autor;
  }

  get anoPublicacao(): number {
    return this._anoPublicacao;
  }
}

class Biblioteca {
  private _listaLivros: Livro[];

  constructor() {
    this._listaLivros = [];
  }

  pesquisarPorTitulo(titulo: string): Livro | undefined {
    return this._listaLivros.find(
      (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );
  }

  pesquisarPorAutor(autor: string): Livro[] {
    return this._listaLivros.filter(
      (l) => l.autor.toLowerCase() === autor.toLowerCase()
    );
  }

  adicionar(livro: Livro): boolean {
    const livroExiste = this.pesquisarPorTitulo(livro.titulo);
    if (livroExiste) {
      console.error(`O livro ${livro.titulo} já existe na biblioteca`);
      return false;
    }
    this._listaLivros.push(livro);
    console.log(`Livro ${livro.titulo} adicionado com sucesso!`);
    return true;
  }

  remover(livro: Livro): boolean {
    const indexLivro = this._listaLivros.indexOf(livro);
    if (indexLivro === -1) {
      console.error('Livro não encontrado');
      return false;
    }
    this._listaLivros.splice(indexLivro, 1);
    return true;
  }

  mostrarLivros(): void {
    const obj = this._listaLivros.map((l) => ({
      Título: l.titulo,
      Autor: l.autor,
      'Ano de Publicação': l.anoPublicacao,
    }));
    console.table(obj);
  }
}

const biblioteca = new Biblioteca();

const livro1 = new Livro('A Sombra do Vento', 'Carlos Ruiz Zafón', 2001);
const livro2 = new Livro('A Revolução dos Bichos', 'George Orwell', 1945);
const livro3 = new Livro('1984', 'George Orwell', 1949);
const livro4 = new Livro('O Código Da Vinci', 'Dan Brown', 2003);
const livro5 = new Livro('Cem Anos de Solidão', 'Gabriel García Márquez', 1967);
const livro6 = new Livro('Cem Anos de Solidão', 'Gabriel García Márquez', 1967);

biblioteca.adicionar(livro1);
biblioteca.adicionar(livro2);
biblioteca.adicionar(livro3);
biblioteca.adicionar(livro4);
biblioteca.adicionar(livro5);
biblioteca.adicionar(livro6); // Ja existe

biblioteca.remover(livro1);

biblioteca.mostrarLivros();

console.log(biblioteca.pesquisarPorTitulo('1984') || 'nao encontrado');

console.log(biblioteca.pesquisarPorAutor('George Orwell'));
