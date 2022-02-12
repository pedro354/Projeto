//const array1 = ["Elemento0", "Elemento1", "Elemento3"] - array simples
//const lista = ["manuel", 24, true, "Silva"] // retorna [Manuel, 24, true, Silva]
//const frutas = ["Abacaxi", "Laranja", "Maça", "Limão", "Morango"]; // console.log(frutas[0]) retornará abacaxi
let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaJuros;
let numAnos;
let bomPagador;
let avalistas;

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, 
    numAnosCliente = 2, bomPagadorCliente = false, avalistasCliente){
    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    numAnos = numAnosCliente;
    bomPagador = bomPagadorCliente;
    taxaJuros = defineTaxa(idadeCliente);
    avalistas = avalistasCliente;
}
function defineTaxa(idadeCliente){
    if (idade >= 18 && idade <= 25){
        return 0.09
    }else if (idade > 26 && idade <= 35){
        return 0.08
    }else if (idade > 36 && idade <= 50){
        return 0.07
    }else {
        return 0.06
    }
}


cadastraCliente("Edval", "Silva", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);

function adicionaAvalista(avalista){
    avalistas.push(avalista);
}

function removeAvalista(){
    avalistas.pop();
}

function editaAvalista(nomeAvalista, indice){
    avalistas[indice] = nomeAvalista;
}

function ordenarAvalista(){
    return avalistas.sort();
}

function exibeAvalistas(){
    avalistas.forEach((avalista, indice) => {
        console.log(`O ${indice + 1}º avalista é ${avalista}`);
    });
}
// chamando a função(); para retornar ao browser
adicionaAvalista("Andrew");
adicionaAvalista("Jose");
adicionaAvalista("Marcos");
//console.log(avalistas); // [ 'Manuel', 'Raphael', 'Bruno', 'Andrew', 'Jose', 'Marcos' ]
removeAvalista();
removeAvalista();
//console.log(avalistas); //[ 'Manuel', 'Raphael', 'Bruno', 'Andrew' ]
editaAvalista("Manuel Silva", 0);//
//console.log(avalistas[0]);//Manuel Silva
//console.log(ordenarAvalista());//[ 'Andrew', 'Bruno', 'Manuel Silva', 'Raphael' ]
exibeAvalistas();

// Loops Alinhados - um loop dentro de outro loop
const quadroDefuncionarios = [["Financeiro", "Kilma", "Daniel"], ["Marketing", "Sarah", "Leticia"], ["Diretoria", "Keila", "Marcos"]];
quadroDefuncionarios.forEach((departamento, indiceDep) => {
    departamento.forEach((funcionario, indiceDep) => {
        console.log(`${indiceDep + 1} - ${funcionario}`)
    })
})
//MAP mapeia array de origem e gera um novo array = pecorre o array de origem sejam pecorridos e sejam multiplicados
//const numero = [1,4,9,16];
//const novosNumeros = numeros.map((numero)=> numero * 2);
//console.log(novosNumeros); // [2,8,18,32]
/*
const numeros = [10,20,30,40,50];
const novosNumeros = numeros.map((numero) => numero + 10);// percorre array e adiciona um novo numero
console.log(novosNumeros);

//filter() filtrar elementos de um array e gera um novo array
const numero = [1,4,9,16];
const impares = numero.filter((numer) => numer % 2 === 1);
console.log(impares);
const novosNumero = numeros.filter((numero) => numero > 25);
console.log(novosNumero)

//find() obter o primeiro valor do elmento no array e satifaz a condição
const numero = [10,15,20,25,30,35];
let numeroRetornado = numero.find((numer) => numer > 25);
console.log(numeroRetornado);
*/

const numeros = [-7,-10,-3,0,4,5,100];

let numeroRetornado = numeros.find((numero)=> numero > 0);
let indiceRetornado = numeros.findIndex((numero) => numero > 0);//retorna o index desse elemento
console.log(numeroRetornado);
console.log(indiceRetornado);

