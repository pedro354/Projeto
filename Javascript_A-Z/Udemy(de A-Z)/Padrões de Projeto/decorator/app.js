class Pessoa {
    nome;
    constructor(nome){
        this.nome = nome;
    }
    saudar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

class Aluno{
    constructor(pessoa, materia){
        this.pessoa = pessoa;
        this.nome = pessoa.nome;
        this.materia = materia;
    }

saudar(){
    console.log(`Olá, meu nome é ${this.nome}. Sou Aluna de ${this.materia}`)
}
}

class Professor{
    constructor(pessoa, disciplina){
        this.pessoa = pessoa;
        this.nome = pessoa.nome;
        this.disciplina = disciplina;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}. Sou professor de ${this.disciplina}`);
    }
}

const pe = new Pessoa("Emily");
pe.saudar();
const aluno = new Aluno(pe, "Javascript")
aluno.saudar();
const pessoa = new Pessoa("Manuel");
pessoa.saudar();
const professor = new Professor(pessoa, "Programação");
professor.saudar();