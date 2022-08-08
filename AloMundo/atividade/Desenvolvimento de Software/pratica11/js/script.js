/* 
document.getElementById("quantidade").addEventListener("keypress", function (e) {
  e.preventDefault();
})
*/
function adicionar() {
  document.getElementById("inputs").innerHTML = "";
  quantidade = parseInt(document.getElementById("quantidade").value);
  for (var i = 1; i <= quantidade; i++) {
    document.getElementById("inputs").innerHTML += "<label for='texto'>" + i + "° texto: </label><input type='text' name='carro_" + i + "' id='texto_" + i + "' placeholder='Digite o nome do texto " + i + "...'></br>";
  }
}

function limpar() {
  document.getElementById("quantidade").value = 1;
  document.getElementById("inputs").innerHTML = "Selecione uma quantidade...";
}

function decisao(e) {
  var operacao = e.value;
  document.getElementById("imprimir").innerHTML = "";
  if (operacao == 1) {
    for (var i = 1; i <= quantidade; i++) {
      document.getElementById("imprimir").innerHTML = "</br>" + serialize(document.forms[0]);
    }
  } else {
    document.getElementById("imprimir").innerHTML = "</br>OK. Isso é tudo.";
  }
}

function serialize(form) {
  if (!form || form.nodeName !== "FORM") {
    return
  }
  var i, r, q = [];
  for (i = form.elements.length - 1; i >= 0; i--) {
    if (form.elements[i].name === "") {
      continue
    }
    switch (form.elements[i].nodeName) {
      case "INPUT":
        switch (form.elements[i].type) {
          case "text":
          case "button":
          case "submit":
            q.push(form.elements[i].name + " = " + encodeURIComponent(form.elements[i].value));
            break;
        }
        break;
      default:
        alert("Algo de Errado");
    }
  }
  r = q.reverse();
  return r.join("</br>")
};