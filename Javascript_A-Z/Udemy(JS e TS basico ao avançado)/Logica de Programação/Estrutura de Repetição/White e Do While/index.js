/* const nome = 'Emily'
let controle = 0;

while(controle < nome.length){              //while (condição){codigo}
console.log(nome[controle]);
controle++;
} */
function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 1;
const max = 50;
let rand = random(min, max)

while(rand !== 10){
    rand = rand(min, max);
}