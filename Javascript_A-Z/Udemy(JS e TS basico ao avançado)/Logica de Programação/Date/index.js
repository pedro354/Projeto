// const tresHoras = 60 * 60  * 3 * 1000;
// const data = new Date(0 + tresHoras);        //01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());
//const data = new Date(2019, 3, 20, 15, 14, 27, 500);  //ano/mes/dia hr/min/seg/mileseg
const data = new Date('2019-04-20 20:15:59.100')
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());        //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());   // 0 - Domingo, 6 - Sabado


