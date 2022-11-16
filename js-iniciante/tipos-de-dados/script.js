// 7 TIPOS DE DADOS
// Todos são primitivos exceto os objetos. Primitivos são dados imutáveis.

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// --------------------------------------------------------------------------------------------

//VERIFICAR TIPO DE DADO
var nome = 'André';
console.log(typeof nome);
// retorna string
// typeof null retorna object

// --------------------------------------------------------------------------------------------

// STRING : você pode somar uma string e assim concatenar as palavras. Pode somar números com strings, o resultado final é sempre uma string.
var aString = 'A';
var bString = 'B';
var nomeCompleto = aString + ' ' + bString;

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

// --------------------------------------------------------------------------------------------

// ASPAS DUPLAS, SIMPLES E TEMPLATE STRING

var a0 = 'JavaScript é "super" fácil';
var a1 ="JavaScript é 'super' fácil";
var a2 ="JavaScript é \"super\" fácil";
var a3 =`JavaScript é "super" fácil"`;
// var a4 ="JavaScript é "super" fácil"; // Inválid

// --------------------------------------------------------------------------------------------

// TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols * 2} gols`; // Utilizando Template String
// Você deve passar expressões / variáveis dentro de ${}

// --------------------------------------------------------------------------------------------
// EXERCÍCIO
// Declare uma variável contendo uma string
var stringText1 = 'texto1'
// Declare uma variável contendo um número dentro de uma string
var stringNum = '10'
// Declare uma variável com a sua idade
var varIdade = 22;
// Declare duas variáveis, uma com seu nome
var stringText2;
// e outra com seu sobrenome e some as mesmas
stringText2 = `${stringText1} e texto2`;
// Coloque a seguinte frase em uma variável: It's time
const textX = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof textX);
