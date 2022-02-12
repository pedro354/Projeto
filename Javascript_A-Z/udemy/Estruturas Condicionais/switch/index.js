/*
Empresa

Programador Junior -> 4mil
Programador Pleno -> 5mil
Progrtamdor senior -> 6mil
Testador -> 5mil
Arquiteto-> 8mil
Analista -> 7mil
Gerente-> 10mil
*/

let cargo = "Arquiteto";

switch (cargo) {

    case "Programador Junior":
    console.log("O programador junior recebe R$4.000.");
    break;

    case "Programador Pleno":
    console.log("O programador pleno recebe R$5.000.");
    break;

    case "Programador Senior":
    console.log("O programador Senior recebe R$6.000.");
    break;

    case "Analista":
    console.log("O Analista recebe R$5.000.");
    break;

    case "Arquiteto":
    console.log("O Arquiteto recebe R$8.000.");
    break;

    case "Testador":
    console.log("O Testador recebe R$7.000.");
    break;

    case "Gerente":
    console.log("O Gerente recebe R$10.000.");
    break;

    default:
        console.log("Cargo não cadastrado no sistema");


}