import { FormEvent, useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { TasksContext } from '../../context/TasksContext';

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const { tasks, setTasks, updateTaskStatus, deleteTask } =
    useContext(TasksContext);

  // funcao disparada quando ususario quer adicionar nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    const title = taskTitle.trim();

    if (title.length < 3) {
      alert('A tarefa deve conter ao menos 3 caracteres.');
      return;
    }

    if (Object.keys(tasks).includes(title)) {
      alert(`Tarefa "${title}" ja foi adicionada, escolha um titulo diferente`);
      return;
    }

    // tasks[taskTitle] = {id: 123, done: false} // nao recomendado devido a caracteristica de imutabilidade do React

    // * adicionar tarefa
    // utilizando a forma funcional do setState, que garante utilizar a ultima versao (prevTasks) ao atualizar o objeto
    setTasks((prevTasks) => ({
      ...prevTasks,
      [title]: {
        timestamp: new Date().getTime(), // timestamp
        done: false,
      },
    }));
    // console.log(tasks); // nao mostra a ultima task inserida por razoes assincronas. Usar useEffect para isto

    // Guardar diretamente informacoes no localStorage tambem nao funciona corretamente por razoes assincronas. Usar useEffect
    // localStorage.setItem('tasks', JSON.stringify(tasks));

    // Limpar campo de input
    setTaskTitle('');
  }

  return (
    <section className={styles.container}>
      <form
        // onSubmit={(event) => handleSubmitAddTask(event)} // redundante, event sera passado implicitamente
        onSubmit={handleSubmitAddTask}
      >
        <div>
          <label htmlFor='task-title'>Adicionar Tarefa</label>
          <input
            value={taskTitle}
            type='text'
            id='task-title'
            placeholder='Titulo de Tarefa'
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
          />
        </div>
        <button type='submit'>Adicionar Tarefa</button>
      </form>

      <ul>
        {/* Renderizar tarefas */}
        {/* {Object.entries(tasks).map(([title, info]: [string, TaskInfo]) => {} */}
        {Object.entries(tasks).map(([title, info]) => {
          return (
            <li key={info.timestamp}>
              <input
                onChange={(event) => updateTaskStatus(title)}
                type='checkbox'
                id={`task-${info.timestamp}`}
                checked={info.done}
              />
              <label
                style={{ width: '150px' }}
                className={info.done ? styles.done : ''}
                htmlFor='task'
              >
                {title}
              </label>
              <button style={{padding: '0 0.5rem'}} onClick={() => deleteTask(title)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
