const fs = require('fs');

// * 1. Callbacks

// console.log('ANTES de ler o arquivo')

// // Funcao assincrona (ler um arquivo leva um tempo)
// fs.readFile('arquivo.txt', (erro, conteudoArquivo) => {
//     if(erro) console.log('Ocorreu erro na leitura do arquivo:', erro)
//     else console.log(String(conteudoArquivo))
// })

// console.log('DEPOIS de ler o arquivo')

// // setTimeout (funcao que cria um timer)
// setTimeout(() => {
//     console.log('Isso sera executado apos 2 segundos')
// }, 2 * 1000)

// * 2. Promises (promessas)

// console.log('ANTES da criacao da promise...');

// criando uma promessa
function lerAquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('arquivo.txt', (erro, conteudoArquivo) => {
            if (erro) reject('Ocorreu erro na leitura do arquivo:', erro);
            else resolve(String(conteudoArquivo));
        });
    });
}

// .then sera chamado quando a promessa for cumprida
// lerAquivoPromise()
//     .then((retornoDoResolveDaPromessa) => {
//         console.log('Deu certo:', retornoDoResolveDaPromessa);
//     })
//     .catch((erro) => {
//         console.log('Deu ruim:', erro);
//     })
//     .finally(() => {
//         console.log('Isso sera executado em qualquer situacao');
//     });

// console.log('DEPOIS da criacao da promise...');

// console.log(promessa);

// * 3. async/await

async function leituraDeDados() {
    console.log('Executado ANTES da promise ser resolvida\n');

    try {
        const retornoDaPromessa = await lerAquivoPromise(); // espera a promessa ser resolvida para avancar no codigo
        console.log(retornoDaPromessa);
        console.log('\nExecutado DEPOIS da promise ser resolvida');
    } catch (err) {
        console.log(err);
        console.log('Isso eh executado depois da promise (com erro)');
    } finally {
        console.log('Dentro do finally')
    }
}

leituraDeDados();
