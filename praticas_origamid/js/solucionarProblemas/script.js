const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event){
  const principal = document.querySelector('#imagem-principal');
  const clicada = event.currentTarget;
  // principal.setAttribute('src', clicada.getAttribute('src'));
  principal.src = clicada.src;
  principal.alt = clicada.alt;
}

function galeriaClique(imagem){
  imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);