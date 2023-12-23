import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log('Construindo a classe counter...');
  }

  consoleScroll() {
    console.log('Rolando a pagina...');
  }

  // ! UNSAFE_ = metodos obsoletos

  UNSAFE_componentWillMount() {
    console.log('O nosso componente contador sera montado');
  }

  componentDidMount() {
    console.log('O componente foi montado ✔');

    // quando o componente montar, insira essa evento (exemplo de aplicacao)
    // precisara ser removido (em componentWillUnmount) ou o evento continuara ocorrendo mesmo que apos desmontagem
    document.addEventListener('scroll', this.consoleScroll);
  }

  // metodo chamado sempre que uma prop ou estado for atualizado (pouco utilizado)
  shouldComponentUpdate() {
    // return false // componente nunca sera atualizado
    if (this.state.contador === 2) return false; // controlar quando nao ocorrera a renderizacao
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('O componente sera atualizado');
  }

  componentDidUpdate() {
    console.log('O componente foi atualizado');
  }

  componentWillUnmount() {
    console.log('O componente sera desmontado...');

    document.removeEventListener('scroll', this.consoleScroll);
  }

  // componentDidUnmount (){}  // este metodo nao faria sentido porque o componente ja nao existiria

  // ultimo metodo
  render() {
    console.log('Renderizando o componente counter...');
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
            console.log(this.state.contador);
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
            console.log(this.state.contador);
          }}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
