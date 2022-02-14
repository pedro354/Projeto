export default class Funcionario {
    nome;
    valorHora;

    constructor(nome){
        this.nome = nome;
        this.valorHora = null;
    }

    apresentaDados(){
        console.log(`Meu nome é ${this.nome} e recebo R$ ${this.valorHora}/h.`);
    }
}