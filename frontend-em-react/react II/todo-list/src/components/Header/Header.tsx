// forma antiga de importacao classica de CSS
// import './styles.module.css'

// outra forma mais moderna eh usar CSS Modules (styles.module.css)
// torna o estilo exclusivo para o modulo, criando identificadores unicos
// porem o TS nao reconhecera as classes desta forma usando a importacao simples `import './styles.module.css'`
// este style sera um objeto que contem todas as classes no arquivo css como propriedades
// ex.: classe .header ficara como { header: "styles_header__4HkP7" }
// import styles from './styles.module.css'

// SASS
// requer instalacao `npm install sass`
import styles from './styles.module.scss';
// console.log(styles);

import { StatsCard } from '../StatsCard/StatsCard';

// usando arrow functions nos permite especificar que eh um componente funcional do React (Functional Component)
// vantagem de declarar com React.FC eh que da erro quando se omite o retorno
export const Header: React.FC = () => {

  return (
    // <header className='header'>
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          <span>Bem vindo, Walter!</span>
        </div>
        <div>
          <StatsCard title='Total de tarefas' value={5} />
          <StatsCard title='Tarefas Pendentes' value={4} />
          <StatsCard title='Tarefas Concluídas' value={1} />
        </div>
      </div>
    </header>
  );
};
