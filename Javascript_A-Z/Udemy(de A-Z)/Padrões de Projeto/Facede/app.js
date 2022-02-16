import Banco from "./sub-sistemas/banco.js";
import Credito from "./sub-sistemas/banco.js";
import Fundo from "./sub-sistemas/banco.js";


function candidatar(nome, valor){
        let resultado = "aprovado";
        if (!new Banco().verifica(nome, valor)) {
            resultado = "reprovado";
        } else if (!new Credito().verifica(nome)) {
            resultado = "reprovado";
        } else if (!new Fundo().verifica(nome)) {
            resultado = "reprovado";
        }
        return nome + " foi " + resultado + " para um valor " + valor + " de Hipoteca";
}

console.log(candidatar("Manuel", 100000));

