/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
entre 18 - 23 - Boa Noite
*/

// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu possso ter varios else ifs na condição
// Só posso ter um else na condição 

const hora = 16;

if(hora >= 0 && hora <= 11){
    console.log("Bom dia");
}else if(hora >= 12 && hora <= 17){
    console.log("Bom tarde");    
}else if(hora >= 18 && hora <= 23){
    console.log("Bom Noite");
}else{
    console.log("Hora Incorreta");
}