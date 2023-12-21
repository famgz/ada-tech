let num1: number; // inferencia de tipo manual

num1 = 10;

// inferencia de tipo automatica
let num2 = 20;

const pi = 3.1415; // type: 3.1415

let nome = 'Walter';

let correto: boolean = true;

let resultado = num1 * pi;

// const nomeUser = prompt('Qual seu nome')
// console.log(nomeUser?.toLowerCase())  // `?` automatica, pois prompt pode retornar null

const numbers: number[] = [1, 2, 3, 4, 5];

const numbers2: Array<number> = [1, 2, 3, 4, 5]; // outra syntaxe de tipagem

const misto: (number | string)[] = ['Walter', 27, 1.77]; // union type (nao recomendado)

const misto2: any[] = ['Walter', 27, 1.77]; // permitido mas nao faz sentido

const idades: number[] = [23, 15, 12, 67, 34];

const menoresDeIdade = idades.filter((idade) => idade < 18); // ja reconhece que sera de numbers

console.log(menoresDeIdade);

const pessoaTupla: [string, number] = ['Walter', 27]; // tipagem de tupla

// Object types (interface/type); devem ser PascalCase

interface PessoaInterface {
    nome: string;
    idade: number;
    altura: number;
    profissao: string;
}

type PessoaType = {
    nome: string;
    idade: number;
    altura: number;
    profissao?: string; // `?` = parametro opcional
};

const pessoaObjeto: PessoaType = {
    // obrigatoriamente tera todos as chave-valor do tipo
    nome: 'Walter',
    idade: 27,
    altura: 1.88,
    // profissao: 'Dev',
};

pessoaObjeto.profissao = 'Dev';

type Criterio = 'maior' | 'menor'; // type alias;

function escolherNumero(
    num1: number,
    num2: number,
    criterio?: Criterio // mistura de union type, literal type e opcional; obs.: parametros opcionais sempre ao final
    // tipagem do retorno da funcao
): number {
    switch (criterio) {
        case 'maior':
            return num1 > num2 ? num1 : num2;
        case 'menor':
            return num1 < num2 ? num1 : num2;
        // caso parametro criterio nao seja passado
        default:
            const numeroAleatorio = Math.random();

            if (numeroAleatorio >= 0.5) return num1;
            return num2;
    }
}

const numeroEscolhido = escolherNumero(10, 20);

console.log(numeroEscolhido);


// * Utility Types: permitir que crie novos tipos a partir de tipos existentes

type Person = {
    nome: string;
    idade: number;
    altura: number;
    profissao?: string; // `?` = parametro opcional
};

// 1. Partial
type PersonPartial = Partial<Person>  // .todos parametros se tornam opcionais

// 2. Required
type PersonRequired = Required<Person>  // .todos parametros se tornam obrigatorios

// 3. Pick
type PersonPick = Pick<Person, 'nome' | 'idade'>  // escolhe quais parametros serao necessarios

// 4. Omit
type PersonOmit = Omit<Person, 'profissao'>  // escolhe quais parametros serao desconsiderados

// 5. Exclude
type CriterioExclude = Exclude<Criterio, 'maior'>  // escolhe quais parametros serao desconsiderados

// 6. Record
type Pessoas = Record<string, Person>  // chave do tipo string e valor do tipo Pessoa

const pessoas: Pessoas = {
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
}
