import Funcionario from "./funcionario.js";

export default class PJ extends Funcionario{
    constructor(nome){
        super(nome);
        this.valorHora = 25;
    }
}