import promptSync from 'prompt-sync';
export const prompt = promptSync();

export function obterIdValido(tarefas) {
  const ids = tarefas.map((tarefa) => tarefa.id).sort((a, b) => a - b);
  const lastId = ids.at(-1) || 0;
  return lastId + 1;
}
