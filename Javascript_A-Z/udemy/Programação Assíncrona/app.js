//Fluxo Síncrono executa um por vez - Fluxo Assíncrono executa sem ordem definida
//exemplo codigo assincrono
//setTimeout(funcao, delay, parametros);
/*
console.log("Uma Linda Mulher");
setTimeout(console.log, 1500, "O Contratempo");
console.log("Harry Potter");

console.log("Olá,")
setTimeout(console.log, 1500, "Pedro");
console.log("Silva");
*/

//Callback - Funçoes que são executados em um tempo futuro
/*
function exibeNome(nome, callback){
    setTimeout(()=>{
        console.log(nome);
        callback();
    }, 1500);
}

console.log("Olá, ");
exibeNome("Pedro", function(){
    console.log("Silva");
});
*/
//Callback Hell: Ocorre quando você tem muitos callbacks em seu código.//
//Dica para evitar:
//>Escreva melhor o seu código

/**
 * function exibeNome(nome, callback){
    setTimeout(()=>{
        console.log(nome);
        callback();
    }, 1500);
}

console.log("Olá, ");
exibeNome("Pedro", function(){
    console.log("Silva");
});
 */
/** Callback Melhorado 
 * function exibeNome(nome, callback){
    setTimeout(()=>{
        console.log(nome);
        callback();
    }, 1500);
}
function exibeSobrenome(){
    console.log("Silva");
}
console.log("Olá, ");
exibeNome("Pedro", exibeSobrenome);
});
 */
//Promise: Objeto que representa uma conclusão ou falha eventual de uma operação assincrona
/** 
 * Pendente: Estado inical antes de ser resolvida ou rejeitada. O
 * Cumprida: Operação bem-sucedida, promessa resolvida.
 * Rejeitada: Operação falhou, promessa rejeitada
*/
/** 
 * const promise = new Promise((resolve, reject) => {
 * //se tiver tudo ok
 * if(true){
 * resolve();
 * //caso contrario 
 * }else {
 * reject();
 * }
 * })
 * promise()
 * .then(() => {
 * //faça algo
 * })
 * .catch(()=>{
 * //faça algo
 * })
*/
function exibeNome(nome){
        const promise = (resolve, reject) => {
            setTimeout(()=>{
                if(nome === "Pedro"){
                    resolve(nome);
                }else{
                    reject(new Error("Nome incorreto"));
                }
                resolve(nome);
            }, 1500);
        }
        return new Promise(promise);
    }
    function exibeSobrenome(){
        console.log("Silva");
    }

 async function funcaoAsync() {
        try{
         const meuNome = await exibeNome ("Pedro")
         console.log(meuNome)
         await exibeSobrenome ()
         await console.log("Tudo bem?")
         await console.log("Quantos anos tem?")
        }catch(erro){
            console.error(erro);
        }
    }

    console.log("Olá, ");
    funcaoAsync();
   /* exibeNome("Pedro")
        .then((resposta) => {
            console.log(resposta);
        })
        .then(exibeSobrenome)
        .then(() => {
            console.log("Tudo Bem?");
        })
        .then(() => {
            console.log("Quantos anos você tem?");
        })
/**Catch: Adiciona um callback que trata rejeição para a promisse e retorna uma nova promisse resolvendo o valor retornado do callback
 * promisse()
 * .then(() => {
 * // faça algo
 * })
 * .catch((erro) =>{
 *  console.error(erro);
 * })
 */
/**Async/Await
 * Async: Indica que a função possui codigo assincrono
 * Await: Indica um ponto a ser aguardado pelo código
 * 
 * function newFuncao(){
 * }
 * function newFuncao(){
 * }
 * function newFuncao(){
 * }
 * async function newFuncao(){
 * const x = await nomeFuncao();
 * const y = await nomeFuncao(x);
 * nomeFuncao(y);
 * }
 */