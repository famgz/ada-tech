/**
 * Atividade
 * 1) Crie uma função assíncrona que irá simular uma busca de usuários ao
 * banco de dados.
 * 1.1 - Essa função deve demorar 3 segundos (3000ms)
 * 1.2 - A busca deve receber o parâmetro id para procurar no array de usuários
 * 1.3 - Caso o usuário não seja encontrado, exibir uma mensagem de erro utilizando
 * o catch
 * 1.4 - Crie um contador e todas as vezes que a função de buscar usuário for chamada
 * devemos incrementá-lo e logar na tela o número de chamadas
 */

/**
 * 2) Crie uma função assíncrona que se chama buscarpostagens que irá simular
 * as buscas das postagens do usuario por id no array;
 * 2.1 - Caso o post ou id do usuário não seja encontrado, devemos mostrar a mensagem
 * personalizada: "Usuário não encontrado" ou "Posts não encontrados para o usuário"
 */

/**
 * 3) Crie uma função assíncrona chamda exibirDetalhesUsuário que irá utilizar as
 * nossas duas funções assíncronas.
 * 3-1 Nós devemos inserir o id do usuário e mostraremos todas as postagens dele
 * e todos os seus dados.
 */

const usuarios = [
  {
    id: 1,
    nome: 'João',
    linguagemPreferida: 'JS',
  },
  {
    id: 2,
    nome: 'Maria',
    linguagemPreferida: 'C#',
  },
  {
    id: 3,
    nome: 'Tadeu',
    linguagemPreferida: 'HTML',
  },
];

const postagens = [
  {
    idUsuario: 1,
    idPost: 1,
    post: 'JS é a melhor linguagem de todas',
  },
  {
    idUsuario: 1,
    idPost: 2,
    post: 'Aprendi como fazer torradas em JS 😎',
  },
  {
    idUsuario: 3,
    idPost: 3,
    post: 'HTML Melhor linguagem de programação hein!? 👾',
  },
];

let chamadas = 0;

async function wait(interval) {
  await new Promise((resolve) => setTimeout(resolve, interval));
}

async function buscarUsuario(idUsuario) {
  await wait(3000);
  chamadas += 1;
  const user = usuarios.find((u) => u.id === idUsuario);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }
  return user;
}

async function buscarPostagens(idUsuario) {
  await wait(1000);
  const userPosts = postagens.filter((p) => p.idUsuario === idUsuario);
  if (userPosts.length === 0) {
    throw new Error('Posts não encontrados para o usuário');
  }
  return userPosts;
}

async function exibirDetalhesUsuario(idUsuario) {
  try {
    const userInfo = await buscarUsuario(idUsuario);
    const userPosts = await buscarPostagens(idUsuario);
    console.log({ userInfo });
    console.log({ userPosts });
  } catch (err) {
    console.error(err.message);
  }
}

exibirDetalhesUsuario(4);
