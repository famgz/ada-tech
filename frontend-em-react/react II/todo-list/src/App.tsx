import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import './styles/global.css';
import { Tasks } from './components/Tasks/Tasks';
import { Refs } from './components/Concepts/Refs';
import { Memoization } from './components/Concepts/Memoization';
import { TasksProvider } from './context/TasksContext';

function App() {
  // const [toggle, setToggle] = useState(false)
  /* O useEffect sera disparado sempre que alguma variavel do array de
  dependencias for alterado
  Por padrao, sempre o useEffect sera disparado apos a montagem de componente (ComponentDidMount)
  */

  // useEffect(() => {
  //   console.log('Executando a funcao do useEffect')

  //   // componentWillUnmount => Cleanup function
  //   return () => {
  //     console.log('Isso sera executado quando o componente App for desmontado da tela')
  //   }
  // }, [toggle])

  return (
    // Contexto
    <TasksProvider>
      <Header />
      <Tasks />

      {/* <Refs /> */}

      {/* <Memoization financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }} /> */}
    </TasksProvider>
  );
}

export default App;
