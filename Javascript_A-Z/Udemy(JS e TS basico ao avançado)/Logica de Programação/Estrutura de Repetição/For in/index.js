const frutas = ['Pera', 'Maça', 'Uva'];

for(let i in frutas){
    console.log(frutas[i])
}
console.log()
const pessoa = {
    nome: 'Emily',
    sobrenome: 'Silva',
    idade: 18
};

for (let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`)
}