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

//Impot do arquivo de fuçoes para listar estados e cidades
const estadosCidades = require('./estados_cidades.js')

//cria um objeto com as informaçoes da classe express
const app = express()

//Define  a permissoes no header da API
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

    //chama a funçao que retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados()

    //tratamento para validar se a funçao realizou o processamento
    if (listaDeEstados) {
        //retorna o Json e o status code
        response.json(listaDeEstados)
        response.status(200)

    } else {
        response.status(500)
    }


})

//endPoints -> lista as caracteristicas do estado pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next) {
        //:uf - é uma variavel que séra utilizada para passagens de valores. na URL da requisiçao

        //recebe  o valor de variavel uf, que sera encaminhada na URL da requisiçao
        let siglaEstado = request.params.uf;
        let statusCode
        let dadosEstado = {}

        //Tratamento para validar os valores encaminhados no parametro
        if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {

            statusCode = 400
            dadosEstado.message = "Não é possivel processar a requisiçao pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 Digitos)";

        } else {
            //chama a funçao que flitra o estado pela sigla
            let estado = estadosCidades.getDadosEstado(siglaEstado)

            //validar se houve retorno valido da funçao
            if (estado) {
                statusCode = 200 //Estado encontrado
                dadosEstado = estado

            } else {
                statusCode = 404 // Estado nao encontrado
            }
        }
        response.status(statusCode)
        response.json(dadosEstado)
    })
    //endPoints para LISTAR CAPITAL ESTADO
app.get('/estado/sigla/capital/:uf', cors(), async function(request, response, next) {

        let siglaCapital = request.params.uf;
        let statusCode
        let dadosEstado = {}

        //Tratamento para validar os valores encaminhados no parametro
        if (siglaCapital == '' || siglaCapital == undefined || siglaCapital.length != 2 || !isNaN(siglaCapital)) {

            statusCode = 400
            dadosEstado.message = "Não é possivel processar a requisiçao pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 Digitos)";

        } else {
            //chama a funçao que flitra o estado pela sigla
            let capital = estadosCidades.getCapitalEstado(siglaCapital)

            //validar se houve retorno valido da funçao
            if (capital) {
                statusCode = 200 //Estado encontrado
                dadosEstado = capital

            } else {
                statusCode = 404 // Estado nao encontrado
            }
        }
        response.status(statusCode)
        response.json(dadosEstado)
    })
    //endPoints para LISTAR ESTADOS REGIAO
app.get('/estado/sigla/regiao/:uf', cors(), async function(request, response, next) {

        let siglaRegiao = request.params.uf;
        let statusCode
        let dadosEstado = {}

        //Tratamento para validar os valores encaminhados no parametro
        if (siglaRegiao == '' || siglaRegiao == undefined || !isNaN(siglaRegiao)) {

            statusCode = 400
            dadosEstado.message = "Não é possivel processar a requisiçao pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 Digitos)";

        } else {
            let regiao = estadosCidades.getEstadosRegiao(siglaRegiao)


            if (regiao) {
                statusCode = 200 //Estado encontrado
                dadosEstado = regiao

            } else {
                statusCode = 404 // Estado nao encontrado
            }
        }
        response.status(statusCode)
        response.json(dadosEstado)
    })
    //endPoints para CAPITAL PAIS
app.get('/estados/pais/capital/', cors(), async function(request, response, next) {

        //chama a funçao que retorna os estados
        let listaDeCapitais = estadosCidades.getCapitalPais()

        //tratamento para validar se a funçao realizou o processamento
        if (listaDeCapitais) {
            //retorna o Json e o status code
            response.json(listaDeCapitais)
            response.status(200)

        } else {
            response.status(500)
        }
    })
    //endPoints para LISTAR CIDADES
app.get('/estados/:uf', cors(), async function(request, response, next) {

    let siglaCidades = request.params.uf;
    let statusCode
    let dadosEstado = {}

    //Tratamento para validar os valores encaminhados no parametro
    if (siglaCidades == '' || siglaCidades == undefined || !isNaN(siglaCidades)) {

        statusCode = 400
        dadosEstado.message = "Não é possivel processar a requisiçao pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 Digitos)";

    } else {
        let cidade = estadosCidades.getCidades(siglaCidades)


        if (cidade) {
            statusCode = 200 //Estado encontrado
            dadosEstado = cidade

        } else {
            statusCode = 404 // Estado nao encontrado
        }
    }
    response.status(statusCode)
    response.json(dadosEstado)
})

//permite carregar os endPoints e aguardar as requisiçoes pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('servidor aguardando requisiçoes na porta 8080')
});