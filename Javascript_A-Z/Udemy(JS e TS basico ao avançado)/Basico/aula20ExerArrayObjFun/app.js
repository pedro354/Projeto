function meuEscopo(){
    const form = document.querySelector('.form'); //--> seleciona elementos css
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.unshift({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value,
            altura: altura.value
        })


        console.log(pessoas);
        resultado.innerHTML += `<p>Nome: ${nome.value}<br>Sobrenome: ${sobrenome.value} <br>Meu Peso é: ${peso.value}<br>Minha altura é: ${altura.value}</p>`

    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();