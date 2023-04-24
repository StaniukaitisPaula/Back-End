/********************************************************************************
 * Objetivo: Implementa a regra de negocio entre o app e a model
 * Data: 24/04/2023
 * Autor: Paula
 * Versão: 1.0
 * ******************************************************************************/

//funçao para receber os dados do app e enviar para a model para inserir novo item 
const inserirAluno = function(dadosAluno) {



}

//funçao para receber os dados do app e enviar para a model para atualizar o item existente 
const atualizarAluno = function(dadosAluno) {



}

//funçao para excluir um aluno filtrado pela id, sera encaminhado para a model
const deletarAluno = function(id) {




}

//funçao para retorna todos os itens da tabela, recebidos da model
const selecionarTodosOsAlunos = async function() {

    //Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

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
    selecionarTodosOsAlunos
}