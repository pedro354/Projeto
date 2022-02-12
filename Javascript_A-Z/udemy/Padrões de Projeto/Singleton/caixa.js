import Carrinho from "./carrinho.js";

const carro1 = new Carrinho();

carro1.adicionaProduto();
console.log(carro1.listaDeProdutos);

const carro2 = new Carrinho();
console.log(carro2.listaDeProdutos);
