/********************************************************************************
 * Objetivo: Calculadora-
 * Data: 30/01/2023
 * Autor: Paula
 * Versão: 2.5.1.23
 * 
 * ******************************************************************************/
console.log('-------- Calculadora --------')
console.log('+ = Somar')
console.log('- = Subtrair')
console.log('* = Multiplicar')
console.log('/ = Dividir')
console.log('-----------------------------')



//Import da biblioteca para entrada de dados
var readline = require('readline')

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

//FUNÇÃO calllback
entradaDados.question('Digite o primeiro Número: \n', function(numero1) {

    //Variavel local para receber o numero, que 
    //vai ser retornado pela função
    let numeroUm = Number(numero1);

    //funçao Callback Operacao matematica 
    entradaDados.question('Digite a Operação que deseja utilizar: \n', function(operacoes) {

        let operacaoMatematica = operacoes;

        //funcao callback numero2    
        entradaDados.question('Digite o segundo número: \n', function(numero2) {

            let numeroDois = Number(numero2);

            let calculo = '';

            let CalculoSomar = numeroUm + numeroDois;
            let CalculoSubtrair = numeroUm - numeroDois;
            let CalculoMutiplicar = numeroUm * numeroDois;
            let CalculoDivisor = numeroUm / numeroDois;

            if (operacaoMatematica == '+') {
                console.log('Resultado:', CalculoSomar)
            } else if (operacaoMatematica == '-') {
                console.log('Resultado:', CalculoSubtrair)
            } else if (operacaoMatematica == '*') {
                console.log('Resultado:', CalculoMutiplicar)
            } else if (operacaoMatematica == '/') {
                console.log('Resultado:', CalculoDivisor)
            } else if (numeroUm == '' || operacaoMatematica == '' || numeroDois == '') {
                console.log('ERRO: É necessario preencher todos os Espaços')
            } else if (isNaN(numeroUm) || isNaN(numeroDois)) {
                console.log('ERRO: O texto digitado não é um número')

            } else if (operacaoMatematica != '+' || operacaoMatematica != '-' || operacaoMatematica != '*' || operacaoMatematica != '/') {
                console.log('ERRO: essa operação esta indisponivel')


            } else {

                console.log(calculo)
            }

        })
    })
})