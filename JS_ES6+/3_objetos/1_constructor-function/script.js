// --------------------------------------------------------------------------------------------

/*
OBJETOS: Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.
*/
const carro0 = {
  marca: 'Marca',
  preco: 0,
}
const honda = carro0;
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = carro0;
fiat.marca = 'Fiat';
fiat.preco = 3000;
// carro, fiat e honda apontam para o mesmo objeto.

// --------------------------------------------------------------------------------------------

/*
CONSTRUCTOR FUNCTIONS: Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
*/
function Carro1() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro1();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro1();
fiat.marca = 'Fiat';
fiat.preco = 3000;
// Usar Pascal Case, ou seja, começar com letra maiúscula.

// --------------------------------------------------------------------------------------------

/*
NEW KEYWORD: A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
*/
const honda = new Carro3();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro3.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}

// --------------------------------------------------------------------------------------------

/*
PARÂMETROS E ARGUMENTOS: Podemos passar argumentos que serão utilizados no momento da criação do objeto.
*/
function Carro4(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro4('Honda', 4000);
const fiat = new Carro4('Fiat', 3000);

// --------------------------------------------------------------------------------------------

/*
THIS KEYWORD: O this faz referência ao próprio objeto construído com a Constructor Function.
*/
function Carro5(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro5('Honda', 2000);
// Variáveis dentro da Constructor estão "protegidas".

// --------------------------------------------------------------------------------------------

/*
EXEMPLO REAL: Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
*/
const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
}

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul

// --------------------------------------------------------------------------------------------

/*
CONSTRUCTOR FUNCTION REAL: Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
*/
function Dom() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
}

const lista = new Dom();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();

// --------------------------------------------------------------------------------------------

// LEMBRE-SE DE USAR PARÂMETROS
function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom('ul');
lista.ativo('ativo');

const lastLi = new Dom('li:last-child');
lastLi.ativo('ativo');

// --------------------------------------------------------------------------------------------

// EXERCÍCIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade){
  this.nome = nome,
  this.idade = idade,
  this.andar = () => {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa('João',20);
const pessoa2 = new Pessoa('Bruno',15);
const pessoa3 = new Pessoa('Maria',25);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function ManipularLista(selector) {
  const element = document.querySelector(selector);
  this.nodeList = () => {
    return element;
  };
  this.addClass = (classe) => {
    element.classList.add(classe);
  };
  this.removeClass = (classe) => {
    element.classList.remove(classe);
  };
}
const lista = new ManipularLista("ul");
console.log(lista.nodeList());
lista.addClass("ativo");
lista.removeClass("ativo");