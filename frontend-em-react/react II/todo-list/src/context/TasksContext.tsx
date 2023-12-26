import { createContext, useEffect, useState } from 'react';

export interface TaskInfo {
  timestamp: number;
  done: boolean;
}

export interface Task {
  [title: string]: TaskInfo;
}

interface TasksContextData {
  tasks: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task>>;
  updateTaskStatus: (taskTitle: string) => void;
  deleteTask: (taskTitle: string) => void;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  // hook deve estar dentro de um componente funcional
  const [tasks, setTasks] = useState<Task>({});

  // atualizar estado da tarefa
  function updateTaskStatus(taskTitle: string) {
    // tasks[taskTitle].done = !tasks[taskTitle].done; // atualiza a variavel mas nao altera o estado (useEfect nao dispara)
    const newTasks = { ...tasks }; // criando copia do objeto, `const newTasks = tasks` apenas cria uma referencia
    const done = newTasks[taskTitle].done;
    newTasks[taskTitle].done = !done;
    setTasks(newTasks);
  }

  // remover tarefa
  function deleteTask(taskTitle: string) {
    const newTasks = { ...tasks };
    delete newTasks[taskTitle];
    setTasks(newTasks);
  }

  // carregar tarefas do localStorage quando o componente for montado []
  useEffect(() => {
    const localStorageTasks = localStorage.getItem('tasks');
    if (!localStorageTasks) return;
    setTasks(JSON.parse(localStorageTasks));
  }, []);

  // salvar as tasks no localStorage sempre que forem atualizadas [tasks]
  useEffect(() => {
    console.log('tasks:', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      // serao acessadas as informacoes passadas dentro de `value`
      value={{
        tasks,
        setTasks,
        updateTaskStatus,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
