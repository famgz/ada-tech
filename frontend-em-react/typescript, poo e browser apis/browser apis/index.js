const fs = require('fs');

// * 1. Lendo um arquivo JSON

fs.readFile('.eslintrc.json', (erro, dados) => {
    if (erro) console.log('Erro:', erro);
    else {
        // dados: Buffer com dados do arquivo JSON
        console.log(JSON.parse(dados)); // convertendo Buffer em objeto
        console.log(dados.rules); //
    }
});

// Convertendo JSON em formato string para objeto

const jsonString = '{"nome": "Walter"}';

console.log(JSON.parse(jsonString));

// Convertendo objeto em um JSON (string)
const pessoa = {
    nome: 'Tony Stark',
    papel: 'Homem de Ferro',
};

console.log(JSON.stringify(pessoa));
