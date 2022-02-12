const listaFilmes = document.querySelector("#listaFilmes");

const filmes = [
    {nome: "Harry Potter", Genêro: "Aventura"},
    {nome: "Interestelar", Genêro: "Ação"},
    {nome: "A Quatro Passos de Você", Genêro: "Romance"},
    {nome: "Entidade", Genêro: "Terror"}
];

const criaElementosUi = function (){
    let aux = ""
    filmes.forEach((filme)=>{
        aux += `<li> Nome: ${filme.nome} - Genêro: ${filme.Genêro}`
    });
    listaFilmes.innerHTML = aux;
}

function exibeFilmes (){
    setTimeout(criaElementosUi, 2000);
}

function adicionaFilme(filme){
    const promise = (resolve, reject) => {
        setTimeout(()=> {
            if(filme.nome === ""){
                reject(new Error("Nome incorreto"));
            }else{
            filmes.push(filme);
            resolve(filme);
            }
        }, 0);
        
    }
    return new Promise(promise);
    }

async function funcaoAsync(){
    try{
        const oContraTempo = await adicionaFilme({nome: "O Contratempo", Genêro: "Suspense"});
        console.log(oContraTempo);
        await adicionaFilme({nome: "A Cabana", Genêro: "Terror Psicologico"})
        await adicionaFilme({nome: "A Ilha do Medo", Genêro: "Suspense"})
        await adicionaFilme({nome: "After", Genêro: "Romance"})
        await adicionaFilme({nome: "Pokemon: Mewtwo", Genêro: "Animação"})
        await adicionaFilme({nome: "Esposa de Mentirinha", Genêro: "Comédia Romantica"})
        exibeFilmes();
    }catch(erro){
        console.error(erro);
    }

}
funcaoAsync();
/*
adicionaFilme({nome: "O Contratempo", Genêro: "Suspense"})
.then(() => {
    return adicionaFilme({nome: "A Cabana", Genêro: "Terror Psicologico"})//adiciona elemento ao grupo array
})
.then(() => {
    return adicionaFilme({nome: "A Ilha do Medo", Genêro: "Suspense"})//adiciona elemento ao grupo array
})
.then(() => {
    return adicionaFilme({nome: "After", Genêro: "Romance"})//adiciona elemento ao grupo array
})
.then(() => {
    return adicionaFilme({nome: "Pokemon: Mewtwo", Genêro: "Animação"})//adiciona elemento ao grupo array
})
.then(() => {
    return adicionaFilme({nome: "Esposa de Mentirinha", Genêro: "Comédia Romantica"})//adiciona elemento ao grupo array
})    
.then(exibeFilmes)
.catch((erro)=>{
    console.error(erro);
})*/