import Observer from "./observer.js";

const input = document.querySelector(".js-input");
const p1 = document.querySelector(".js-p1");
const p2 = document.querySelector(".js-p2");
const p3 = document.querySelector(".js-p3");
const cadastrarP1 = document.querySelector(".js-subscribe-p1");
const cadastrarP2 = document.querySelector(".js-subscribe-p2");
const cadastrarP3 = document.querySelector(".js-subscribe-p3");
const removerP1 = document.querySelector(".js-unsubscribe-p1");
const removerP2 = document.querySelector(".js-unsubscribe-p2");
const removerP3 = document.querySelector(".js-unsubscribe-p3");
const observer = new Observer();

const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

cadastrarP1.addEventListener('click', () => observer.cadastrar(updateP1));
removerP1.addEventListener('click', () => observer.remover(updateP1));
cadastrarP2.addEventListener('click', () => observer.cadastrar(updateP2));
removerP2.addEventListener('click', () => observer.remover(updateP2));
cadastrarP3.addEventListener('click', () => observer.cadastrar(updateP3));
removerP3.addEventListener('click', () => observer.remover(updateP3));

observer.cadastrar(updateP1);
observer.cadastrar(updateP2);
observer.cadastrar(updateP3);

input.addEventListener('keyup', e =>{
    observer.notificar(e.target.value);
})
