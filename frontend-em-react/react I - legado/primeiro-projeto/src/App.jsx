import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

import './styles/App.css';

// npm install react-loader-spinner --save

export function App() {
  const [news, setNews] = useState([]);

  // executar quando componente for montado
  useEffect(() => {
    // useEffect nao aceita funcoes assincronas diretamente como callback
    // recomenda-se criar esta funcao aqui dentro e chama-la apos
    async function loadNews() {
      // npm install axios | yarn add axios
      const response = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles'
      );
      // const data = response.json()  // json ja vem formatado?
      const newsData = response.data;
      console.log(newsData);
      setNews(newsData);
    }

    loadNews();
  }, []);

  // Metodo responsavel por renderizar conteudo HTMl do nosso componente
  return (
    <>
      <Navbar />

      <section id='articles'>
        {news.length === 0 ? (
          <div
            style={{
              height: '400px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='white'
              ariaLabel='loading'
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              provider={article.newsSite}
              summary={article.summary}
              image={article.imageUrl}
              url={article.url}
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;
