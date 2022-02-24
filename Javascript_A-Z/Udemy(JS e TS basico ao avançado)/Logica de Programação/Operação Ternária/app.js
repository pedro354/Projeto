const pontUsuario = 1000;
if(pontUsuario >= 1000){
    console.log('Usuario vip');
}else {
    console.log('Usuario normal');
}

// Operação Ternária

const nivelUsuario = pontUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';
console.log(nivelUsuario)

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Padrao';
console.log(nivelUsuario, corPadrao);