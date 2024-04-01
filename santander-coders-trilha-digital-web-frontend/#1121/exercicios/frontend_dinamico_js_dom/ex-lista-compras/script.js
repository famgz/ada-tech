const produtos = [
  {
    produto: 'arroz',
    valor: 23.23,
  },
  {
    produto: 'feijão',
    valor: 12.12,
  },
];
const lista = document.getElementById('lista');
const inputLimite = document.getElementById('limite');
const inputProduto = document.getElementById('produto');
const inputValor = document.getElementById('valor');
const inputs = [inputLimite, inputProduto, inputValor];
const limiteDisplay = document.getElementById('limiteDisplay');
const somaDisplay = document.getElementById('soma');
let limiteTotal = 100;

function formatToReal(n) {
  n = Number(n);
  if (isNaN(n)) {
    return '-';
  }
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(n);
}

function adicionarItem() {
  const limite = parseFloat(inputLimite.value);
  const produto = inputProduto.value;
  const valor = parseFloat(inputValor.value);

  if (!(limite && produto && valor)) {
    alert('Todos os campos devem ser preenchidos');
    return;
  }

  const obj = {
    produto,
    valor,
  };

  produtos.push(obj);
  limiteTotal = limite;

  renderizar();
  limparInputs();
}

function adicionarListenersItem(li, idx) {
  // clique checkbox
  const checkbox = li.querySelector('.checkbox');
  checkbox.addEventListener('click', () => {
    const estaSelecionado = checkbox.checked;
    li.querySelectorAll('span').forEach((span) => {
      span.style.textDecoration = estaSelecionado ? 'line-through' : 'none';
    });
  });

  // botão remover
  li.querySelector('button').addEventListener('click', () => {
    console.log('botao');
    produtos.splice(idx, 1);
    renderizar();
  });
}

function limparInputs() {
  inputs.forEach((el) => (el.value = ''));
}

function calcularSoma() {
  const total = produtos.reduce((acc, curr) => acc + curr.valor, 0);
  limiteDisplay.innerText = formatToReal(limiteTotal);
  somaDisplay.innerText = formatToReal(total);
  somaDisplay.style.color = total > limiteTotal ? 'red' : 'white';
}

function renderizar() {
  console.log({ produtos });
  console.log({ limiteTotal });
  lista.innerHTML = '';
  produtos.forEach((el, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
          <input class="checkbox" type="checkbox" name="" id="checkbox_produto_${
            idx + 1
          }" />
          <span>${el.produto}</span>
          <span>${formatToReal(el.valor)}</span>
          <button>Remover</button>
      `;

    adicionarListenersItem(li, idx);
    lista.appendChild(li);
  });

  calcularSoma();
}

renderizar();
