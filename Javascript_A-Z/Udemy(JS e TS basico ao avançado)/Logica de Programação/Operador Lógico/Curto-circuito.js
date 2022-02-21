//Avaliação de Curto Circuito

/*
&& -> false && true --> false "o valor mesmo"
|| -> true && false --> vai retornar o valor mesmo

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
// console.log('Pedro' && 0 && 'Emily')
// function falaOi (){
//     return 'Oi';
// }

// const vaiExecutar = 'Tatá';
// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || "Pedro" || true);
const corUsuario = "vermelho";
const corPadrao = corUsuario || "red";
console.log(corUsuario);