/********************************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis, constantes e funçoes globais do projeto
 * DATA: 28/04/20233
 * AUTOR: Paula
 * versao: 1.0
 * ******************************************************************************/

const ERROR_REQUIRE_DATA = { status: 400, message: 'Existem dados obrigatorios que não forma preenchido' }
const ERROR_INTERNAAL_SERVER = { status: 500, message: 'Erro interno no servidor no banco de dados.' }

/*****************************    CONSTANTES DE SUCESSO  *******************************/
const CREATED_ITEM = { status: 201, message: 'Registro criado co sucesso!' }

module.exports = {
    ERROR_REQUIRE_DATA,
    ERROR_INTERNAAL_SERVER,
    CREATED_ITEM
}