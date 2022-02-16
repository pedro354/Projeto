let emailValido = true;
let senhaValida = true;
let credenciaisValidas = emailValido ? (senhaValida ? "Credenciais Validas" : "Senha inválida") : "Email Inválido";
console.log(credenciaisValidas)