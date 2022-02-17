import Iterator from "./iterator.js";
const itens = ["um", 4, "Quadrado", true, "DELL"];
const iterator = new Iterator(itens);

for (let item = iterator.primeiro(); iterator.verificaSeguinte(); item = iterator.proximo()){
    console.log(item);
}

console.log("");

iterator.each(function (item){
    console.log(item);
})