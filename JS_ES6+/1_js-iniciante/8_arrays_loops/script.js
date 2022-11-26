// ARRAY: É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames[0] // Switch
videoGames[2] // Xbox
// Acesse um elemento da array utilizando [n]

// --------------------------------------------------------------------------------------------

// MÉTODOS E PROPRIEDADES DE UMA ARRAY
var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
// Existem diversos outros métodos

// --------------------------------------------------------------------------------------------

// FOR LOOP: Fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console
// 3 partes, início, condição e incremento

// --------------------------------------------------------------------------------------------

// WHILE LOOP
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
// O for loop é o mais comum

// --------------------------------------------------------------------------------------------

// ARRAYS E LOOPS
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// --------------------------------------------------------------------------------------------

// BREAK: O loop irá parar caso encontro e palavra break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

// --------------------------------------------------------------------------------------------

// FOREACH: forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
// Parâmetros item, index e array

// --------------------------------------------------------------------------------------------

// EXERCÍCIO
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const copaBR = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i=0;i<copaBR.length;i++){
  console.log(`O Brasil ganhou a copa de ${copaBR[i]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(let i=0;i<frutas.length;i++){
  if(frutas[i] === 'Pera'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let frutasLast;
for(let i=0;i<frutas.length;i++){
  if(frutas[frutas.length - 1]){
    frutasLast = frutas[i];
  }
}
console.log(frutasLast);