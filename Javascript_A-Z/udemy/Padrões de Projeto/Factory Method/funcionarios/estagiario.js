import Funcionario from "./funcionario.js";

export default class Estagiario extends Funcionario{
    constructor(nome){
        super(nome);
        this.valorHora = 15;
    }
}