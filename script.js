//Prática Guiada I
/*
const estudante = {
    nome: 'Henrique',
    sobrenome: 'Horbilon',
    numeroMatricula: 152023,
    notaSemestre: [7, 8.9, 10, 9]
}

estudante.idade = 32
estudante.modulo = 3

console.log(estudante)

const nomeEstudante = estudante.nome
const notaEstudante = estudante.notaSemestre[2]

console.log(nomeEstudante)
console.log(notaEstudante)

//Prática Guiada II

const copyEstudante = {
    ...estudante
}

// copiando e já alterando as propriedades

const copyEstudante2 = {
    ...estudante,
    nome: 'Henriqueeee',
    idade: 199,
    modulo: 4,
    notaSemestre: [...estudante.notaSemestre, 9]

}
console.log(copyEstudante2)
*/

// Exercicio de fixação

const carrinho = {
    nomePessoa: 'Henrique',
    formaPagamento: 'Dinheiro',
    endereco: 'Rua t29 n. 686'

}

carrinho.compras = [{
    nomeProduto: 'Macarrão',
    precoProduto: 12.99,
    qtdeUnidades: 3
},
{
    nomeProduto: 'Carne',
    precoProduto: 59.90,
    qtdeUnidades: 1
},
{
    nomeProduto: 'Arroz',
    precoProduto: 10.90,
    qtdeUnidades: 2
}]

const qtdeCompras = carrinho.compras.length
console.log('Quantidade de produtos no carrinho é:',qtdeCompras)

const carrinhoPresente = {
    ...carrinho,
    nomePessoa: 'Mamiiiis',
    formaPagamento: 'Cartão presente'
}

console.log(carrinho)
console.log(carrinhoPresente)
