/*************************************************************
 * Objetivo: Criar uma API para manipulação de dados de 
 * estados e cidades
 * Data: 10/03/2023
 * Autor: paula
 * Versão 1.0
 *************************************************************/

/*************************************************************
 * Express - dependência do Node, que permite a integração entre
 * o protocolo http com o código
 *      npm install express --save
 * Cors- Gerenciador de permissões para o protocolo HTTP
 *      npm install cors --save
 * Body-parser - É uma dependência que permite manipular
 * dados enviados pelo body da requisição
 *      npm istall body-parser --save
 *************************************************************/

//import das dependencias para criar a API

//Responsavel pelas requisiçoes
const express = require('express')
    //Responsavel pelas permissoes das requisiçoes
const cors = require('cors')
    //responsavel pela manipulaçao do body da requisiçao
const bodyParser = require('body-parser')


//cria um objeto com as informaçoes da classe express
const app = express()

//
app.use((request, response, next) => {
    //permite gerenciar a origin das requisiçoes da API 
    // * - significa que a API sera publica
    // IP - se colocar o IP, a API somente respondera para aquela maquina
    response.header('Access-Control-Allow-Origin', '*')

    //PERMITE GERENCIAR QUAIS VERBOS (METODOS) PODERAO FAZER REQUISIÇOES
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //ATIVA NO CORS DAS REQUISIÇOES AS PERMISSOES ESTABELECIDAS
    app.use(cors())

    next();
})

//endPoints 

//endPoints para LISTAR os ESTADOS
app.get('/estados', cors(), async function(request, response, next) {

    const estadosCidades = require('./estados_cidades.js')
    let listaDeEstados = estadosCidades.getListaDeEstados()

    response.json(listaDeEstados)
    response.status(200)

})

//permite carregar os endPoints e aguardar as requisiçoes pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('servidor aguardando requisiçoes na porta 8080')
});