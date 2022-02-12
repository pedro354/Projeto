// AULA DE ESTRUTURA CONDICIONAIS FOR | WHILE | DO WHILE | CONTINUE | BREAK
let nome = "Thaina";
let sobrenome = "Silva";
let idade = 23;
let valorEmprestimo;
let taxaJuros;
let numAnos;
let juros;
let montante;
/*
    let juros = valorEmprestimo * taxaJuros * numAnos;
    let montante =  valorEmprestimo + juros;
*/
if (idade >= 18 && idade <= 25){
    taxaJuros = 0.09
}else if (idade > 26 && idade <= 35){
    taxaJuros = 0.08
}else if (idade > 36 && idade <= 50){
    taxaJuros = 0.07
}else {
    taxaJuros = 0.06
}
//FOR
for(let cont = 0; cont < 3; cont++){
    valorEmprestimo = parseInt(prompt("Digite o valor do emprestimo"));
    numAnos = parseInt(prompt("Digite o numero de anos"));
    juros = valorEmprestimo * taxaJuros * numAnos;
    montante =  valorEmprestimo + juros;
    console.log(montante);
}
//WHILE
valorEmprestimo = 1;
while(valorEmprestimo != 0){
    valorEmprestimo = parseInt(prompt("insira o valor do emprestimo"));
    numAnos = parseInt(prompt("insira o numero de anos"));
    let juros = valorEmprestimo * taxaJuros * numAnos;
    let montante =  valorEmprestimo + juros;
    console.log(montante);

}
//DO WHILE
do {
    valorEmprestimo = parseInt(prompt("insira o valor do emprestimo"));
    numAnos = parseInt(prompt("insira o numero de anos"));
    let juros = valorEmprestimo * taxaJuros * numAnos;
    let montante =  valorEmprestimo + juros;
    console.log(montante);

}
while (valorEmprestimo != 0)

//USO DO CONTINUE
for (i = 1; i <= 20; i++){
    if(i % 2 === 1){ //numeros pares atribuição (modulo) % 2
        continue;
    }
    console.log(i)
}

//SOBRE BREAK
//break quebra o fluxo de um laço

while(true){
    valorEmprestimo = parseInt(prompt("insira o valor do emprestimo"));
    if(valorEmprestimo === 0){
        break;
    }
    numAnos = parseInt(prompt("insira o numero de anos"));
    let juros = valorEmprestimo * taxaJuros * numAnos;
    let montante =  valorEmprestimo + juros;
    console.log(montante);

}
//Uso do parseInt e Prompt
let soma = 0;
let numero;
while(soma < 100){
    numero = parseInt(prompt("Insira um número"));
    soma = soma + numero;
    console.log(soma);
}
