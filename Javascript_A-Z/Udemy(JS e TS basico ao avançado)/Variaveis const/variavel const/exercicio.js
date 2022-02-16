const nome = 'Pedro Silva';
const sobrenome = 'Gonçalves';
const idade = 24;
const peso = 70;
const alturaEmM = 1.68;
let IMC;
let anoNascimento;

IMC = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;


console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + "kg")
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}`)
