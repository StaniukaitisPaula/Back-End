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

//criando uma const para realizar o processo de padronizaçao de dados que vao chegar mo body da requisiçao
const bodyJSON = bodyParser.json()

//Import da controller do aluno
var controllerAluno = require('./controller/controller_aluno.js')

//EndPoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {


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
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response) {

    //recebe os dados encaminhados no body da requisiçao
    let dadosBody = request.body
        //console.log(dadosBody)

    //envia od dados para a controller
    let resultIsertDados = await controllerAluno.inserirAluno(dadosBody)
        //console.log(resultIsertDados)

    //retorna o status code e a message
    response.status(resultIsertDados.status)
    response.json(resultIsertDados)

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