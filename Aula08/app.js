/********************************************************************************
 * Objetivo: API pra interagir com banco de dados (GET, POST, DELTE, PUT)
 * Data: 14/04/2023
 * Autor: Paula
 * Versão: 1.0
 * ******************************************************************************/
/********************************************************************************
 * para realizar a conexao com o banco de dados iremos utilizar o PRISMA
 * npm install prisma --save
 * npx prisma
 * npx prisma init
 * npm install @prisma/client
 * ******************************************************************************/

//Import das dependências para criar a API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');

//criar o objt app utilizando o clas
const app = express();


app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //define as permissoes para o cors
    app.use(cors());

    //continua para a leitura dos EndPoints
    next();
});

// CRUD (CREATE, READ, UPDATE E DELETE)

//EndPoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

    //Import da controller do aluno
    let controllerAluno = require('./controller/controller_aluno.js')

    //solicita a controller que retorna todos os aluns do BD
    let dados = await controllerAluno.selecionarTodosOsAlunos()

    //valida se existe registros para retornar na requisiçao
    if (dados) {
        response.json(dados)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }

});

//EndPoint: retorna todos os dados de alunos pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {


});

//EndPoint: inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), async function(request, response) {


});

//EndPoint: atualiza um aluno pelo Id
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response) {


});

//EndPoint: excluir um aluno pelo Id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {


});

app.listen(8080, function() {
    console.log('servidor aguardando requisiçoes na porta 8080!')
})