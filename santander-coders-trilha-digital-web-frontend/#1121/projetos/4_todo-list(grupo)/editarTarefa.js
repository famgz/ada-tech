import { listarTarefas } from './listarTarefas.js';
import { prompt } from './utils.js';

export function editarTarefa(tarefas) {
  if (tarefas.length === 0) {
    console.log('Não há tarefas cadastradas');
    return tarefas;
  }

  listarTarefas(tarefas);

  const idEditar = Number(
    prompt('Informe o ID da tarefa que deseja editar: ').trim()
  );

  let tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === idEditar);

  if (!tarefaEncontrada) {
    console.log('Tarefa não encontrada. Tente novamente');
    return tarefas;
  }

  console.log(`
    1 - Alterar nome da tarefa
    2 - Alterar Descrição da tarefa
    3 - Alterar status da tarefa
    `);

  let menuEdicao = null;

  while (true) {
    menuEdicao = Number(
      prompt(
        `Escolha o que deseja alterar na tarefa *${tarefaEncontrada.nome}*:`
      ).trim()
    );

    if ([1, 2, 3].includes(menuEdicao)) {
      break;
    } else {
      console.log('Digite uma opção válida');
    }
  }

  switch (menuEdicao) {
    case 1:
      console.clear();
      const nomeAlterado = prompt('Informe o novo nome da tarefa: ').trim();
      console.log(
        `Alteração efetuada com sucesso. ${tarefaEncontrada.nome} alterado para ${nomeAlterado} `
      );
      tarefaEncontrada.nome = nomeAlterado;
      break;

    case 2:
      console.clear();
      const descricaoAlterada = prompt('Informe a nova descricao: ').trim();
      tarefaEncontrada.descricao = descricaoAlterada;
      console.log(
        `Alteração efetuada com sucesso. ${tarefaEncontrada.descricao} alterado para ${descricaoAlterada}`
      );

      break;

    case 3:
      let statusValido = false;
      while (!statusValido) {
        console.clear();
        console.log(`
        0 - Tarefa em adamento
        1 - Tarefa concluída
        `);
        const statusAlterado = Number(prompt(`Informe o novo status:`).trim());
        if (statusAlterado === 0 || statusAlterado === 1) {
          statusValido = true;
          tarefaEncontrada.concluido = Boolean(statusAlterado);

          console.log(`Alteração efetuada com sucesso.`);
        } else console.log('Opção inexistente, tente novamente');
        break;
      }
      break;

    default:
      console.log('Algo deu errado, volte ao menu e tente novamente');
  }

  listarTarefas(tarefas);
}
