# Configuracao do TypeScript

1. Inicializar um projeto Node.js
	`npm init`
	
2. Instalar o TypeScript
	Instalacao global `npm install -g typescript` // nao recomendado por conta de versoes)
	Instalacao local  `npm install typescript -D` // requer package.json; -D = instalar como dev-dependencies, nao ira para deploy
	
3. Utlizar o TypeScript instalado para transpilar/compilar codigo para JS
	`npx tsc index.ts`  // transpila arquivo individualmente
	`npx tsc index.ts --watch`  // --watch ira transpilar automaticamente quando ocorrerem mudancas
	`npx tsc --init`  // inicializa automaticamente configuracoes do typescript; criar o arquivo tsconfig.json
	`npx tsc --watch` // apos rodar o --init --watch ira compilar todas as mudancas ocorridas
	
4. Principais configuracoes do tsconfig.json
	"target": "es6" || "es2016" // determina a versao final do JS compilado
	"strict": true  // habilita todas as checagens de tipagem; pode ser desabilitado para configurar checagens especificas abaixo
	"noEmitOnError": true  // nao compilar o arquivo se encontrar um erro de tipagem
	"outDir": "./"  // diretorio destino dos arquivos compilados; comumente usa-se "./dist"