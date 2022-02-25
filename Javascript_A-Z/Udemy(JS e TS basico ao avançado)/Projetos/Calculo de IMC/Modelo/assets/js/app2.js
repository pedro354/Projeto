const form = document.querySelector("#formulario");                 //const tag = document.querySelector("valor da tag")
form.addEventListener('submit', function (e) {                        //tag.adicionar um evento ('tipo de botão', função(capturar o evento){})
    e.preventDefault();                                             //previne evento de atualizar página
    // console.log('evento previnido');
    // setResultado("olá mundo")
    const inputPeso = e.target.querySelector('#peso');              //const tagVariavel = evento.target.querySelector('variavel')
    const inputAltura = e.target.querySelector('#altura');          //target qual elemento foi clicado na pagina

    const peso = Number(inputPeso.value);                           //const variavel que ficou no target
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);                       // se (if) o peso é number retorna verdadeiro se diferente retorna peso invalido
        return;                                                     //aplica return para parar
    }

    if (!altura) {
        setResultado('Altura inválida', false);                     //exibirá texto caso peso seja diferente de Number
        return;
    }

    const imc = getImc(peso, altura);                               //recebe peso e altura para realizar o calculo
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} ${nivelImc}.`;

    setResultado(mensagem, true)

});


function getNivelImc(imc) {                                         //função com array[i] para se o imc do calculo acima for maior ou igual a 39.9 retorna a variavel do array com indice
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}


function getImc(peso, altura) {
    const imc = peso / altura ** 2;                             //caculo de indice de massa corporal é igual 
    return imc.toFixed(2);                                      //a peso divido por altura expotencial (**) 2;
}


function setResultado(mensagem, valid) {                        //O que for enviado aqui será exibido no HTML
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = mensagem;
    resultado.appendChild(p)                                    //insere uma div 

    if (valid) {
        p.classList.add('paragrafo-resultado')                  //p.classList.add('paragrafo-resultado');                       //insere uma classe no paragrafo
    } else {
        p.classList.add('paragrafo-invalido');
    }
}


function criaP() {
    const p = document.createElement('p');                      //criando um paragráfo <p>
    //p.innerHTML =  '';                                        //exibição
    return p;
}



/**
 * Funçao setResultado exibe na tela o que estiver dentro de sua função
 * Se valido peso e alturaEm
 * tag p como const igual a sua função 'criaP'
 * 
 * Capturou o formulario o 'form', dai adicionou um evento no formulario que é o evento de submit
 * previniu o default para não atualizar a página
 * 
 * capturou os dados do input
 * convertendo os dados para number, caso avalie falso, retorna com lógica '!'
 * 
 * calculei o imc de peso e altura
 * relacionando getImc e getNivelImc
 * 
 * criando a mensagem com os valores, setando a mensagem 'setResultado'
 * })
 * 
 * função do getNivelImc (imc)
 * criando array com ifs e retornando o nivel[i];
 * }
 * 
 * função getImc o calculo
 * 
 * função para  a criação do paragrafo
 * 
 * função para exibir o resultado
 * 
 * seleciona a div de resultado, zera o html daquele resultado, cria um p, baseando na flag se é verdadeira ou falsa (junto do css)
 * 
 * seta o innetHTML com tag p 
 * 
 */