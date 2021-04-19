# ioasys-Camp-2021.1
Aqui constará todos os projetos realizados no ioasys Camp, edição 2021.

# teste-backend
Infelizmente, nao consegui desenvolver o projeto por precisar focar em outras tarefas...
Mas alterei os dados do BD para o Sequelize, incluindo a chave JWT pensando no tópico de seguranca que seria avaliado e precisei fazer algumas modificacoes para rodar a aplicacao inicialmente.

- Precisei utilizar o package "cross-env" para validar o "setting" do env ao rodar a API no Windows, mais informacoes sobre estao no atributo "comment" do package.json; para a instalacao do pacote, utilizei o comando: `npm install --save-dev cross-env`

- E logo apos, add a keyword "cross-env" antes do comando nos scripts do package.json.

Isso resolveu tanto o problema do npm nao rodar a API quanto o proprio "setting" de qual de env estaria sendo utilizado.
