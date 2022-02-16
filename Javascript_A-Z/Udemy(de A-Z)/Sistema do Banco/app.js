let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let bomPagador;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, bomPagadorCliente, taxaDeJuros) {
    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    bomPagador = bomPagadorCliente;
    taxaDeJuros = defineTaxa(idadeCliente)
}

function defineTaxa(idadeCliente) {
    if (idade >= 18 && idade <= 25) {
        taxaDeJuros = 0.09;
    } else if (idade >= 26 && idade <= 35) {
        taxaDeJuros = 0.08;
    } else if (idade >= 36 && idade <= 50) {
        taxaDeJuros = 0.07;
    } else {
        taxaDeJuros = 0.06;
    }

}

cadastraCliente("Emily", "Silva", 18, 150000, 2, true)
console.log(nome);
console.log(sobrenome);
console.log(taxaDeJuros);

/* OPERADORES
Montante  = valorEmprestimo + juros
juros = valorEmprestimo * taxaDeJuros * numAnos

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;
console.log(`Valor do montante: ${montante}`);
*/

/*Estruturas Condicionais
Bom pagador ou não?
*/
/*
if (bomPagador) {
    console.log(`A cliente ${nome} é uma boa pagadora`);
} else {
    console.log(`A cliente ${nome} não é boa pagadora`);
}
*/
/**
18-25 anos -> 9%
26-35 anos -> 8%
36-50 anos -> 7%
51 ou mais -> 6%
 */

/*
for (let cont = 0; cont < 3; cont++){
    valorEmprestimo = prompt('Digite o valor do Emprestimo');
    numAnos = parseInt(prompt("Digite o numero de anos"));
}
*/

//While
/*
valorEmprestimo = 1;
while(valorEmprestimo != 0){
   valorEmprestimo = parseInt(prompt("Insira o valor do emprestimo"));
   numAnos  = parseInt(prompt("Insira o numero de anos"));
   juros = valorEmprestimo * taxaDeJuros * numAnos;
   montante = valorEmprestimo + juros;
   console.log(montante)
}
*/
/*
do {
    valorEmprestimo = parseInt(prompt("Insira o valor do emprestimo"));
    if(valorEmprestimo === 0){
        break;
    }
    numAnos  = parseInt(prompt("Insira o numero de anos"));
    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;
    console.log(montante)
}while (valorEmprestimo != 0);
*/