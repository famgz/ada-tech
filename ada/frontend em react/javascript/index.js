// ! HIGH ORDER FUNCTIONS

// * 1. Funcao que retorna outra funcao como parametro
function welcome(courseName) {
  return (studentName) => {
    console.log(`Ola ${studentName}, seja bem-vindo ao curso de ${courseName}`);
  };
}

const displayWelcomeToFrontEndCourse = welcome('Frontend em React');
const displayWelcomeToBackEndCourse = welcome('Backend em Nodejs');

displayWelcomeToFrontEndCourse('Walisson');
displayWelcomeToBackEndCourse('Pedrinho');

// * 2. Funcao que recebe outra funcao como parametro
const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const calcular = (n1, n2, funcaoOperacao) => funcaoOperacao(n1, n2);

console.log(calcular(4, 5, somar)); // somar(4, 5)
console.log(calcular(4, 5, multiplicar)); // multiplicar(4, 5)

// Calculo desejado: (n1 * n2) + 2 * (n1 * n2)
console.log(calcular(4, 5, (n1, n2) => n1 * n2 + 2 * n1 * n2));

// ----------------------------------------------------------------

// ! ARRAY'S HIGH ORDER FUNCTIONS

// * 1. forEach()

const numeros = [40, 34, 67, 89, 23, 10];

// function imprimirElemento(item) {
//     if(item > 30) console.log(item)
// }

// numeros.forEach(imprimirElemento)

numeros.forEach((item, index, arrayCompleto) => {
  if (item === 89) arrayCompleto.push(666);
  if (item > 30) console.log(index, item, arrayCompleto);
});

// * 2. find(): util para encontrar um elemento dentro do array com eficiencia

const encontrado = numeros.find((numero, index, arrayCompleto) => {
  // return numero === 10 || numero === 34; // 34
  // return numero > 50;                    // 67
  return numero === 100; // undefined
});

console.log(encontrado);

const pessoas = [
  {
    nome: 'Jose',
    idade: 34,
    altura: 1.88,
  },
  {
    nome: 'Maria',
    idade: 55,
    altura: 1.67,
  },
  {
    nome: 'Pedro',
    idade: 17,
    altura: 1.8,
  },
];

const pessoaEcontrada = pessoas.find((pessoa) => {
  // return pessoa.idade > 40
  return pessoa.idade > 40 && pessoa.altura > 1.7;
});

console.log(pessoaEcontrada?.nome);

// * 3. findIndex(): parecido com o find(), porem retorna o indice encontrado ou -1

const indicePessoaEcontrada = pessoas.findIndex((pessoa) => {
  // return pessoa.idade > 40                       //  1
  return pessoa.idade > 40 && pessoa.altura > 1.7; // -1 (not found)
});

console.log(indicePessoaEcontrada);

// * 4. every(): verifica se TODOS os elementos do array atendem a determinada condicao

const todosPositivos = numeros.every((numero) => numero > 0); // true

const todosMaioresIdade = pessoas.every((pessoa) => pessoa.idade >= 18); // false

// * 5. some(): verifica se ALGUM dos elementos do array atendem a determinada condicao

const algumPositivo = numeros.some((numero) => numero > 0); // true

const algumMaiorIdade = pessoas.some((pessoa) => pessoa.idade >= 18); // true

console.clear();

// * 6. map(): executa callbackFn para cada elemento do array e retorna o novo array

const pessoasComSobrenomeEMaiorIdade = pessoas.map((pessoa) => {
  pessoa.nome + ' Sobrenome';
  pessoa.maiorIdade = pessoa.idade >= 18
  return pessoa
});

console.log(pessoasComSobrenomeEMaiorIdade);
