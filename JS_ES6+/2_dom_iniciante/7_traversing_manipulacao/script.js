// --------------------------------------------------------------------------------------------

/*
OUTERHTML, INNERHTML E INNERTEXT: Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
*/

const menu = document.querySelector(".menu");

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>"; // a tag vai como texto
menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

// --------------------------------------------------------------------------------------------

/*
TRASVERSING: Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/

const lista0 = document.querySelector(".animais-lista");

lista0.parentElement; // pai
lista0.parentElement.parentElement; // pai do pai
lista0.previousElementSibling; // elemento acima
lista0.nextElementSibling; // elemento abaixo

lista0.children; // HTMLCollection com os filhos
lista0.children[0]; // primeiro filho
lista0.children[--lista0.children.length]; // último filho

lista0.querySelectorAll("li"); // todas as LI's
lista0.querySelector("li:last-child"); // último filho

// --------------------------------------------------------------------------------------------

/*
ELEMENT VS NODE: Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
*/

const lista1 = document.querySelector(".animais-lista");

lista1.previousElementSibling; // elemento acima
lista1.previousSibling; // node acima

lista1.firstChild; // primeiro node child
lista1.childNodes; // todos os node child

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

// --------------------------------------------------------------------------------------------

/*
MANIPULANDO ELEMENTOS: É possível mover elementos no dom com métodos de Node.
*/
const lista2 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

contato.appendChild(lista2); // move lista para o final de contato
contato.insertBefore(lista2, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista2, titulo); // substitui titulo por lista

// --------------------------------------------------------------------------------------------

/*
NOVOS ELEMENTOS: Podemos criar novos elementos com o método createElement()
*/

const animais = document.querySelector(".animais");

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);

// --------------------------------------------------------------------------------------------

/*
CLONAR ELEMENTOS: Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
*/

const titulo1 = document.querySelector("h1");
const titulo2 = document.querySelector("h1");
const novoTitulo = titulo1;
// titulo1, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato0 = document.querySelector(".contato");
contato0.appendChild(cloneTitulo);

// true sinaliza para incluir os filhos

// --------------------------------------------------------------------------------------------

// EXERCÍCIO

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");
copy.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq-lista");
const firstDT = faq.querySelector("dt:first-child");
console.log(firstDT);
// Selecione o DD referente ao primeiro DT
const firstDD = firstDT.nextElementSibling;
console.log(firstDD);
// Substitua o conteúdo html de .faq pelo de .animais
const faqAll = document.querySelector(".faq");
const animaiss = document.querySelector(".animais");
faqAll.replaceChild(animaiss, faq);
