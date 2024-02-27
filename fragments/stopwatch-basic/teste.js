// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.querySelector("body");
function mudarCor() {
  setInterval(() => {
    /*
    if (!body.classList.contains("ativo")) {
      body.classList.add("ativo");
    } else {
      body.classList.remove("ativo");
    } */
    document.body.classList.toggle("ativo");
  }, 2000);
}
mudarCor();

/*
function mudarCor2() {
  document.body.classList.toggle("activo");
}
setInterval(mudarCor2, 2000);
*/

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const resetar = document.querySelector(".resetar");
let timeM = document.querySelector(".minutos");
let timeS = document.querySelector(".segundos");

function formatarNumeroComZero(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

function criarContador(timeM, timeS) {
  let timeAll; // Variável privada
  let time1 = 0;
  let time2 = 0;

  function iniciarContador() {
    timeAll = setInterval(() => {
      time1++;

      if (time1 == 60) {
        time1 = 0;
        time2++;
      }

      timeM.innerHTML = formatarNumeroComZero(time2);
      timeS.innerHTML = formatarNumeroComZero(time1);
    }, 1000);

    iniciar.setAttribute("disabled", "");
    pausar.removeAttribute("disabled");
  }

  function pausarContador() {
    clearInterval(timeAll);
    iniciar.removeAttribute("disabled");
    pausar.setAttribute("disabled", "");
  }

  function resetarContador() {
    time1 = 0;
    time2 = 0;
    timeM.innerHTML = "00";
    timeS.innerHTML = "00";
  }

  return {
    iniciarContador,
    pausarContador,
    resetarContador,
  };
}

const contador = criarContador(timeM, timeS);

iniciar.addEventListener("click", contador.iniciarContador);
pausar.addEventListener("dblclick", contador.pausarContador);
resetar.addEventListener("click", contador.resetarContador);

// Currying
