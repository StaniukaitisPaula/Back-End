/*
 * objetivo: Arquivo de funçao para realizar calculos matematicos
 * DATA:03/02/2023
 * AUTOR: Paula
 * versao: 1.0
 */

//Realizar calculo matematico das 4 operaçoes (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase();

    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;
    } else if (operacao == 'DIVIDIR') {
        //validaçao da divisao 0
        if (valor2 == 0) {
            console.log('ERRO: não é possivel fazer uma divisão por 0.');
            entradaDados.close();

        } else
            resultado = valor1 / valor2;

    } else {
        console.log('ERRO: A operação informada não é valida. confira a sua entrada.')
        entradaDados.close();
    }
    //validacao para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return false;

}

//exporta uma funçao para ser utilizada em outro arquivo 
module.exports = {
    calcular
}