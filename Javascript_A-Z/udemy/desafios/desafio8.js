const usuario = {
    nome: "Pedro",
    email: "pedro@gmail.com",
    senha: "654321"

}
function ocultaSenha (senha){
    let senhaAux = "";
    for(let i = 0; i< senha.length; i++){
        senhaAux += "*"// concatena um *
    }
    return senhaAux;

}

usuario.senha = ocultaSenha(usuario.senha)
console.log(usuario)