const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Silva',
    idade: 25,

    fala (){
        console.log(`${this.nome} ${this.sobrenome} está falando oi..`); // --> this significa este objeto nesse contexto
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala(); 

// function criaPessoa(nome, sobrenome, idade){      // --> variavel da função por parametro
//     return{ nome, sobrenome, idade };                                  
// }                                                 // --> retorna objetos

// const pessoa1 = criaPessoa('Pedro', 'Silva', 25); // --> enviando argumento para o parametro
// const pessoa2 = criaPessoa('Thaina', 'Silva', 24); // --> enviando argumento para o parametro
// const pessoa3 = criaPessoa('Emily', 'Silva', 16); // --> enviando argumento para o parametro
// const pessoa4 = criaPessoa('Noah', 'Silva', 12); // --> enviando argumento para o parametro
// const pessoa5 = criaPessoa('Maju', 'Silva', 14); // --> enviando argumento para o parametro

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade)
// console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade)
// console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade)
// console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade)