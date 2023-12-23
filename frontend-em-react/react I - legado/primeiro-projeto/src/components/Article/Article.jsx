import React from 'react';
import './styles.css';

// export class Article extends React.Component {
/*
  props are generated automatically

  this.props = {
    title: 'Exemplo',
    provider: 'NASA'
  }
  */

export function Article({ title, provider, summary, image, url}) {
  // Caso 1. parametros de props nao declarados: Article(props)
  // chaves de props sao geradas automaticamente ao passar parametros quando o componente e chamado
  // a prop ira constar apenas no que componente que foi inserida ao ser chamado
  // tera que chamar {props.prop}

  // Caso 2. parametros de props explicitos: Article({ title, provider, image })
  // boa pratica declarar previamente e desestruturar
  // uma nova prop passada na chamada nao sera reconhecida ou sera ignorada

  // console.log(props);

  return (
    <article id='article'>
      <a href={url} target='_blank' rel="noreferrer">
        <img src={image} alt={title}/>
      </a>
      <div className='article-infos'>
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}
