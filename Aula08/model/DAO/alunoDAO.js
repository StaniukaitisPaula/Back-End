/********************************************************************************
 * Objetivo: Realizar a interaçao do aluno com o Bnaco de dados
 * Data: 14/04/2023
 * Autor: Paula
 * Versão: 1.0
 * ******************************************************************************/

//inserir um novo registro no banco de dados
const insertAluno = function(dadosAluno) {

}

//atualizar um registro no banco de dados
const updateAluno = function(dadosAluno) {

}

//excluir um registro no banco de dados
const deleteAluno = function(id) {

}

//retorna todos os registros no banco de dados
const selectAllAluno = async function() {
    //Import da biblioteca do prisma client (responsavel por manipular dados no BD)
    const { PrismaClient } = require('@prisma/client')

    //Instacia da classe do PrimasClient 
    let prisma = new PrismaClient();

    //variavel com o scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno'

    //Executa no BD o scriptSQL
    //$queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
    //$queryRaw() é utiltilizado quando passar o script direto no metodo. (EX: $queryRaw(select * from tbl_aluno)
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0)
        return rsAluno
    else
        return false

}

//retorna um registro filtrado do banco de dados
const selectByIdAluno = function(id) {

}

module.exports = {
    selectAllAluno
}