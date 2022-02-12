let nome;
let marcas;
let modelo;
let memoriaRam;
let processador;

function cadastraCelular(nomeCelular, marcaCelular, modeloCelular, memoriaCelular, processadorCelular){
    celular = {
            nome: nomeCelular,
            marcas: marcaCelular,
            modelo: modeloCelular,
            memoriaRam: memoriaCelular,
            processador: processadorCelular
    }
    return celular;
}
const celular1 = cadastraCelular("Samsung", "Galaxy", "S21", "6gb", "SnapDragon");
console.log(celular1)

