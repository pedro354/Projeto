import funcionarioFabrica from "./funcionarios/funcionarioFabrica.js";
const fabrica = new FuncionarioFabrica();
const funcionarios = [];


funcionarios.push(fabrica.criaFuncionario("CLT", "Manuel"));
funcionarios.push(fabrica.criaFuncionario("PJ", "Pedro"));
funcionarios.push(fabrica.criaFuncionario("Estagiario", "Lucas"));

for (const funcionario of funcionarios) {
    funcionario.apresentaDados();
} 
