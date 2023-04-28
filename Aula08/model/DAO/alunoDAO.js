/********************************************************************************
 * Objetivo: Realizar a interaçao do aluno com o Bnaco de dados
 * Data: 14/04/2023
 * Autor: Paula
 * Versão: 1.0
 * ******************************************************************************/

//Import da biblioteca do prisma client (responsavel por manipular dados no BD)
var { PrismaClient } = require('@prisma/client')

//Instacia da classe do PrimasClient 
var prisma = new PrismaClient();


//inserir um novo registro no banco de dados
const insertAluno = async function(dadosAluno) {

    //script SQL pra inserir os dados no BD
    let sql = `insert into tbl_aluno (nome, cpf, rg, data_nascimento, email)
   values(
    '${dadosAluno.nome}',
   ' ${dadosAluno.cpf}',
    '${dadosAluno.rg}',
    '${dadosAluno.data_nascimento}',
   ' ${dadosAluno.email}'
    )`

    // console.log(sql);

    //executa o script SQL no BD e recebemos o retorno se deu certo ou nao
    let result = await prisma.$executeRawUnsafe(sql)

    //console.log(result)
    if (result)
        return true
    else
        return false;

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

    //validar se o Bd retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno
    else
        return false

}

//retorna um registro filtrado do banco de dados
const selectByIdAluno = function(id) {

}

module.exports = {
    selectAllAluno,
    insertAluno
}