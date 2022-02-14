import CLT from "/clt.js";
import PJ from "/pj.js";
import Estagiario from "/estagiario.js";
import Funcionario from "/funcionario.js";

export default class funcionarioFabrica {
    constructor(){

    }

    criaFuncionario(regime, nome){
        if(regime === "CLT"){
            return new CLT(nome);
        }else if(regime === "PJ"){
            return new PJ(nome);
        }else if(regime === "Estagiario"){
            return new Estagiario(nome);
        }else{
            return new Funcionario(nome);
        }
    }
    
}