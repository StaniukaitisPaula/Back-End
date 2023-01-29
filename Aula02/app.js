/********************************************************************************
 * Objetivo: realizar a media escolar de 4 notas dos alunos
 * Data: 27/01/2023
 * Autor: Paula
 * Versão: 2.5.1.23
 * 
 * ******************************************************************************/

console.log('Sistema de calculo de Média Escolar')

//Import da biblioteca para entrada de dados
var readline = require('readline')

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    })
    /*
    * var - toda variavel criada como var tem por objetivo ser um espaço global,
            ou seja, ela podera ser utilixada em diversos pontos da programação.

    * let - toda variavel criada como let, tem por objetivo ser um escopo local,
            ou seja, será utilizada somente naquela função        

    * CONST - tem por objetivo criar um espaço em memória para armazenar dados
              que não sofrem mudança.        

    */



//Função  de CallBack para retornar o nome do aluno 
entradaDados.question('Digite o nome do aluno: \n', function(nome) {
    //Variavel local para receber o nome do aluno, que 
    //vai ser retornado pela função
    let nomeAluno = nome;

    //Função de CallBack para entrada da Nota1
    entradaDados.question('Digite a nota1: \n', function(nota1) {

        let primeiraNota = nota1;

        //Função de CallBack para entrada da Nota2
        entradaDados.question('Digite a nota2: \n', function(nota2) {

            let segundaNota = nota2;

            //Função de CallBack para entrada da Nota3
            entradaDados.question('Digite a nota3: \n', function(nota3) {

                let terceiraNota = nota3;

                //Função de CallBack para entrada da Nota4
                entradaDados.question('Digite a nota4: \n', function(nota4) {

                    let quartaNota = nota4;
                    let media = 0;

                    /**
                     * Conversão de dados String para Numero
                     * Number. ParseInt() ou parseInt() - Converte para Inteiro
                     * Number.ParseFloat() ou parseFloat()- converte para real 
                     * Number() - converte para int ou float, conforma aentrada de dado
                     * 
                     * 
                     * 
                     * Operadores de comparação
                     *  == (Verificar a igualdade de conteudo)
                     *  != (Verificar a diferença de conteudo)
                     *  <  (Verificar o menor valor)
                     *  >  (Verificar o maior valor)
                     *  <= (Verificar o menor ou igual valor)
                     *  >= (Verificar o maior ou igual valor)
                     * === (Verificar a igualdade de controle e validar a tipages de dados)
                     * EX: 0 ==   0  y
                     *     0 ==  '0' y
                     *     0 === '0' y
                     *     0 ==! 0.0 y
                     * 
                     * 
                     * 
                     * Operadores Lógicos
                     *    OU    ||   (pique)   OR
                     *     E    &&             AND 
                     * Negação   !             NOT  
                     * 
                     */


                    //Validação para tratar entradas vazias 
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('ERRO: É necessário preencher todos os valores')

                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('ERRO: O texto digitado não é um número')

                    } else if (primeiraNota < 0 || primeiraNota > 10 && segundaNota < 0 || segundaNota > 10 && terceiraNota < 0 || terceiraNota > 10 && quartaNota < 0 || quartaNota > 10) {
                        console.log('ERRO: A nota deve ser entre 0 - 10')
z
                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4

                        console.log('A média é: ', media)
                        if (media >= 7) {

                            console.log('APROVADO!')

                        } else {
                            console.log('REPROVADO!')
                        }
                    }
                })
            })

        })
    })
})