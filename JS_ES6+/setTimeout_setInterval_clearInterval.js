function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, "1000 milissegundos");

setTimeout(function () {
  console.log("outra forma");
}, 2000);

setTimeout(() => {
  console.log("arrow functions");
}, 3000);

// o setTimeout espera o script terminar para funcionar

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(`${i}s`);
  }, 300 * i);
}

// o this de setTimeout() faz referença ao window, mas usando arrow function muda a referença para o elemento pai, ou seja, de onde está puxando o callback, no exemplo é do btn

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
function handleClick() {
  setTimeout(() => {
    this.classList.add("active");
  }, 1000);
}

// setTimeout é uma vez, mas o setInterval é o tempo todo

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 2000, "Passou +2s");

// clearInterval(var) pode para um intervalo, mas o setInterval precisa ser atribuido a uma variável.

let i = 0;
const meuLoop = setInterval(() => {
  console.log(`${i++} até 15`);
  if (i > 15) {
    clearInterval(meuLoop);
  }
}, 1000);

let e = 0;
const contarAte10 = setInterval(callback, 1000);
function callback() {
  console.log(`${e++} até 10`);
  if (e > 10) {
    clearInterval(contarAte10);
  }
}
