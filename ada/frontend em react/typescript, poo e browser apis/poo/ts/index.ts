// Object literal (nao reutilizavel)
const pessoaLiteral = {
    nome: 'Walter',
    idade: 27,
};

interface IPessoa {
    nome: string;
    idade: number;
    altura?: number;
    dormir: (horario: string) => void;
}

// Classe abstrata
class Pessoa implements IPessoa {
    // atributos (variaveis)
    nome: string;
    idade: number;
    // encapsulamento
    // readonly pode ser lido, mas nao alterado (readonly eh exclusivo do TS)
    // boa pratica adicionar prefixo `_` para diferencia do getter
    // readonly nao pode ser alterado
    readonly _cpf: string;
    // private nao pode ser acessado diretamente (private eh exclusivo do TS)
    // boa pratica adicionar prefixo `_` para diferencia do setter
    // private pode ser alterado com o setter
    private _senha: string;
    altura?: number = 0;

    // Metodo construtor
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        senha: string,
        altura?: number
    ) {
        this.nome = nome;
        this.idade = idade;
        this._cpf = cpf;
        this._senha = senha;
        this.altura = altura;
    }

    // metodos (funcoes)
    dormir(horario: string) {
        console.log(`${this.nome} esta dormindo as ${horario} horas`);
    }

    // accessor: getter (usando o `get` nao precisa de () ao ser chamado)
    get cpf(): string {
        return this._cpf;
    }

    // accessor: setter (usando o `set` nao precisa de () ao ser chamado)
    set senha(newSenha: string) {
        if (newSenha.length <= 5) {
            throw new Error('A senha deve ter mais de 5 caracteres');
        }
        this._senha = newSenha;
    }
}

// Heranca
class Professor extends Pessoa {
    codigo: string;

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        senha: string,
        altura: number,
        codigo: string
    ) {
        super(nome, idade, cpf, senha, altura);
        this.codigo = codigo;
    }

    ensinar() {
        console.log(`Professor ${this.nome} esta ensinando`);
    }
}

// Criando uma pessoa a partir da definicao da classe Pessoa
const pessoa1 = new Pessoa('Walter', 23, '123.456.789-00', 'senhasecreta', 1.8);
const pessoa2 = new Pessoa('Pedro', 31, '123.456.789-01', 'senhasecreta');

pessoa2.dormir('23');

console.log(pessoa2.cpf); // usando getter

pessoa2.senha = 'novasenha'; // usandosetter

console.log(pessoa2);

// Objeto da classe professor
const professor = new Professor(
    'Amilcar',
    30,
    '123.456.789-02',
    'senhaprof',
    1.99,
    'PROF_01'
);

console.log(professor);

// Polimorfismo
console.log(pessoa1 instanceof Pessoa);  // true
console.log(pessoa1 instanceof Professor);  // false
console.log(professor instanceof Professor);  // true
console.log(professor instanceof Professor);  // false
