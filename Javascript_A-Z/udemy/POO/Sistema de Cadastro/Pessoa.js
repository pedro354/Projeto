class Pessoa {
    nome;
    sobrenome;
    #idade;
    #cpf;
    constructor(nome, sobrenome, idade, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    saudacao(){
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos`)
    }
    get cpf(){
        return this.#cpf;
    }
    get idade(){
        return this.#idade;
    }

    set cpf (novoCPF){
        this.#cpf = novoCPF;
    }
}

class Aluno extends Pessoa{
    serie;
    turma;
constructor(nome, sobrenome, idade, cpf, serie, turma){
    super(nome,sobrenome,idade, cpf)
    this.serie = serie;
    this.turma = turma;
}

saudacao(){
    console.log(`Olá, meu nome é ${this.nome}, e faço a ${this.serie}ª`)
}
}

class Professor extends Pessoa{
    disciplina;
    horas;
    constructor(nome,sobrenome, idade, cpf, disciplina, horas){
        super(nome, sobrenome, idade, cpf)
        this.disciplina = disciplina;
        this.horas = horas;
    }
    saudacao(){
        console.log(`Olá, meu nome é ${this.nome}, e sou professor de ${this.disciplina}.`)
    }
    
}

const thaina = new Aluno ("Thaina", "Silva", 23, 12345671890, 3, "A");
const pedro = new Professor ("Pedro", "Silva", 25, 46516516169, "Psicologia", 60)

console.log(thaina);
thaina.saudacao();
console.log(pedro);
pedro.saudacao();
