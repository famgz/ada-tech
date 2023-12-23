import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import { Counter } from './components/Counter/Counter';

import articleImg1 from './assets/images/article1.png';
import articleImg2 from './assets/images/article2.png';
import articleImg3 from './assets/images/article3.png';

import './styles/App.css';

// Componente em classe eh uma classe que herda a classe Componente do React,
// e retorna HTML dentro do metodo render

// Componenete funcional eh uma funcao que retorna HTML

class App extends React.Component {
  // Metodo responsavel por renderizar conteudo HTMl do nosso componente
  render() {
    return (
      <>
        <Navbar />

        <Counter />

        <section id='articles'>
          <Article
            title='Designing Dashboards'
            provider='NASA'
            image={articleImg1}
            test='asd'
          />

          <Article
            title='Vibrant Portraits of 2020'
            provider='SpaceNews'
            image={articleImg2}
          />

          <Article
            title='36 Days of Malayalam type'
            provider='Spaceflight Now'
            image={articleImg3}
          />

          <Article
            title='Designing Dashboards'
            provider='NASA'
            image={articleImg1}
          />
        </section>
      </>
    );
  }
}

export default App;
