// * Selecionar elementos HTML da pagina utilizando o document

// 1. Pelo nome da tag
const todosP = document.getElementsByTagName('p');
console.log(todosP);

// 2. Pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName('paragrafo');
console.log(todosClasseParagrafo);

// 3. Pelo `name` da tag
const emailInput = document.getElementsByName('email-input');
console.log(emailInput);

// 4. Pelo id
const jsLogoImg = document.getElementById('js-logo');
console.log(jsLogoImg);

// 5. Query selector
const imagem = document.querySelector('body > img#js-logo');
console.log(imagem);

const paragrafos = document.querySelectorAll('p'); // seleciona todos
console.log(paragrafos);

console.clear();

// * Acessando/alterando conteudo HTML das tags

const primeiroParagrafo = document.querySelector('p.paragrafo');

console.log(primeiroParagrafo);

console.log('textContent:', primeiroParagrafo.textContent); // Seleciona apenas conteudo em texto
console.log('innerHTML:', primeiroParagrafo.innerHTML); // Seleciona todo o conteudo

primeiroParagrafo.textContent =
    'O conteudo foi editado <strong>parte em destaque</strong>'; // Altera o conteudo mas desconsidera a nova tag strong
primeiroParagrafo.innerHTML =
    'O conteudo foi editado <strong>parte em destaque</strong>'; // Altera o conteudo e considera a nova tag strong

emailInput[0].value = 'walter@email.com';

console.clear();

// * Criando/removendo elementos na pagina HTML

const listaUl = document.querySelector('ul#lista')
const listaLis = document.querySelectorAll('ul#lista > li')

const novaTagLi = document.createElement('li'); // criando uma tag li vazia

novaTagLi.textContent = 'Segundo item'; // adicionando um texto dentro da tag li

// listaUl.appendChild(novaTagLi) // inserindo novo elemento dentro da lista
// listaUl.appendChild(novaTagLi) // nao funciona na segunda vez

listaUl.insertBefore(novaTagLi, listaLis[1])  // adicionar nova li especificamente antes do segundo li

listaUl.removeChild(listaLis[0])  // remover prieiro elemento da lista