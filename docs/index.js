function calcNum(numerador) {
    if (typeof gvisor == 'undefined') {
       document.display.value = '';
    }
    document.display.value = document.display.value + numerador;
    gvisor = 1;
 }