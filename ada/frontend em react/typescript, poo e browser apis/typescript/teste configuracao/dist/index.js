"use strict";
let num1; // inferencia de tipo manual
num1 = 10;
// inferencia de tipo automatica
let num2 = 20;
const pi = 3.1415; // type: 3.1415
let nome = 'Walter';
let correto = true;
let resultado = num1 * pi;
// const nomeUser = prompt('Qual seu nome')
// console.log(nomeUser?.toLowerCase())  // `?` automatica, pois prompt pode retornar null
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5]; // outra syntaxe de tipagem
const misto = ['Walter', 27, 1.77]; // union type (nao recomendado)
const misto2 = ['Walter', 27, 1.77]; // permitido mas nao faz sentido
const idades = [23, 15, 12, 67, 34];
const menoresDeIdade = idades.filter((idade) => idade < 18); // ja reconhece que sera de numbers
console.log(menoresDeIdade);
const pessoaTupla = ['Walter', 27]; // tipagem de tupla
const pessoaObjeto = {
    // obrigatoriamente tera todos as chave-valor do tipo
    nome: 'Walter',
    idade: 27,
    altura: 1.88,
    // profissao: 'Dev',
};
pessoaObjeto.profissao = 'Dev';
function escolherNumero(num1, num2, criterio // mistura de union type, literal type e opcional; obs.: parametros opcionais sempre ao final
// tipagem do retorno da funcao
) {
    switch (criterio) {
        case 'maior':
            return num1 > num2 ? num1 : num2;
        case 'menor':
            return num1 < num2 ? num1 : num2;
        // caso parametro criterio nao seja passado
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numeroEscolhido = escolherNumero(10, 20);
console.log(numeroEscolhido);
const pessoas = {
    '123.456.789-00': {
        nome: 'Milton',
        idade: 67,
        altura: 1.89
    },
    '123.456.789-01': {
        nome: 'Fulana',
        idade: 19,
        altura: 1.62
    }
};
