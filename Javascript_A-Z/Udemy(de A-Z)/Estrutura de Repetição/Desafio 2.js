let temp;
let somaTemp;
let numTemp;

while(true){
    temp = parseInt(prompt("Informe uma temperatura"));
    if(temp === 0){
        break;
    }
    somaTemp += temp;
    numTemp += 1;
}
console.log(somaTemp/numTemp);