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

let numeros = [40, 34, 67, 89, 23, 10];

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

// * 6. map(): retorna novo array e aplica callbackFn para cada elemento

const pessoasComSobrenomeEMaiorIdade = pessoas.map((pessoa) => {
  pessoa.sobrenome = ' Sobrenome';
  pessoa.nomeCompleto = pessoa.nome + pessoa.sobrenome;
  pessoa.maiorIdade = pessoa.idade >= 18;
  return pessoa;
});

console.log(pessoasComSobrenomeEMaiorIdade);

// Desestruturacao (... spread operator)
const pessoa = {
  nome: 'Walisson',
  idade: 27,
  altura: 1.77,
};

const pessoaComPeso = {
  ...pessoa,
  peso: 79,
};

console.log(pessoaComPeso);

// * 6. filter(): retorna novo array com tamanho igual ou menor que original com itens que atendam a condicao. pode aplicar callbackFn para cada elemento

const somenteParesAoQuadrado = numeros.filter((num) => {
  if (num % 2 === 0) return num ** 2;
});

console.log(somenteParesAoQuadrado);


// * 7. reduce(): executa para cada elemento do array uma funcao, resultando em um unico elemento

numeros = [5, 10, 15]

const somaNumerosMais10 = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 10);  // 10 -> valor inicial (default: 0)

console.log(somaNumerosMais10);  // 40

const somaParesMais100 = numeros.reduce((acumulador, numeroAtual) => {
    if(numeroAtual % 2 ===0) return acumulador + numeroAtual
    else return acumulador
}, 100)

console.log(somaParesMais100);  // 110

console.clear();


const carrinho = [
    { produto: 'feijao', preco: 7.90, quantidade: 3},
    { produto: 'arroz', preco: 3.90, quantidade: 5},
    { produto: 'leite', preco: 5.90, quantidade: 2},
]

const totalCarrinho = carrinho.reduce((acumulador, item) => {
    return acumulador + item.preco * item.quantidade
}, 0)

console.log(totalCarrinho)  // 55.0