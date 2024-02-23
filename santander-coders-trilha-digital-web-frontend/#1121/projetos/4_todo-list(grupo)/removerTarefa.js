import { prompt } from './utils.js';
import { listarTarefas } from './listarTarefas.js';

export function removerTarefa(tarefas) {
  if (tarefas.length === 0) {
    console.log('Não há tarefas cadastradas');
    return tarefas;
  }

  listarTarefas(tarefas);
  let tarefaEncontrada = -1;
  let id;

  while (tarefaEncontrada === -1) {
    id = Number(prompt('Qual tarefa deseja remover?: ').trim()?.[0]);
    tarefaEncontrada = tarefas.findIndex((tarefa) => tarefa.id === id);
    if (tarefaEncontrada === -1) {
      console.log('Tarefa não encontrada.');
    } else {
      tarefaEncontrada = tarefas[tarefaEncontrada];
    }
  }

  console.log(
    `Você está prestes a remover a seguinte tarefa:\nNome: ${tarefaEncontrada.nome}\nDescrição: ${tarefaEncontrada.descricao}\n`
  );
  let confirmacao = prompt('Digite "sim" para confirmar: ');

  if (confirmacao.toLowerCase() === 'sim') {
    tarefas.forEach((tarefa, i) => {
      if (tarefa.id === id) {
        tarefas.splice(i, 1);
        console.log('Tarefa removida com sucesso.');
      }
    });
  } else {
    console.log('Operação de remoção cancelada.');
  }
}
