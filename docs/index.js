const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=num]');
const operadores = document.querySelectorAll('[id*=oper]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
   if (operacaoPendente()){
      const numeroAtual = parseFloat(display.textContent.replace(',','.'));
      novoNumero = true;
      const resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);
      atualizarDisplay(resultado);      
   }
}

const atualizarDisplay = (texto) => {
   if (novoNumero){
      display.textContent = texto;
      novoNumero = false;
   }else{
      display.textContent += texto;
   }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click',inserirNumero));


const selecionarOperador = (evento) => {
   if (!novoNumero){
      calcular();
      novoNumero = true;
      operador = evento.target.textContent;
      numeroAnterior = parseFloat(display.textContent.replace(',','.'));  
   }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

const calcularIgual = () => {
   calcular();
   operador = undefined;
}

document.getElementById('igual').addEventListener('click', calcularIgual);
const limparDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

const limparEquacao = () => {
   limparDisplay();
   operador = undefined;
   novoNumero = true;
   numeroAnterior = undefined;
}
document.getElementById('limparEquacao').addEventListener('click', limparEquacao);

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1);
document.getElementById('apagar').addEventListener('click', removerUltimoNumero);

const inverterSinal = () => {
   novoNumero = true;
   atualizarDisplay (display.textContent * -1);
}
document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0;
const inserirDecimal = () => {
   if (!existeDecimal()){
      if (existeValor()){
         atualizarDisplay(',');
      }else{
         atualizarDisplay('0,');
      }
   }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal);
