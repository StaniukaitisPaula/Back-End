/********************************************************************************
 * Objetivo: Trabalhos com Array
 * Data: 24/02/2023
 * Autor: Paula
 * Versão: 1.0
 *
 * ******************************************************************************/

// [] - significa que estamos manipulando um array de dados.
// {} - significa que estamos manipulando um formato JSON de dados.


const listaNomes = ['jose', 'maria', 'luiz', 'carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'WebCan']
const listaProdutosJSON = {};

/*
    Exemplo de um JSON com estrutura de array

     produtos ={
        [
            {nome : "Teclado", cor : "preto", quantidade : 50}
            {nome : "Monitor", cor : "Branco", quantidade : 30}
            {nome : "Mouse", cor : "preto", quantidade : 200}
        ]

     }
*/

// forma ERRADA DE MANUPILAR UM CONJUNTO DE DADOS
// const nome1 = 'jose'
// const nome2 = 'maria'
// const nome3 = 'luiz'
// const nome4= 'jose

const manipulandoElementos = function() {

    //Verifica o tipo de dados do elemento listaNomes
    //console.log(typeof(listaNomes))

    //Verifica o tipo de dados de um indice (item) doa array
    //console.log(typeof(listaNomes[1]))

    //Exibe todos os elementos do array
    //console.log(listaNomes)

    //Exibe apenas um elemento conforme o seu indice
    //console.log(listaNomes[1])

    console.log('O nome do usuario é ' + listaNomes[0])
    console.log(`O nome do usuario é  ${listaNomes[1]}`)

    //length - permite contar quantos elementos tem em um array
    console.log(`A qtde de itens do meu array é : ${listaNomes.length}`)

    //Percorrendo um array usando While
    let cont = 0 //start
    let qtdeItens = listaNomes.length //stop

    console.log('Exibindo dados do array usando while')
    while (cont < qtdeItens) {
        console.log(`Nome: ${listaNomes[cont]}`)
        cont += 1
    }

    //Percorrendo um array usando FOR
    console.log('Exibindo dados do array usando FOR')

    let qtdeNomes = listaNomes.length //stop

    for (let cont = 0; cont < qtdeNomes; cont++)
        console.log(`Nome: ${listaNomes[cont]}`)

    //Percorrendo um array usando FOREACH
    console.log('Exibindo dados do array usando FOREACH')

    //foreach é um metodo de um objeto array, que retorna uma funçao de call back
    listaNomes.forEach(function(nome) {

        console.log(`Nome: ${nome}`)
    });

    //adicionando elementos novos no ARRAY
    //PUSH - add elementos no final do array
    listaNomes.push('alexandre')
    listaNomes.push('marcos', 'lucas')
    console.log(listaNomes)

    //unshift - add elementos no inicio do array (ele muda a posicao de todos os proximos elemeentos)
    listaNomes.unshift('ana maria', 'leonardo')
    console.log(listaNomes)

    // removendo elementos do Array
    // Pop - remove o ultimo elemento do array
    listaNomes.pop()
    console.log(listaNomes)


    //shift  - remove o primeiro elemento do array (reorganiza todos os proximos elementos)
    listaNomes.shift()
    console.log(listaNomes)



}

const filtrandoElementos = function() {

    // indexof - permite buscar elementos dentro de uma array (se o retorno for -1 (nao encontrou o item ), se o retorno for maior ou igual a 0 (intem encotrado))
    //console.log(listaProdutos.indexOf('Fone'))

    if (listaProdutos.indexOf('Monitor') >= 0) {
        console.log('o item pesquisado foi encontrado')

    } else
        console.log('item nao achado')


    //slice - permite criar uma copia do array, podendo selecionar os itens
    //const novosProdutos = listaProdutos.slice(0,3)
    const novosProdutos = listaProdutos.slice()

    console.log(listaProdutos)
    console.log(novosProdutos)

}

const removerElementos = function(array, nomeItem) {
    //cria uma copia do array
    let novaLista = array.slice()

    let nome = nomeItem
    let indice = novaLista.indexOf(nome)
    let status

    //splice - permite remover um elemento do array, pelo indice ( não esquecer de passar a quantidade de itens a ser removido)
    if (indice >= 0) {
        novaLista.splice(indice, 1)
        status = true

    } else {
        status = false
    }

    if (status)
        return novaLista

    else
        return status
}

const listagemProdutos = function() {
    let listProdutosJSON = {}

    let listProdutos = [
        { nome: 'Teclado DELL', valor: '200', quantidade: '50' },
        { nome: 'Monitor DELL', valor: '1000', quantidade: '70' },
        { nome: 'Mouse DELL', valor: '100', quantidade: '350' },
    ]

    let listCores = ['Branco', 'Preto', 'Cinza']
    let listTipoTeclados = ['Mecanico', 'Semi-Mecanico', 'Membrana']
    let listTipoMonitor = ['LCD', 'full-HD', '4K', 'OLED']

    //ADD chaves (opções) no teclado
    listProdutos[0].cores = listCores
    listProdutos[0].tipo = listTipoTeclados

    //ADD chaves (opções) Monitor 
    listProdutos[1].cores = listCores
    listProdutos[1].tipo = listTipoMonitor

    //ADD chaves (opções) Mouse 
    listProdutos[2].cores = listCores

    //ÃDD uma chave produtos e coloca toda a estrutura dos produtos dentro dela 
    listProdutosJSON.produtos = listProdutos

    console.log(listProdutosJSON)

    // console.log('nome:' + listProdutosJSON.produtos[1].nome)
    // console.log('\n Valor:' + listProdutosJSON.produtos[1].valor)
    // console.log('\n Cor:' + listProdutosJSON.produtos[1].cores[1])


    //retorna todos os dados de produtos (1° Nivel do dados do json)
    listProdutosJSON.produtos.forEach(function(dadosProdutos) {
        console.log('Nome:' + dadosProdutos.nome)
        console.log('Valor:' + dadosProdutos.valor)
        console.log('qtde:' + dadosProdutos.quantidade)

        //validaçao para tratar quando nao existe cores de produto
        if (dadosProdutos.cores != undefined) {
            //retorna todas a cores existentes para cada produto
            dadosProdutos.cores.forEach(function(dadosCores) {
                console.log('-' + dadosCores)
            })
        }
        //validaçao para tratar quando nao existe tipos de produto
        if (dadosProdutos.tipo != undefined) {
            //retorna os tipos existentes para cada produto
            dadosProdutos.tipo.forEach(function(dadosTipos) {
                console.log('--' + dadosTipos)

            })
        }
    })


    //listaProdutosJSON.produtos = listaProdutos
    //listaProdutosJSON.clientes = listaNomes

    //console.log(listaProdutosJSON.produtos[1])
    //console.log(listaProdutosJSON.clientes[2])


}
listagemProdutos();

//console.log(removerElementos(listaProdutos, 'Monitor'))
//console.log(listaProdutos)