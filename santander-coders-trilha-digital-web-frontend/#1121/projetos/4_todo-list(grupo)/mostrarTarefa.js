import { listarTarefas } from './listarTarefas.js';
import { prompt } from './utils.js';

function centralizarLog(text) {
  const totalWidth = process.stdout.columns;
  const lines = text.split('\n');

  lines.forEach((line) => {
    const leftPadding = Math.floor((totalWidth - line.length) / 2);
    const paddingString = ' '.repeat(Math.max(0, leftPadding));
    console.log(paddingString + line);
  });
}

export function mostrarTarefa(tarefas) {
  console.clear();

  listarTarefas(tarefas);

  const printid = Number(
    prompt('Digite o ID da tarefa a ser exibida: ').trim()
  );
  let tarefa = tarefas.find((tarefa) => tarefa.id === printid);

  if (tarefa) {
    centralizarLog('===||| Sua Tarefa Buscada é |||===\n');
    centralizarLog(
      `=========================  ${tarefa.id} - ${tarefa.nome}  ========================\n`
    );
    centralizarLog('|| Descrição da Tarefa: ||\n');
    centralizarLog(`${tarefa.descricao}\n`);

    if (tarefa.concluido === true) {
      centralizarLog('||Status||: A tarefa está Concluída 😎\n');
    } else {
      centralizarLog('||Status||: A tarefa ainda não foi finalizada 😴\n');
    }
  } else {
    console.log('Tarefa não encontrada.');
  }
}
