/* Operadores Lógicos
&& -> AND -> E   -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR  -> OU  -> Todas as expressões precisam ser falsos para retornar false
!  -> NOT -> Não -> Negação !true == false - Inverte o valor
*/
console.log(true && true && true && true);  //true
console.log(true || false)                  //true 

const usuario = "Pedro";
const senha = "123456";
const vaiLogar = usuario === "Pedro" && senha === "12345" // loga como false pois precisa que as duas sejam verdadeiras
console.log(vaiLogar)