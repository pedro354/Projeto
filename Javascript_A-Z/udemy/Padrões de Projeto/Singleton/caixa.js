import Carrinho from "./carrinho.js";

const carro1 = new Carrinho();

carro1.adicionaProduto();
console.table(carro1.listaDeProdutos);

const carro2 = new Carrinho();
console.table(carro2.listaDeProdutos);
