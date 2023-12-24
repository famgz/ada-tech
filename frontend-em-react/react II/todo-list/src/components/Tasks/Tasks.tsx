import { FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';

type TaskInfo = {
  id: number;
  done: boolean;
}

type Task = {
  [title: string]: TaskInfo
};

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task>({});

  let [taskTitle, setTaskTitle] = useState('');

  // funcao disparada quando ususario quer adicionar nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    console.log('taskTitle:', taskTitle);

    taskTitle = taskTitle.trim();

    if (taskTitle.length < 3) {
      alert('A tarefa deve conter ao menos 3 caracteres.');
      return;
    }
    
    if(Object.keys(tasks).includes(taskTitle)) {
      alert(`Tarefa "${taskTitle}" ja foi adicionada.`);
      return;
    }

    // ! nao recomendado devido a caracteristica de imutabilidade do React
    // tasks[taskTitle] = {id: 123, done: false}

    // adicionar tarefa
    // utilizando a forma funcional do setState, que garante utilizar a ultima versao (prevTasks) ao atualizar o objeto
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskTitle]: {
        id: new Date().getTime(),  // timestamp
        done: false,
      },
    }));
    // console.log(tasks); // nao mostra a ultima task inserida por razoes assincronas. Usar useEffect

    // Guardar informacoes no localStorage, nao funciona corretamente por razoes assincronas. Usar useEffect
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // Limpar campo de input
    setTaskTitle('')
  }

  // carregar tarefas do localStorage quando o componente for montado
  useEffect(() => {
    const localStorageTasks = localStorage.getItem('tasks')

    if(!localStorageTasks) return

    setTasks(JSON.parse(localStorageTasks))
  }, [])

  // salvar as tasks no localStorage sempre que forem atualizadas
  useEffect(() => {
    console.log('tasks:', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <section className={styles.container}>
      <div>
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
          {/* {Object.entries(tasks).map(([title, info]: [string, TaskInfo]) => { */}
          {Object.entries(tasks).map(([title, info]) => {
            return (
              <li key={info.id}>
                <input type='checkbox' id={`task-${info.id}`} />
                <label htmlFor='task'>{title}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
