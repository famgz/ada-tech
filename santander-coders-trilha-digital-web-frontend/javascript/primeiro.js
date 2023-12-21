let numero = 10

console.log(numero == 10) // true
console.log(numero == '10') // true check content only
console.log(numero == '010.0') // true check content only
console.log(numero === '10') // false check content and type

console.clear()

// npm install -g readline-sync  // -g -> global
const input = require('readline-sync')
let x
// let x = input.question('digite numero\n')
console.log(x, typeof x)

console.clear()

// Arrays

let arr1 = [30, 12, 45, 34, 29]

// Fatiamento: slice
console.log(arr1.slice(0,2))  // 30, 12
console.log(arr1.slice(2))  // 45, 34 29


let arr2 = []
// Adicionando elementos: push | unshift
arr2.push(12, 20)  // adiciona ao final do array
arr2.unshift(1) // adiciona ao inicio do array

// Removendo elementos: pop | shift
a = arr2.pop() // remove e retorna ULTIMO elemento do array; nao gera erro caso array esteja vazio
b = arr2.shift()  // remove e retorna PRIMEIRO elemento do array; nao gera erro caso array esteja vazio

// Concatenando arrays: concat

arr1 = [1,2,3]
arr2 = [4,5,6]

arr1.concat(arr2) // [arr1] + [arr2]; retorna o resultado, nao altera o array original. deve-se reatribuir
arr2.concat(arr2) // [arr2] + [arr1]

console.log(arr1)

console.clear()

// Buscando elementos: indexOf | lastIndexOf
arr1 = [1,2,3,3,5,3]
let indiceDoElemento = arr1.indexOf(3) // retorna -1 se nao encontrar

let indiceDoUltimoElementoEncontrado = arr1.lastIndexOf(3)

// Checando a existencia de um elemento: includes
arr1 = [10, 25, 35]
arr1.includes(10)  // boolean

// Inverter arrays: reverse
arr1Invertido = arr1.reverse()
