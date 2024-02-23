export function listarTarefas(tarefas) {
  console.log(
    '----------------------- LISTA DE TAREFAS ----------------------- \n'
  );

  const formatada = tarefas.map(({ id, nome, descricao, concluido }) => ({
    ID: id,
    nome,
    descricao,
    status: concluido ? 'concluído' : 'pendente',
  }));

  console.table(formatada);
}
