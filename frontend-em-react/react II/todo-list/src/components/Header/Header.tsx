// * Importacao estilos
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

import { useContext } from 'react';
import { StatsCard } from '../StatsCard/StatsCard';
import { TasksContext } from '../../context/TasksContext';

// usando arrow functions nos permite especificar que eh um componente funcional do React (Functional Component)
// vantagem de declarar com React.FC eh que da erro quando se omite o retorno
export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = Object.keys(tasks).length;

  const totalPending = Object.values(tasks).reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);

  const totalDone = totalTasks - totalPending

  return (
    // <header className='header'>
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          <span>Bem vindo, Walter Branco!</span>
        </div>
        <div>
          <StatsCard title='Total de tarefas' value={totalTasks} />
          <StatsCard title='Tarefas Pendentes' value={totalPending} />
          <StatsCard title='Tarefas Concluídas' value={totalDone} />
        </div>
      </div>
    </header>
  );
};
