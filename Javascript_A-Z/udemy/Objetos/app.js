/*Objetos são coleções de propriedades
Propriedade = Chave: Valor. Valor armazena uma função ela se torna um metodo => Valor: function().*/
/*
{
    nome: "Iphone",
    marca: "Apple",
    camera: 12,
    so: "IOS 14",
    atenderLigacao: function(){
        //bloco de codigo
    },
    acessaInternet: function(){
        //bloco de codigo
    }
    reproduzMusica: function(){
        //bloco de codigo
    }
}

Acessando elementos
const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    empaclado: true,
    motor: [126, 1.6]
};
//por notação por pontos. acessando os elementos confrome abaixo
Notação por pontos:
carro.nome;
carro.marca;

console.log(carro.nome); Fiesta
console.log(carro.marca); Ford

Notação por colchetes:
carro['nome'];
carro['marca'];

console.log(carro['nome']); Fiesta
console.log(carro['marca']); Ford

Objetos Aninhados
// representando a propriedade motor como objeto alinhado cavalo e cilindradas
const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    empaclado: true,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    }
};

console.log(carro.motor.cavalos);
console.log(carro.motor.cilindradas);
console.log(carro['motor']['cavalos']);
console.log(carro['motor']['cilindradas']);

Editando elementos:

const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    empaclado: true,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    }
};

carro.cor ="Azul";
console.log(carro.cor);
*/

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaJuros;
let numAnos;
let bomPagador;
let avalistas;
/*
function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente = 2, bomPagadorCliente = false, avalistasCliente){
Objetos

cliente = {
            nome: nomeCliente,
            sobrenome: sobrenomeCliente,
            idade: idadeCliente,
            emprestimo: { // objeto alinhado
                valorEmprestimo: valorEmprestimoCliente,
                numAnos: numAnosCliente,
                bomPagador: bomPagadorCliente,
                taxaJuros: defineTaxa(idadeCliente),
                avalistas: avalistasCliente
                        }
                 }
        return cliente;
    }
function defineTaxa(idadeCliente){
    if (idade >= 18 && idade <= 25){
        return 0.09
    }else if (idade > 26 && idade <= 35){
        return 0.08
    }else if (idade > 36 && idade <= 50){
        return 0.07
    }else {
        return 0.06
    }
}


const cliente1 = cadastraCliente("Edval", "Silva", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);

console.log(cliente1)//editando o objeto

//adcionar propriedades

const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    }
};

carro.consumo = 11;
carro.capacidadeTanque = 45;
console.log(carro)//Irá adiconar na propriedade carro

//removendo propriedades

const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    }
};

//usa-se delete// 
delete carro.emplacado;
console.log(carro);

//Metodos de Objetos

const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    consumo: 11,
    capacidadeTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    },
    kmPecorridos: function(){
        return `0 ${this.nome} pecorre ${this.consumo * this.capacidadeTanque} KM com um tanque cheio`;
    }
}
}
function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente,
     numAnosCliente = 2, bomPagadorCliente = false, avalistasCliente){
            cliente = {
                nome: nomeCliente,
                sobrenome: sobrenomeCliente,
                idade: idadeCliente,
                emprestimo: { // objeto alinhado
                    valorEmprestimo: valorEmprestimoCliente,
                    numAnos: numAnosCliente,
                    bomPagador: bomPagadorCliente,
                    taxaJuros: defineTaxa(idadeCliente),
                    avalistas: avalistasCliente
                },
                adicionaAvalista: function(avalista){
                    this.emprestimo.avalistas.push(avalista);
                },
                removeAvalista: function(){
                    this.emprestimo.avalistas.pop();
                },
                editaAvalista: function(nomeAvalista, indice){
                    this.emprestimo.avalistas[indice] = nomeAvalista;
                },
                ordenarAvalista: function(){
                    this.emprestimo.avalistas.sort();
                },
                exibeAvalistas: function(){
                    this.emprestimo.avalistas.forEach((avalista, indice) => {
                        console.log(`O ${indice + 1}º avalista é ${avalista}`);
                    })
                }
                     }
            return cliente;
        }
    function defineTaxa(idadeCliente){
        if (idade >= 18 && idade <= 25){
            return 0.09
        }else if (idade > 26 && idade <= 35){
            return 0.08
        }else if (idade > 36 && idade <= 50){
            return 0.07
        }else {
            return 0.06
        }
    }
    
    
    const cliente1 = cadastraCliente("Edval", "Silva", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);
    cliente1.adicionaAvalista("Jose");
    cliente1.adicionaAvalista("Maria");
    cliente1.removeAvalista();
    cliente1.editaAvalista("Manuel Silva", 0);
    cliente1.ordenarAvalista();
    cliente1.exibeAvalistas();

    console.log(cliente1.emprestimo.avalistas);
*/
//Metodos Object
//Keys() = Retorna um array de string que representa as chaves de cada propriedade
/*
const carro = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    consumo: 11,
    capacidadeTanque: 45,
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    },
    kmPecorridos: function(){
        return `0 ${this.nome} pecorre ${this.consumo * this.capacidadeTanque} KM com um tanque cheio`;
    }
}
const chaves = Object.keys(carro);
console.log(carro);
//Values Retorna um array com os valores de cada propriedade
const valores = Object.values(carro);
console.log(carro);
//Entries() retorna um array cujo os elementos são também arrays correspondentes pares de propriedades [chaves : valor]
const tuplas = Object.entries(carro);
console.log(carro);
//Assign copia as propriedades de um objeto de origem para um de destino
const carro1 = Object.assign(carro);
console.log(carro);*/
/*
//aplicando FOR OF usando metodo objeto entries do Object pecorrendo carro2
const carro2 = {
    nome: "Fiesta",
    marca: "Ford",
    cor: "Preto",
    ano: 2012,
    consumo: 11,
    capacidadeTanque: 45,
}
for (const [chave, valor] of Object.entries(carro2)){
    console.log(`${chave} : ${valor}`);//exibe dados no sentido literal
}
*//*
//Length
let cidade = "Niterói";
console.log(cidade.length);

//Acessando caracteres
let cidade1 = "Niterói";
console.log(cidade1[2]);

//buscando string
let cidade2 = "Niterói";
console.log(cidade.indexOf("roi"));

//validando presença subString
let emailValido = "niteroi@gmail.com";
console.log(emailValido.includes("@"));//true
let emailInvalido = "niteroi.gmail.com";
console.log(emailInvalido.includes("@"));//false

//mudando maisculo e minusculo toUpperCase e toLowerCase
let cidade3 = "Niterói";
console.log(cidade3.toLowerCase());
let cidade4 = "Niterói";
console.log(cidade4.toUpperCase());

//atualizando uma string com replace
let cidade5 = "Niterói";
cidade5 = cidade5.replace("rói", "boi");
console.log(cidade5);
*//*

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente,
    numAnosCliente = 2, bomPagadorCliente = false, avalistasCliente){
           cliente = {
               nome: nomeCliente,
               sobrenome: sobrenomeCliente,
               idade: idadeCliente,
               emprestimo: { // objeto alinhado
                   valorEmprestimo: valorEmprestimoCliente,
                   numAnos: numAnosCliente,
                   bomPagador: bomPagadorCliente,
                   taxaJuros: defineTaxa(idadeCliente),
                   avalistas: avalistasCliente
               },
               adicionaAvalista: function(avalista){
                   this.emprestimo.avalistas.push(avalista);
               },
               removeAvalista: function(){
                   this.emprestimo.avalistas.pop();
               },
               editaAvalista: function(nomeAvalista, indice){
                   this.emprestimo.avalistas[indice] = nomeAvalista;
               },
               ordenarAvalista: function(){
                   this.emprestimo.avalistas.sort();
               },
               exibeAvalistas: function(){
                   this.emprestimo.avalistas.forEach((avalista, indice) => {
                       console.log(`O ${indice + 1}º avalista é ${avalista}`);
                   })
               }
                    }
           return cliente;
       }
   function defineTaxa(idadeCliente){
       if (idade >= 18 && idade <= 25){
           return 0.09
       }else if (idade > 26 && idade <= 35){
           return 0.08
       }else if (idade > 36 && idade <= 50){
           return 0.07
       }else {
           return 0.06
       }
   }

const cliente1 = cadastraCliente("Edval", "Silva", 56, 150000, 9, true, ["Manuel", "Raphael", "Bruno"]);

function adicionaInfLogin(cliente, email, senha){
    if(email.indexOf("@") !== -1 && senha.length > 5){ // o email tem que ter "@" (utilizando indexOf) diferente de -1 e ser de tamanho cinco.
        cliente.login = {
            email: email,
            senha: senha
        }
    
        return cliente;
    
    }else {
        return "Credenciais invalidas";
    }

}//validação de login e senha utilizando propriedade e metodo de string
console.log(adicionaInfLogin(cliente1, "edval@gmail.com", "ed12345"));
console.log(adicionaInfLogin(cliente1, "edval.com", "edval1234"));
console.log(adicionaInfLogin(cliente1, "edval@gmail.com", "ed123"));
*/

//Pecorrendo uma String trocando l por r
/*
function falaCebolinha(frase){
    
    let fraseCebolinha = "";
    for (let letra of frase){
        if(letra == "r"){
            fraseCebolinha += "l";
        }else{
            fraseCebolinha += letra;
        }
    }

    return fraseCebolinha
}
console.log(falaCebolinha("nao troco as letras de proposito"));
console.log(falaCebolinha("vamos tomar um sorvete"));

*/
//destruturando objeto const {propiedade} = objeto;
const celular = {
    bateria: 4.000,
    wifi: true,
    marca: "Samsung",
    modelo: "s21",
    sensor: {
        impressao: true,
        infravermelho: false,
        iris: true,
    },
};
const {marca, modelo} = celular;
console.log(marca);
console.log(modelo);
const {sensor: {impressao}} = celular; //em objetos aninhados
console.log(impressao);

//casos de Uso gerar um array apenas com nomes

const cel = [
    {nome: "Samsung", marca: "s21", cor:"preto"},
    {nome: "Motorola", marca: "k52", cor:"azul"},
    {nome: "Nokia", marca: "L39", cor: "rosa"}
];
const nomes = cel.map(({nome}) => nome);
console.log(nomes);
 