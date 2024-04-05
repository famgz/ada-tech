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
    nome: "João",
    linguagemPreferida: "JS",
  },
  {
    id: 2,
    nome: "Maria",
    linguagemPreferida: "C#",
  },
  {
    id: 3,
    nome: "Tadeu",
    linguagemPreferida: "HTML",
  },
];

const postagens = [
  {
    idUsuario: 1,
    idPost: 1,
    post: "JS é a melhor linguagem de todas",
  },
  {
    idUsuario: 1,
    idPost: 2,
    post: "Aprendi como fazer torradas em JS 😎",
  },
  {
    idUsuario: 3,
    idPost: 3,
    post: "HTML Melhor linguagem de programação hein!? 👾",
  },
];

//Questão 1)

async function getUsuarioById(id) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const usuarioEncontrado = usuarios.find((user) => user.id === id);
        if (!usuarioEncontrado) {
          reject("Usuário nao encontrado");
        }
        resolve(usuarioEncontrado);
      }, 3000);
    } catch (error) {
      reject("Erro no processo de buscado usuário ", error.message);
    }
  });
}

getUsuarioById(3)
  .then((result) => {
    console.log("-----------Questão 1-------------");
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Questão 2

async function getPostsByUserId(id) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const usuarioEncontrado = usuarios.find((el) => el.id === id);
        if (!usuarioEncontrado) {
          reject("Usuario não encontrado");
        }

        const postsUsuario = postagens.filter((el) => el.idUsuario === id);

        if (!postsUsuario) {
          resolve([]);
        }
        console.log("Posts usuario");
        resolve(postsUsuario);
      }, 3000);
    } catch (error) {
      reject("Um erro ocorreu ao buscar os usuários ", error.message);
    }
  });
}

getPostsByUserId(1)
  .then((result) => {
    console.log("---------------Questao 2-----------------");
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Questão 3

async function exibirDetalhesUsuario(id) {
  const usuario = await getUsuarioById(id);
  const posts = await getPostsByUserId(id);
  return {
    usuario,
    posts,
  };
}

exibirDetalhesUsuario(1)
  .then((result) => {
    console.log("------------------Questao 3------------------");
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
