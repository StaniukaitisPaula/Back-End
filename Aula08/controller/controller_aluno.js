/********************************************************************************
 * Objetivo: Implementa a regra de negocio entre o app e a model
 * Data: 24/04/2023
 * Autor: Paula
 * Versão: 1.0
 * ******************************************************************************/


//Import do arquivo de acesso ao BD
var alunoDAO = require('../model/DAO/alunoDAO.js')


//funçao para receber os dados do app e enviar para a model para inserir novo item 
const inserirAluno = async function(dadosAluno) {

    //Import do arquivo global de configuraçoes do projeto
    let message = require('./modulo/config.js')

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length >= 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length >= 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length >= 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento >= 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email >= 250
    ) {

        return message.ERROR_REQUIRE_DATA;

    } else {
        //envia os dados para a model a seres inseriods no BD
        let status = await alunoDAO.insertAluno(dadosAluno)


        if (status)
            return message.CREATED_ITEM
        else
            return message.ERROR_INTERNAAL_SERVER
    }



}

//funçao para receber os dados do app e enviar para a model para atualizar o item existente 
const atualizarAluno = function(dadosAluno) {



}

//funçao para excluir um aluno filtrado pela id, sera encaminhado para a model
const deletarAluno = function(id) {




}

//funçao para retorna todos os itens da tabela, recebidos da model
const selecionarTodosOsAlunos = async function() {

    //solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno()

    //Criar um objeto do tipo JSON
    let dadosJson = {}

    //Valida se o BD teve registro
    if (dadosAluno) {
        //Adiciona o array de alunos e um JSON para retornar ao app
        dadosJson.alunos = dadosAluno
        return dadosJson
    } else
        return false
}

//funçao para buscar um item filtrado  pelo id, que sera encaminahdo para a model
const buscarIdAluno = function(id) {


}

module.exports = {
    selecionarTodosOsAlunos,
    inserirAluno
}