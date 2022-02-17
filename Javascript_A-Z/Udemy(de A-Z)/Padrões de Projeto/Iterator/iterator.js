export default class Iterator {
    indice;
    itens;

    constructor(itens){
      this.itens = itens;
      this.indice = 0;
    };

    resetar(){
        this.indice = 0;
    }

    primeiro(){
        this.resetar();
        return this.proximo();
    }

    proximo(){
        return this.itens[this.indice++];
    }

    verificaSeguinte(){
        return this.indice <= this.itens.length;
    }

    each(callback){
        for (let item = this.primeiro(); this.verificaSeguinte();item = this.proximo()){
            callback(item);
        }
    }
}