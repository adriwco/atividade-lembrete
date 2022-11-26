// OBJETOS: conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true
// Propriedades e métodos consistem em nome (chave) e valor

// --------------------------------------------------------------------------------------------

// MÉTODOS: é uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// Abreviação de area: function() {} para area() {}, no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// --------------------------------------------------------------------------------------------

// ORGANIZAR O CÓDIGO: objetos servem para organizar o código em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // número aleatório de 0 a 1
var pi = Math.PI;
console.log(pi); // 3.14
// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// --------------------------------------------------------------------------------------------

// CRIAR UM OBJETO: um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};
console.log(typeof carro); // 'object'

// --------------------------------------------------------------------------------------------

// DOT NOTATION GET: acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'

// --------------------------------------------------------------------------------------------

// DOT NOTATION SET: substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

// --------------------------------------------------------------------------------------------

// ADICIONAR PROPRIEDADES E MÉTODOS : basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}
menu.height = 50;
menu.position = 'fixed';

// --------------------------------------------------------------------------------------------

// PALAVRA-CHAVE THIS: this irá fazer uma referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu.metadeHeight(); // 25
// sem o this, seria 60

// this irá retornar o próprio objeto

// --------------------------------------------------------------------------------------------

// PROTÓTIPO E HERANÇA: o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
// hasOwnProperty é um método de Object

// --------------------------------------------------------------------------------------------

// EXERCÍCIO
// Crie um objeto com os seus dados
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto que mostre o seu nome completo
const dados = {
  nome : 'Adriano',
  sobrenome : 'Oliveira',
  nomeCompleto(){
    return `${this.nome} ${this.sobrenome}`;
  }
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idadeAnos: 10,
  verHomem(pessoa){
    if(pessoa === 'homem'){
      return 'latir';
    }else{
      return 'nada';
    }
  }
}