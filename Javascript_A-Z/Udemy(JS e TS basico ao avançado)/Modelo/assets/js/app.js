const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){               //adiciona evento do botao, função(e)
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');     //tag+id
    const inputAltura = e.target.querySelector('#altura'); //tag+id

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // se não for numero, será falso retornando inválido
    if(!altura){
        setResultado('Altura inválido', false);
        return;
    }

    if(!peso ){
        setResultado('Peso inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `O seu IMC é de ${imc} ${nivelImc}`

    setResultado(mensagem, true); //se verdade vai imprimir
});

function getNivelImc(imc){
    const nivel = ["Abaixo do Peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
    if(imc >= 39.9)return nivel[5];
    if(imc >= 34.9)return nivel[4];
    if(imc >= 29.9)return nivel[3];
    if(imc >= 24.9)return nivel[2];
    if(imc >= 18.5)return nivel[1];
    if(imc < 18.5)return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, valido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (valido){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML= mensagem;
    resultado.appendChild(p);

}