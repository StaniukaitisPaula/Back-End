//Import das dependências para criar a API

//Responsável pelas requisições
const express = require('express');
//Responsável pelas permissões da requisições
const cors = require('cors');
//Reposável pela manipulação do body da requisição
const bodyParser = require('body-parser');
//Import do arquivo de funções para listar os estados e as cidades
const contatos = require('./modulo/contatos.js')

//Cria um objeto com as informações da classe express
const app = express();

app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API
    //* - significa que a API será publica 
    //IP - se colocar o IP, a API sosmente responderá para aquela máquina
    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (métodos) poderão fazer rquisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors());

    next();
});

app.get("/contato/:number", cors(), async function(request, response, next) {
    let numero = request.params.number;
    let statusCode;
    let dadosContato = {};

    //Tratamento para validar os valores encaminhados no parametro
    if (numero == '' || numero == undefined || numero.length != 11) {
        statusCode = 400;
        dadosContato.message = "Não é possível processar a requisição pois o número não foi infomado ou não atende a quantidade de caracteres (11 dígitos)"
    } else {
        //Chama a função que filtra o estado pela sigla
        let contato = contatos.listarContatos(numero);

        //Valida se houve retorno válido da função
        if (contato) {
            statusCode = 200; //Estado encontrado
            dadosContato = contato;
        } else {
            statusCode = 404; //estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosContato);
});
//Permite carregar os endPoints criados e aguardar as requisições 
//pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('servidor aguardando requisições na porta 8080')
});