//Comnetario em linha

/*
 comentario 
    em
  Bloco 
*/

//Permite escrever uma mensagemno terminal

console.log('Testando o node.js');

//Import da Biblioteca que faz entrada de dados pelo Usúario
var readline = require('readline')

//Criamos um objeto entradaDados  com as referencias do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//O que é uma funçao de call back - é uma funçao que qdo chamada ela
//retorna o seu conteudo em uma unica instruçao, ou seja,em apenas
//um passo na programaçao)

//Criamos uma funçao de call back para receber os dados digitado pelo usuario
//(O objeto entradaDados aguarda a digitaçao do usuario, apos a
//digitaçao do conteudo é acionado um call back para encaminhar os dados
//para o console.log. Esse conteudo foi encaminhado atraves do parametro 
//dados da função)
entradaDados.question("Digite seu nome: \n", function(dados) {

    console.log('Bem Vindo,' + dados + ' ao servidor node.JS.')
});