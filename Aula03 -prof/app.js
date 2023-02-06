/*
 * objetivo: Realizar calculos matematicos(SOMA, SUBTRAÇAO, MULTIPLICACAO E DIVISAO)
 * DATA:03/02/2023
 * AUTOR: paula
 * versao: 1.0
 */

 //Import da biblioteca da calculadora (criado por nos)
var matematica = require('./modulo/calculadora.js')

//Import da biblioteca para entrada de dados
var readline = require('readline')

//criar um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('valor1: \n', function(numero1) {
    //replace -permite trocar um conteudo da string por outro
    let valor1 = numero1.replace(',', '.');

    entradaDados.question('valor2: \n', function(numero2) {

        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha uma operação: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: \n', function(tipoCalculo) {

            //toUpperCase - converte uma string para MAIUSCULO
            //toLowerrCase - converte uma string para minusculo
            let operacao = tipoCalculo.toUpperCase();

            let resultado;

            //Validacao de entrada de dados vazio
            //se usar o typeof, precisa garantir que o tipo de dados nao é generico (string)

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possivel calcular sem preencheer todos os dados.')
                entradaDados.close();

            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possivel calcular sem a entrada de valores numéricos.')
                entradaDados.close(); // fecha o objeto de entrada de dados (encerra o programa)
            } else {

                //chama a funçao para calcular, encaminhando os dados para o calculo
                resultado = matematica.calcular(valor1, valor2, operacao);

                //validar se o retorno da funcao é verdadeira ou falso (se for falso, encerra o programa)
                //if (resultado == false && typeof(resultado) == 'boolean') ou
                if(resultado === false )
                 entradaDados.close();

               else 
                    console.log(resultado);
                


            }
        })
    })

})