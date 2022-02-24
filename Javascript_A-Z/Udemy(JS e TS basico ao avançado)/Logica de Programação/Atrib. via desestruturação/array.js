//                 0    1    2    3    4    5    6    7    8  //--> indice
const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
//console.log(primeiroNumero, segundoNumero);
//console.log(resto);
//
const num = [1000,2000,3000,4000,5000,6000,7000,8000,9000];
const [um, ,tres, ,cinco] = num;
//console.log(um,tres,cinco);
//

//                  0        1        2
//                1 2 3    1 2 3    1 2 3
const numero = [ [1,2,3], [4,5,6], [7,8,9] ];
const [lista1, lista2, lista3] = numero;
console.log(lista3[2]);