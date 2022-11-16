// var, let ou const : diferença de escopo
// DRY (Don't repeat yourself)
var nome = 'Oi';
console.log(nome);
var idade = 28;
console.log(idade, nome);
var sobrenome = 'teste', cidade  = 'teste0';
// sintaxe: palavra reservada, nome, sinal de igual e valor.
var semDefinir; // retorna undefined

// --------------------------------------------------------------------------------------------

/* Regras de nome 
- Podem iniciar com $, _, letras. Não inicia com números.
- Case sensitive : nome é diferente de Nome
- Não utilzar palavras reservadas, acentos e espaços.
- Camel case : ex -> abrirModal
- variavel repetida retorna "Identifier 'nome' has already been declared"
*/

// --------------------------------------------------------------------------------------------

// console.log(varNaoDefinida);
// retorna nome is not defined

// --------------------------------------------------------------------------------------------

// Hoisting: são movidas para cima do código, porém o valor atribuído não pe movido.
console.log(nomeA);
var nomeA = "A";
// retorna undegined
var nomeB = "B";
console.log(nomeB)
// retorna B

// --------------------------------------------------------------------------------------------

// Mudar valor atibuído: É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

// const possuiFaculdade = true;
// possuiFaculdade = false;
// Retorna um erro

// --------------------------------------------------------------------------------------------

//EXERCÍCIO
const nomeEx = 'Adriano', idadeEx = 22, comidaEx = 'pizza';
let favoritaEx;
favoritaEx = 'pizza com calabresa';
var teste1Ex, teste2Ex, teste3Ex, teste4Ex, teste5Ex;
console.log(nomeEx, idadeEx, favoritaEx);