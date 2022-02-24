const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Silva',
    idade: 25,
    endereco: {
        rua: 'Rua Ator Paulo Gustavo',
        numero: 296
    }
};

//atribuição via desestruturação
// const { nome, sobrenome, idade} = pessoa;
// console.log(nome, sobrenome, idade);
// const {
//     endereco: { rua: r, numero},
//     endereco
// } = pessoa;
// console.log(r, numero, endereco);
const { nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);