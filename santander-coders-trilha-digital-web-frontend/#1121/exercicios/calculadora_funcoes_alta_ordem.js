function calcular(operador) {
  return (a, b) => operador(a, b);
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  return b === 0 ? 'Erro: Divisão por zero' : a / b;
}

function multiplicar(a, b) {
  return a * b;
}

const operacaoSoma = calcular(somar);
const operacaoSubtracao = calcular(subtrair);
const operacaoMultiplicacao = calcular(multiplicar);
const operacaoDivisao = calcular(dividir);

console.log(`O resultado da operação é: ${operacaoSoma(10, 5)}`);
console.log(`O resultado da operação é: ${operacaoSubtracao(10, 5)}`);
console.log(`O resultado da operação é: ${operacaoMultiplicacao(10, 5)}`);
console.log(`O resultado da operação é: ${operacaoDivisao(10, 5)}`);
