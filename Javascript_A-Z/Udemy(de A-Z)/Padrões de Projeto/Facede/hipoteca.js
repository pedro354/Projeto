import Banco from "./sub-sistemas/banco.js";
import Credito from "./sub-sistemas/banco.js";
import Fundo from "./sub-sistemas/banco.js";

export default class Hipoteca{
    #nome
    constructor(nome){
        this.#nome = nome;
    }
    candidatar(valor){
        let resultado = "aprovado";
        if (!new Banco().verifica(this.#nome, valor)) {
            resultado = "reprovado";
        } else if (!new Credito().verifica(this.#nome)) {
            resultado = "reprovado";
        } else if (!new Fundo().verifica(this.#nome)) {
            resultado = "reprovado";
        }
        return this.#nome + " foi " + resultado + " para um valor " + valor + " de Hipoteca";
}
}