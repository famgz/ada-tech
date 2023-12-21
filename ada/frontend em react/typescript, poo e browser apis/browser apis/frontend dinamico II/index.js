// * Adicionar eventos aos elementos

const botaoAumentar = document.querySelector('#botao-aumentar');
const botaoDiminuir = document.querySelector('#botao-diminuir');

const contador = document.querySelector('#contador');

const input = document.querySelector('#input');

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual + 1;
    botaoAumentar.classList.add('btn');
    botaoDiminuir.classList.remove('btn');
});

botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual - 1;
    botaoAumentar.classList.remove('btn');
    botaoDiminuir.classList.add('btn');
});

input.addEventListener('input', () => {
    console.log(input.value);
});

// * Adicionando estilos inline no elemento contador

contador.style.color = 'red';
contador.style.padding = '0 2rem';
// contador.style['background-color'] = '#ccc'
contador.style.backgroundColor = '#ccc'; // use camelCase for hifen attributes
contador.style.border = '1px solid black';
contador.style.width = '150px';

// * Manipular classes

console.log(botaoDiminuir.classList);

// botaoAumentar.classList.add('btn'); // adicionar classe ao botaoAumentar
// botaoDiminuir.classList.remove('btn'); // remover classe ao botaoAumentar

let darkTheme;

function aplicarTema() {
    const body = document.querySelector('body');
    if (darkTheme) {
        body.style.backgroundColor = '#444';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = '#444';
    }
}

function alterarTema() {
    darkTheme = !darkTheme;
    // salvar valor no localStorage
    localStorage.setItem('isDarkTheme', darkTheme);
    aplicarTema()
}

// definindo uma funcao que sera executada ao carregar o conteudo da pagina
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem('isDarkTheme'); // sempre retorna o valor como string
    darkTheme = isDarkThemeStorage === 'true'; // Boolean('false') nao funciona
    aplicarTema();
};

const themeButton = document.querySelector('#theme');

themeButton.addEventListener('click', alterarTema);

// * Guardar informacao no Storage
