<<<<<<< HEAD
// O que é o DOM

// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
window.innerHeight; // retorna a altura do browser

// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

// --------------------------------------------------------------------------------------------

// DOM

//                 Window
//                   |
//     ----------------------------
//    |              |            |
// Location       Document       ...
//                   |
//                 <html>
//                   |
//           ----------------
//          |               |
//       <head>          <body>
//                          |
//                  ----------------
//                 |               |
//               <h1>          <section>
//                                 |
//                               <h2>
//                                 |
//                                <p>

// --------------------------------------------------------------------------------------------

// WINDOW E DOCUMENT: São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

/*
window.alert('Isso é um alerta 1');
alert('Isso é um alerta 2'); // Funciona
*/

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// --------------------------------------------------------------------------------------------

// NODE: Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

/*
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

const titulo = document.querySelector('h1');
titulo.addEventListener('click', callback);
*/

// ativa a função callback ao click no titulo

// --------------------------------------------------------------------------------------------

// EXERCÍCIO
// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);
// Seleciona o primeiro elemento da página que possua a classe ativo
const classeAtivo = document.querySelector('h1');
console.log(classeAtivo.classList[1])
// Retorne a linguagem do navegador
const navegador = window.navigator.language;
console.log("window.navigator.language: "+navegador)
// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
=======
// O que é o DOM

// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
window.innerHeight; // retorna a altura do browser

// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

// --------------------------------------------------------------------------------------------

// DOM

//                 Window
//                   |
//     ----------------------------
//    |              |            |
// Location       Document       ...
//                   |
//                 <html>
//                   |
//           ----------------
//          |               |
//       <head>          <body>
//                          |
//                  ----------------
//                 |               |
//               <h1>          <section>
//                                 |
//                               <h2>
//                                 |
//                                <p>

// --------------------------------------------------------------------------------------------

// WINDOW E DOCUMENT: São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

/*
window.alert('Isso é um alerta 1');
alert('Isso é um alerta 2'); // Funciona
*/

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// --------------------------------------------------------------------------------------------

// NODE: Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

/*
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

const titulo = document.querySelector('h1');
titulo.addEventListener('click', callback);
*/

// ativa a função callback ao click no titulo

// --------------------------------------------------------------------------------------------

// EXERCÍCIO
// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);
// Seleciona o primeiro elemento da página que possua a classe ativo
const classeAtivo = document.querySelector('h1');
console.log(classeAtivo.classList[1])
// Retorne a linguagem do navegador
const navegador = window.navigator.language;
console.log("window.navigator.language: "+navegador)
// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
>>>>>>> b4fb5087ec402389df0dded87ad438133f64d0eb
console.log(larguraJanela)