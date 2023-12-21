"use strict";
// Object literal (nao reutilizavel)
const pessoaLiteral = {
    nome: 'Walter',
    idade: 27,
};
// Classe abstrata
class Pessoa {
    // Metodo construtor
    constructor(nome, idade, cpf, senha, altura) {
        this.altura = 0;
        this.nome = nome;
        this.idade = idade;
        this._cpf = cpf;
        this._senha = senha;
        this.altura = altura;
    }
    // metodos (funcoes)
    dormir(horario) {
        console.log(`${this.nome} esta dormindo as ${horario} horas`);
    }
    // accessor: getter (usando o `get` nao precisa de () ao ser chamado)
    get cpf() {
        return this._cpf;
    }
    // accessor: setter (usando o `set` nao precisa de () ao ser chamado)
    set senha(newSenha) {
        if (newSenha.length <= 5) {
            throw new Error('A senha deve ter mais de 5 caracteres');
        }
        this._senha = newSenha;
    }
}
// Heranca
class Professor extends Pessoa {
    constructor(nome, idade, cpf, senha, altura, codigo) {
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
const professor = new Professor('Amilcar', 30, '123.456.789-02', 'senhaprof', 1.99, 'PROF_01');
console.log(professor);
// Polimorfismo
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Professor); // true
console.log(professor instanceof Professor); // false
