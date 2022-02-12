let carros = "CAR14751-A\nCAR124488-B\nCAR1751187-C\nCAR99962431-D\nCAR874131-E"
const regex = /[A-Z]+[0-9]+[-][A-Z]/;
const resultado = carros.match(regex);
console.log(resultado)