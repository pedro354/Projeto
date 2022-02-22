//const tag = document.querySelector("valor da tag")
const form = document.querySelector("#formulario"); 
//tag.adicionar um evento ('tipo de botão', função(capturar o evento){})
form.addEventListener('submit', function(e){
    e.preventDefault();                         //previne evento de atualizar página
    console.log('evento previnido');
    setResultado("olá mundo")
})
//O que for enviado aqui será exibido no HTML
function setResultado (mensagem){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    const p = document.createElement('p');      //criando um paragráfo <p>
    p.classList.add('paragrafo-resultado');     //insere uma classe no paragrafo

    p.innerHTML =  'ssss';                      //exibição
    resultado.appendChild(p)                    //insere uma div 
}