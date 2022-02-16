let nome = "Emily";
let sobrenome = "Silva";
let idade = 18;
const numCliente = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let bomPagador = true;

/* OPERADORES
Montante  = valorEmprestimo + juros
juros = valorEmprestimo * taxaDeJuros * numAnos
*/

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;
console.log(`Valor do montante: ${montante}`);

/*Estruturas Condicionais
Bom pagador ou não?
*/

if(bomPagador){
    console.log(`A cliente ${nome} é uma boa pagadora`);
}else {
    console.log(`A cliente ${nome} não é boa pagadora`);
}

/**
18-25 anos -> 9%
26-35 anos -> 8%
36-50 anos -> 7%
51 ou mais -> 6%
 */

if(idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
}else if (idade >=26 && idade <= 35){
    taxaDeJuros = 0.08;
}else if (idade >=36 && idade <= 50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}
console.log(taxaDeJuros);


