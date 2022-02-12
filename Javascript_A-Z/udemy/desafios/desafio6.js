function interregotario (){
    let numSim = 0;
    let pergunta1 = prompt("Telefonou para a vitima?");
    let pergunta2 = prompt("Esteve no local do crime?");
    let pergunta3 = prompt("Mora perto da vitima?");
    let pergunta4 = prompt("Devia para a vitima?");
    let pergunta5 = prompt("Já trabalhou com a vitima?");

    if(pergunta1 === "sim"){//caso a pegunta 1 seja sim, classifica como 1 ponto
        numSim += 1;//recebe 1 ponto
    }
    if(pergunta2 === "sim"){//caso a pegunta 1 seja sim, classifica como 1 ponto
        numSim += 1;
    }
    if(pergunta3 === "sim"){//caso a pegunta 1 seja sim, classifica como 1 ponto
        numSim += 1;
    }
    if(pergunta4 === "sim"){//caso a pegunta 1 seja sim, classifica como 1 ponto
        numSim += 1;
    }
    if(pergunta5 === "sim"){//caso a pegunta 1 seja sim, classifica como 1 ponto
        numSim += 1;
    }
    return numSim; // retorna a classificação
}

function classifica(numSim){
    if(numSim === 5){
        console.log("Assasino");
    } else if (numSim === 3 || numSim === 4){
        console.log("Cumplice");
    } else if (numSim === 2){
        console.log("Suspeito");
    }else{
        console.log("inocente")
    }
}

classifica(interregotario());// retorna interregotario captar as perguntas para a função respostas para a classificação do interrogado
