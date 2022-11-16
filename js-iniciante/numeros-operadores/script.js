// NÚMEROS
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
var exp = 2e-10; // 20000000000
// Precisão para até 15 digito, após isso ocorre arredondamento.

// --------------------------------------------------------------------------------------------

// OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150 adiçao
var subtracao = 100 - 50; // 50 subtraçao
var multiplicacao = 100 * 2; // 200 multiplicaçao
var divisao = 100 / 2; // 50 divisao
var expoente = 2 ** 4; // 2.2.2.2 = 16 expoente
var modulo = 14 % 5; // 4  restante inteiro do dividendo
// Lembrando que soma + em Strings serve para concatenar

// --------------------------------------------------------------------------------------------

var soma = '100' + 50; // 10050 (string)
var subtracao = '100' - 50; // 50 (Number)
var multiplicacao = '100' * '2'; // 200 (Number) 
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
// É possível verificar se uma variável é NaN ou não com a função isNaN()
// NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

// --------------------------------------------------------------------------------------------

// A ORDEM IMPORTA : Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão

// --------------------------------------------------------------------------------------------

// OPERADORES ARITMÉTICOS UNÁRIOS (não binários)
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6
var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x

//O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

// * 1 ou *(-1)
var idade = '28'; 
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// --------------------------------------------------------------------------------------------

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total) // 35
// Crie duas expressões que retornem NaN
var n1 = +'a';
var n2 = '2a';
var n3 = n2 / 2;
console.log(n1);
console.log(n3);

// Somar a string '200' com o número 50 e retornar 250
var somarString = +"200" + 50;
console.log(somarString);
// Incremente o número 5 e retorne o seu valor incrementado
var increNum = 5;
console.log(++increNum);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var pesoA = numero / 2;
console.log(pesoA + unidade)
