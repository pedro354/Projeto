//Sistema que informa alunos reprovados e aprovados
//Fazer um programa que receba como entrada um array com notas dos alunos e exiba a mensagem informando quantos alunos
//reprovados e aprovados.

function relatorio (array){ //criando um array
    let aprovados = 0;
    let reprovados = 0;
for (const notas of array)// uso do for of
    if(notas >= 7){ // uso de notas maior ou igual a 7
        aprovados += 1; // contabilizar com +=
    } else {
        reprovados += 1;
    }
    return `Aprovados: ${aprovados} - Reprovados: ${reprovados}`; // uso de crase e cifrão $ para variavel
}

console.log(relatorio([10,8,5,7,9,4,6])); // por fim retorna a função para ser exibida
