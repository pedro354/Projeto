/*
Raiz Quadrada:
${} é inteiro: true || false
É NaN: true || false
Arredendondo para baixo:
Arredondando para cima:
Com duas casas decimais:
*/

const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById("numero-titulo");
const div_Texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
div_Texto.innerHTML = `<p>Raiz Quadrada: ${numero ** (1/2)}</p>`;
div_Texto.innerHTML += `<p>${numero} é inteiro: ${(Number.isInteger(numero))}</p>`;
div_Texto.innerHTML += `<p>É NaN:: ${Number.isNaN(numero)}</p>`;
div_Texto.innerHTML += `<p>Arredendondo para baixo: ${Math.floor(numero)}</p>`;
div_Texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
div_Texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
