// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana){
//     let diaSemanaTexto;
//         switch (diaSemana){
//         case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;

//         case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         return diaSemanaTexto;

//         case 2:
//         diaSemanaTexto = 'Terça-feira';
//         return diaSemanaTexto;

//         case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         return diaSemanaTexto;

//         case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         return diaSemanaTexto;

//         case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         return diaSemanaTexto;

//         case 6:
//         diaSemanaTexto = 'Sabádo';
//         return diaSemanaTexto;

//         default:
//         diaSemanaTexto = '';
//         return diaSemanaTexto;
//     }
// }
// function getDataMesTexto(dataMes){
//     let dataMesTexto;
//         switch (dataMes){
//         case 0:
//         dataMesTexto = 'janeiro';
//         return dataMesTexto;

//         case 1:
//         dataMesTexto = 'fevereiro';
//         return dataMesTexto;

//         case 2:
//         dataMesTexto = 'março';
//         return dataMesTexto;

//         case 3:
//         dataMesTexto = 'abril';
//         return dataMesTexto;

//         case 4:
//         dataMesTexto = 'maio';
//         return dataMesTexto;

//         case 5:
//         dataMesTexto = 'junho';
//         return dataMesTexto;

//         case 6:
//         dataMesTexto = 'julho';
//         return dataMesTexto;

//         case 7:
//         dataMesTexto = 'agosto';
//         return dataMesTexto;

//         case 8:
//             dataMesTexto = 'setembro';
//             return dataMesTexto;

//         case 9:
//         dataMesTexto = 'outubro';
//         return dataMesTexto;

//         case 10:
//         dataMesTexto = 'novembro';
//         return dataMesTexto;

//         case 11:
//         dataMesTexto = 'dezembro';
//         return dataMesTexto;

//         default:
//         dataMesTexto = '';
//         return dataMesTexto;
//     }
// }
// function zeroAEsquerda (num){
//     return num >= 10 ? num : `0${num}`;
// }
// function  criaDate (data){
//     const diaSemana = data.getDay();
//     const dataMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getDataMesTexto(dataMes);

//     return (
//     `${nomeDia}, ${data.getDate()} ${nomeMes} de ${data.getFullYear()}` +
//     ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`
//     )
// }
// h1.innerHTML = criaDate(data);



//MELHOR USADO PARA RECEBER UMA DATA//

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})


// USANDO ARRAYS
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabádo'];
    return diasSemana[diaSemana]
}
function getDataMesTexto(dataMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[dataMes]
    }
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}
function  criaDate (data){
    const diaSemana = data.getDay();
    const dataMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getDataMesTexto(dataMes);

    return (
    `${nomeDia}, ${data.getDate()} ${nomeMes} de ${data.getFullYear()}` +
    ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`
    )
}
h1.innerHTML = criaDate(data);












