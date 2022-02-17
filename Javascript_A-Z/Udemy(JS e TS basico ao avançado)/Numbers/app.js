//IEE 754-2008
let num1 = 0.7;  //number
let num2 = 0.1;//number

num1 += num2; //num1 = num1 + num2 // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0


//num1 ((num1 * 100) + (num2 * 100)) / 100;
//num1 = parseFloat(num1.toFixed(2)); //toFixed arruma o número que ficou "1.00" parseFloat o ponto flutuante
console.log(Number.isInteger(num1));
console.log(num1);

//console.log(num1.toString()+ num2); // 12.5
//console.log(num1.toString(2));      // 1
//console.log(num1.toFixed(2));       //casas decimais
//console.log(Number.isInteger(num1));  // retorna se o numero é inteiro ou não
//let temp = num1 * 'Olá';
//console.log(temp); //NaN
//console.log(Number.isNaN(temp)); // true, não é verdadeiro
//console.log(temp);

