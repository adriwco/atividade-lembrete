// --------------------------------------------------------------------------------------------

/*
OBJECT: Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
*/
const carro = {
  marca: "Ford",
  ano: 2018,
};

const pessoa = new Object({
  nome: "André",
  idade: 28,
});

// --------------------------------------------------------------------------------------------

/*
MÉTODOS DE OBJECT: Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
*/
const carro1 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro1);
honda.init("Honda").acelerar();

// --------------------------------------------------------------------------------------------

/*
Object.assign(): Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo. Se a propriedade tiver o mesmo nome vai substituir o valor do alvo.
*/
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

// --------------------------------------------------------------------------------------------

/*
Object.defineProperties(): Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
*/
const moto1 = {};
Object.defineProperties(moto1, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});
// configurable e writable por padrao é false...

moto1.rodas = 4;
delete moto1.capacete;
moto1;
// {rodas: 2}

// Existe também o Object.defineProperty, para uma propriedade única.

// --------------------------------------------------------------------------------------------

/*
get e set: É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
*/
const moto1 = {};
Object.defineProperties(moto1, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    },
  },
});

moto1.velocidade = 200;
moto1.velocidade;
// Velocidade 200

// --------------------------------------------------------------------------------------------

/*
Object.getOwnPropertyDescriptors(obj): Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
*/
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

// --------------------------------------------------------------------------------------------

/*
Object.keys(obj), Object.values(obj) Object.entries(obj): Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
*/
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro3 = {
  marca: "Ford",
  ano: 2018,
};
Object.keys(carro3);
// ['marca', 'ano']
Object.values(carro3);
// ['Ford', 2018]
Object.entries(carro3);
// [['marca', 'Ford'], ['ano', 2018]]

// --------------------------------------------------------------------------------------------

/*
Object.getOwnPropertyNames(obj): Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
*/
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro4 = {
  marca: "Ford",
  ano: 2018,
};
Object.getOwnPropertyNames(carro4);
// ['marca', 'ano']

// --------------------------------------------------------------------------------------------

/*
Object.getPrototypeOf() e Object.is(): Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
*/
const frutas = ["Banana", "Pêra"];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(""); // String

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];

Object.is(frutas1, frutas2); // false

// --------------------------------------------------------------------------------------------

/*
Object.freeze(), Object.seal(), Object.preventExtensions(): Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
*/
const carro5 = {
  marca: "Ford",
  ano: 2018,
};
Object.freeze(carro5);
Object.seal(carro5);
Object.preventExtensions(carro5);

Object.isFrozen(carro5); // true
Object.isSealed(carro5); // true
Object.isExtensible(carro5); // false

// --------------------------------------------------------------------------------------------

/*
Propriedades e Métodos do Protótipo: Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
*/
const frutas3 = ["Banana", "Uva"];
frutas3.constructor; // Array

const frase = "Isso é uma String";
frase.constructor; // String

// --------------------------------------------------------------------------------------------

/*
{}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop'): Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
*/
const frutas4 = ["Banana", "Uva"];

frutas4.hasOwnProperty("map"); // false
Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

// --------------------------------------------------------------------------------------------

/*
{}.ISPROTOTYPEOF(VALOR): Verifica se é o protótipo do valor passado.
*/
const frutas5 = ["Banana", "Uva"];

Array.prototype.isPrototypeOf(frutas5); // true

// --------------------------------------------------------------------------------------------

/*
{}.TOSTRING(): Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
*/
const frutas6 = ["Banana", "Uva"];
frutas6.toString(); // 'Banana,Uva'
typeof frutas6; // object
Object.prototype.toString.call(frutas6); // [object Array]

const frase1 = "Uma String";
frase1.toString(); // 'Uma String'
typeof frase1; // string
Object.prototype.toString.call(frase1); // [object String]

const carro6 = { marca: "Ford" };
carro6.toString(); // [object Object]
typeof carro6; // object
Object.prototype.toString.call(carro6); // [object Object]

const li = document.querySelectorAll("li");
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]

// --------------------------------------------------------------------------------------------

// EXERCÍCIOS
// Crie uma função que verifique
// corretamente o tipo de dado
const verificarTypeDate = (alvo) => {
  return Object.prototype.toString.call(alvo);
};
verificarTypeDate({});

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});
// Object.defineProperty(pessoa, "endereco", { enumerable: false });

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
Object.getOwnPropertyNames(String.prototype);
Object.getOwnPropertyNames(Array.prototype);
// --------------------------------------------------------------------------------------------

/*
Object.create(obj, defineProperties)
Object.assign(alvo, obj1, obj2)
Object.defineProperties(alvo, propriedades)
Object.getOwnPropertyDescriptors(obj)
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Object.getOwnPropertyNames(obj)
Object.getPrototypeOf()
Object.is()
Object.freeze()
Object.seal()
Object.preventExtensions()
{}.hasOwnProperty('prop')
{}.propertyIsEnumerable('prop')
{}.toString()
Object.prototype.toString.call(valor)
*/