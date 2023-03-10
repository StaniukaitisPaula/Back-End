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