const stringTest = "Hello Word";
//const regex = /Hello/;
//console.log(regex.test(stringTest));

const regexH = /H/;
const regexl = /l/;
const regexll = /ll/;
/*
console.log(regexH.test(stringTest));
console.log(regexl.test(stringTest));
console.log(regexll.test(stringTest));
*/

const regexW = /w/i;
//console.log(regexW.test(stringTest))

const stringTest1 = "Exemplo: Hello World!!!";
const regexComeco = /^Hello/;
const regexFinal = /!!!$/;

//console.log(regexComeco.test(stringTest));
//console.log(regexComeco.test(stringTest1));
//console.log(regexFinal.test(stringTest));
//console.log(regexFinal.test(stringTest1));

////////////////////////////////////////////////

let produtos = "3210232-B\n321212121-C\n9885-D\n65560565-E\n9879908983213132-F"
//console.log(produtos);
//const regex = /[0-9]+[-][B]/;
//const resultado = produtos.match(regex);
//const resultado = regex.exec(produtos)
//console.log(resultado);

////////////////////////////////////////////////

const valor = "R$ 1850,99";
const regexValor = /(R\$) ([0-9]{4})[,]([0-9]{2})/;//GRUPOS COM ()
const regexValorNome =  /(?<moeda>R\$) (?<inteiro>[0-9]{4})[,](?<centavos>[0-9]{2})/;
const data = regexValorNome.exec(valor);

console.log(data.groups.moeda);
console.log(data.groups.inteiro);
console.log(data.groups.centavos);
//console.log(valor.replace(regexValor, '$ $2.$3'));