const links = document.querySelectorAll('a');
const hrefPagina = document.location.href;
function ativarLink(item){
  const hrefElemento = item.href;
  if(hrefElemento === hrefPagina){
    item.style.backgroundColor = '#000';
    item.style.color = '#fff';
  }
}
links.forEach(ativarLink);