// Fetch API

const cep = '58040021';
const url = `https://viacep.com.br/ws/${cep}/json/`;

// //then/catch
// fetch(url)
//     .then((response) => {
//         response.json().then((dados) => console.log(dados));
//     })
//     .catch((erro) => {
//         console.log(erro);
//     });

// async/await
async function obterDadosCep() {
    try {
        const response = await fetch(url);
        const dados = await response.json();

        console.log(dados);
    } catch (erro) {
        console.log('Erro:', erro);
    } finally {
        console.log('Requisicao finalizada');
    }
}

obterDadosCep();
