class Contador {
    #cont;
    constructor(){
        this.#cont = 0;
    }
    ehPositivo(){
        if(this.#cont > 0){
            return true;
        }else{
            return false;
        }
    }

    incremetar (){
        this.#cont += 1;
    }

    decrimentar(){
        if(this.ehPositivo){
            this.#cont -= 1;
        }else{
            console.log("O Contador não pode ser menor que zero");
        }
    }
}

const contador = new Contador();
contador.incremetar();
contador.decrimentar();
contador.ehPositivo();
console.log(contador);