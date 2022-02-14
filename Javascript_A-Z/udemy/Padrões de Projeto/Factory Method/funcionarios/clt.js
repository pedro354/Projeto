import Funcionario from "./funcionario.js";

export default class CLT extends Funcionario{
    
    constructor(nome){
        super(nome);
        this.valorHora = 20;
    }
}