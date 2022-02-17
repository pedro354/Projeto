export default  class Observer{
    constructor(){
        this.observadores = [];
    }

    cadastrar(observador){
        this.observadores.push(observador);
    }

    remover(observador){
        this.observadores = this.observadores.filter(subscriber => subscriber !== observador);
    }

    notificar(dados){
        this.observadores.forEach(observador => observador(dados));
    }
}