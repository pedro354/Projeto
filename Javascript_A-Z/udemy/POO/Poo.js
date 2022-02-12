//Programação orientada a objetos (POO)
//Sintaxe (Exemplo)

class Carro {
    nome;
    cor;
    velocidadeMax;
    velocidadeAtual;

    constructor (nome, cor, velocidadeMax, velocidadeAtual){
        this.nome = nome;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = velocidadeAtual;
    }

    acelerar(velocidadeAdicional){
        this.velocidadeAtual += velocidadeAdicional;
    }
}

const ferrari = new Carro ("Ferrari", "Vermelho", 320, 260)
const mclarem = new Carro("McLarem", "Preto", 340, 280);

console.log(mclarem.nome);
console.log(mclarem.velocidadeMax);

console.log(ferrari.nome)
console.log(ferrari.velocidadeMax)