//adcionar elementos Push()
const frutas = ["Maça", "Banana"];
frutas.push("Melancia");
console.log(frutas);
frutas.push("Uva", "Mamão");
console.log(frutas);
// adcionar elementos unshift() adiciona um ou mais elementos no começo do array
const fruta = ["Maça", "Banana"];
fruta.unshift("Melancia");
console.log(fruta);
// remover o ultimo elemento pop() 
const frut = ["Melancia", "Banana", "Morango"];
frut.pop();
console.log(frut);
//remove o primeiro elemento shift()
const alimentos = ["Melancia", "Banana"];
alimentos.shift();
console.log(alimentos);
//remove um intervalo do elemento splice()
const cidades = ["Nova York", "Niterói", "Rio de Janeiro", "Brooklyn", "Liverpool"];
cidades.splice(3,2);
console.log(cidades);
//busca elemento num array indexOf()
const medicamento = ["Amoxicilina", "Dorflex", "Novalgina", "Doralgina"];
let indice1 = medicamento.indexOf("Amoxicilina");
let indice2 = medicamento.indexOf("Doralgina");
console.log(medicamento[indice1]);
console.log(medicamento[indice2]);
//ordernar array com sort()
const vitaminas = ["Vitaxon","lavitan","Vitorex","Aspargil"];
vitaminas.sort();
console.log(vitaminas);

/*
A|B|C
D|E|F
G|H|I
Array Bimendisionais
Coleção de itens organizados como uma matriz de linhas e colunas. (Array de Arrays)
const letras = [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]];
*/
const clientes = [["Livia", 24, true], ["Julia", 23, true], ["Fernando", 30, false]];
// console.table cria uma tabela
/*┌─────────┬────────────┬────┬───────┐
  │ (index) │     0      │ 1  │   2   │
  ├─────────┼────────────┼────┼───────┤
  │    0    │  'Livia'   │ 24 │ true  │
  │    1    │  'Julia'   │ 23 │ true  │
  │    2    │ 'Fernando' │ 30 │ false │
  └─────────┴────────────┴────┴───────┘*/
  console.log(clientes[1][0]); // Julia 23
  console.log(clientes[1][1]); // 23
//utilizar sempre "[]" para tabelar na matriz
  clientes.push(["Bruno", 28, false]);
  clientes.pop(); // remove o ultimo elemento
  clientes.push(["Patricia", 39, true]);
  clientes.sort();
  clientes.push(["Thaina", 23, false]);
  console.table(clientes);

  //Adicionando elementos
const fruty = [];
frutas[0] = "Abacaxi";
frutas[1] = "Laranja";
frutas[2] = "Maça";
frutas[3] = "Limão";

frutas[2] = "Uva";// editando elemento Maça por Uva
console.log(fruty);

//Tradicional
/*
const frutas = ["Abacaxi", "Laranja", "Maça", "Limão", "Morango"];
for (let i= 0; i< frutas.length; i++){
    console.log(frutas[i])
}

//For In

const frutas = ["Abacaxi", "Laranja", "Maça", "Limão", "Morango"];
for (let indice in frutas){
    console.log(frutas[indice]);
}

//For Of
const frutas = ["Abacaxi", "Laranja", "Maça", "Limão", "Morango"];
for (let fruta of frutas){
    console.log(fruta);
}
*/
//ForEach
/*
const frutas = ["Abacaxi", "Laranja", "Maça", "Limão", "Morango"];
frutas.forEach((fruta, indice) => {
    console.log(frutas);
    console.log("Fruta " + indice + " : " + fruta);
});
*/
/*
Math.random() 
- Retorna um número de ponto flutuante entre 0 e 1;
- Incluindo o 0, mas nunca incluido o 1.
console.log(Math.random()); //0.0757930446750476
console.log(Math.random()); //0.18196633823641917
console.log(Math.random() * 3); //1.7545865741234827

Mathfloor()
Retorna o número arrendodado para baixo;
1.92323232 --> 1
0.87680332 --> 0
2.87680332 --> 2

nunca vai incluir o 3.

console.log(Math.random() * 3)); //0
console.log(Math.random() * 3)); //0
console.log(Math.random() * 3)); //1
console.log(Math.random() * 3)); //2

para incluir o 3, substitua o 3 para o próximo numero 4.

console.log(Math.random() * 4)); //3
console.log(Math.random() * 4)); //2
console.log(Math.random() * 4)); //2
console.log(Math.random() * 4)); //0

*/
/*
//Acesso aleatorio de arrays
const nomess = ["Manuel","Edval","Bruno","Jose","Caio","Pedro"]
let indiceAleatorioo = Math.floor(Math.random() * 6);
console.log(nomess[indiceAleatorio]);*/