/*
 * objetivo: Arquivo de funçao para realizar calculos matematicos
 * DATA:03/02/2023
 * AUTOR: Paula
 * versao: 1.0
 */

//Realizar calculo matematico das 4 operaçoes (SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR)
//forma 1 de se criar uma funçao em JS
//function calcular(numero1, numero2, tipoCalculo) {

    // let valor1 = Number(numero1)
    // let valor2 = Number(numero2)
    // let operacao = tipoCalculo.toUpperCase();

    // let resultado;
    // let status = true; //variavel booleana para identificar o status do calculo

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2;
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;
    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2;
    // } else if (operacao == 'DIVIDIR') {
    //     //validaçao da divisao 0
    //     if (valor2 == 0) {
    //         console.log('ERRO: não é possivel fazer uma divisão por 0.');
    //         //entradaDados.close();
    //         status = false;

    //     } else
    //         resultado = valor1 / valor2;

    // } else {
    //     console.log('ERRO: A operação informada não é valida. confira a sua entrada.')
    //     //entradaDados.close(); //fecha o objeto de entrada de dados (encerra o programa)
    //     status = false;
    // }

//     switch (operacao)
//     {
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;

//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;

//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;

//         case 'DIVIDIR':
//             //validaçao da divisao 0
//         if (valor2 == 0) {
//             console.log('ERRO: não é possivel fazer uma divisão por 0.');
//             //entradaDados.close();
//             status = false;

//         } else
//             resultado = valor1 / valor2;

//             break;


//         default: // similar ao else final de uma estrutura baseada em IF / else 
//                 //(se nenhuma das opcoes for verdadeira, sempre passara pelo default)
//             console.log('ERRO: A operação informada não é valida. confira a sua entrada.')
//           //entradaDados.close(); //fecha o objeto de entrada de dados (encerra o programa)
//        status = false;

//     }


//     //validacao para tratar a variavel resultado quando nenhum calculo é realizado
//     if (resultado != undefined)
//         return resultado;
//     else
//         return status;

 //}

//forma 2 de se criar uma funçao em JS
const calcular = function(numero1, numero2, tipoCalculo){

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase();

    let resultado;
    let status = true; //variavel booleana para identificar o status do calculo

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2;
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;
    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2;
    // } else if (operacao == 'DIVIDIR') {
    //     //validaçao da divisao 0
    //     if (valor2 == 0) {
    //         console.log('ERRO: não é possivel fazer uma divisão por 0.');
    //         //entradaDados.close();
    //         status = false;

    //     } else
    //         resultado = valor1 / valor2;

    // } else {
    //     console.log('ERRO: A operação informada não é valida. confira a sua entrada.')
    //     //entradaDados.close(); //fecha o objeto de entrada de dados (encerra o programa)
    //     status = false;
    // }

    switch (operacao)
    {
        case 'SOMAR':
            resultado =  somar (valor1 , valor2)
            break;

        case 'SUBTRAIR':
            resultado =  subtrair (valor1 , valor2)
            break;

        case 'MULTIPLICAR':
            resultado =  multiplicar (valor1 , valor2)
            break;

        case 'DIVIDIR':
            //validaçao da divisao 0
        if (valor2 == 0) {
            console.log('ERRO: não é possivel fazer uma divisão por 0.');
            //entradaDados.close();
            status = false;

        } else
            resultado =  dividir (valor1 , valor2)

            break;


        default: // similar ao else final de uma estrutura baseada em IF / else 
                //(se nenhuma das opcoes for verdadeira, sempre passara pelo default)
            console.log('ERRO: A operação informada não é valida. confira a sua entrada.')
          //entradaDados.close(); //fecha o objeto de entrada de dados (encerra o programa)
       status = false;

    }


    //validacao para tratar a variavel resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return status;

}

//todas essas funcoes 
//forma 3 de se criar uma funçao em JS (modelo arrow function)
const somae       =  (valor1, valor2) => Number(valor1) + Number(valor2)
const subtrair    =  (valor1, valor2) => Number(valor1) - Number(valor2)
const multiplicar =  (valor1, valor2) => Number(valor1) * Number(valor2)
const dividir     =  (valor1, valor2) => Number(valor1) / Number(valor2)

//exporta uma funçao para ser utilizada em outro arquivo 
module.exports = {
    calcular
}