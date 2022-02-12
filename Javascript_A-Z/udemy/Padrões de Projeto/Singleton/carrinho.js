export default class Carrinho {
    #listaDeProdutos
    #valorTotal
    
    constructor(){
        if(!Carrinho.instance){
            this.#listaDeProdutos = ["Maça", "Sabonete", "Desodorante"];
            this.#valorTotal = 35;
            Carrinho.instance = this;  
        }
        return Carrinho.instance;
    }

    adicionaProduto(){
        this.#listaDeProdutos.push("bola");
        this.#valorTotal += 10;
    }

    get listaDeProdutos(){
        return this.#listaDeProdutos;
    }

    get valorTotal(){
        return this.#valorTotal;
    }
};