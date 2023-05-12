/********************************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis, constantes e funçoes globais do projeto
 * DATA: 28/04/20233
 * AUTOR: Paula
 * versao: 1.0
 * ******************************************************************************/

const ERROR_REQUIRE_DATA = { status: 400, message: 'Existem dados obrigatorios que não forma preenchido' }
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor no banco de dados.' }
const ERROR_REQUIRE_ID = { status: 400, message: 'O atributo ID é obrigatório na requisição' }
const ERROR_CONTENT_TYPE = { status: 415, message: 'O tipo de media Content Type da solicitaçao nao é compativel com o servidor, application/json' }
const ERROR_NOT_FOUN = { status: 404, message: 'Nenhum registro encontrado na requisição.' }

/*****************************    CONSTANTES DE SUCESSO  *******************************/
const CREATED_ITEM = { status: 201, message: 'Registro criado com sucesso!' }
const UPDATED_ITEM = { status: 200, message: 'Registro atualizado com sucesso!' }
const DELETE_ITEM = { status: 200, message: 'Registro deletado  com sucesso!' }



module.exports = {
    ERROR_REQUIRE_DATA,
 ERROR_INTERNAL_SERVER,
    CREATED_ITEM,
    ERROR_REQUIRE_ID,
    UPDATED_ITEM ,
    DELETE_ITEM,
    ERROR_CONTENT_TYPE,
    ERROR_NOT_FOUN
}