
let nome = "Thaina";
let sobrenome = "Silva";
let idade = 23;

const numCliente = 095864;

let valorEmprestimo = 150000;
let taxaJuros = 0.10;
let numAnos = 6;
let bomPagador = true;

/* Montante * valorEmprestimo + juros
    juros = valorEmprestimo * taxaJuros * numAnos */

let juros = valorEmprestimo * taxaJuros * numAnos;
let montante =  valorEmprestimo + juros;

//If e Else//

if(bomPagador){
    console.log("o cliente: "+ nome +" é uma boa pagadora")
}else{
    console.log("o cliente: "+ nome +" não é uma boa pagadora")

}
//taxa de juros por idade ELSE IF
/*
18-25 anos -> 9%
26-35 anos -> 8%
36-50 anos -> 7%
51 anos ou mais -> 6%
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
console.log(taxaJuros);


let id = 9;

if (id >= 18){
    console.log("Você pode votar");
}else if (id >= 16 || id >= 60){
    console.log("Seu voto é opcional")
} else {
    console.log("Você não pode votar");
}