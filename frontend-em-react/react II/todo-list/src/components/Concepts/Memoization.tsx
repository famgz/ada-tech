import React, { useCallback, useMemo, useState } from 'react';

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  // Estado que define se os valores devem ser mostrados ou nao, suas mudancas de estado irao re-renderizar a pagina e recalcular os valores
  const [showValues, setShowValues] = useState(true);

  // const totalIncomes = financialData.incomes.reduce((total, income) => {
  //   return (total += income);
  // }, 0);

  // const totalOutcomes = financialData.outcomes.reduce((total, outcome) => {
  //   console.log('Calculando o total de despesas');
  //   return (total += outcome);
  // }, 0);

  // * useMemo
  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log('Calculando o total de receitas');
      return (total += income);
    }, 0);
  }, [financialData.incomes]); // so ira recalcular quando este array de entradas for alterado

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log('Calculando o total de despesas');
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]); // so ira recalcular quando este array de entradas for alterado

  // * useCallback (pouco utilizado)
  // so sera recriada se `totalOutcomes` for atualizado
  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes]
  );

  console.log('Renderizacao do componente...');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Memoization</h1>
      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : 'XXXXX'}`}</p>
      <p>{`Total de Despesas: R$ ${showValues ? totalOutcomes : 'XXXXX'}`}</p>
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? 'Ocultar valores' : 'Mostrar valores'}
      </button>
    </div>
  );
};
