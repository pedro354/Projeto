/*
function soma(x, y){            //--> chamo função soma, com parametros x e y 
    const resultado = x + y;    //--> adiciono const resultado recebendo x + y
    return resultado;           //--> retorno a variavel de const 'resultado';
}
const resultado = soma(2, 2);
console.log(resultado);

//console.log(soma(2, 2))       //--> envio os valores no log soma(2, 2): 2 + 2 = 4
*/
/*
const raiz = function(n) {      //--> variavel raiz é igual a uma função anonima
    return n ** 0.5;            //--> retorna parametro n recebendo a raiz quadrada sintaxe (**) 0.5
};
console.log(raiz(9));           //--> envio o valor para o log chamando a variavel raiz atribuo o valor 9
console.log(raiz(16));
console.log(raiz(25));
*/
//const raiz = n => n ** 0.5    //--> linha de uma arrow function
const raiz = (n) => {           //--> variavel raiz recebe uma arrow function
    return n ** 0.5;            //--> retorna parametro n recebendo a raiz quadrada sintaxe (**) 0.5
};
console.log(raiz(9));           //--> envio o valor para o log chamando a variavel raiz atribuo o valor 9
console.log(raiz(16));
console.log(raiz(25));

