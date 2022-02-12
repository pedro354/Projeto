console.log("Temperaturas");

let temperatura;
let somaTemp = 0;
let numTemp=0

while(true){
    temperatura = parseInt(prompt("Insira uma temperatura"));
    if(temperatura === 0){
        break;
    } somaTemp += temperatura;
    numTemp += 1;}
console.log(somaTemp/numTemp);

