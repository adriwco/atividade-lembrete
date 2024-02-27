// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCEP = document.querySelector('#buscarCEP');
const buttonCEP = document.querySelector('.buttonCEP');
const logradouroCEP = document.querySelector('.logradouroCEP');

const cepAPI = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
  } catch (error) {
    console.error('Erro ao consultar a API:', error);
    return { erro: true };
  }
};

const logradouroValue = (objCEP) => {
  if (objCEP.erro) {
    logradouroCEP.innerText = 'CEP inválido.';
  } else {
    logradouroCEP.innerText = `${objCEP.logradouro}, ${objCEP.bairro}, ${objCEP.localidade} - ${objCEP.uf}`;
  }
};

const handleInputCEPValue = async (e) => {
  e.preventDefault();
  if (inputCEP.value) {
    logradouroValue(await cepAPI(inputCEP.value));
  } else {
    logradouroCEP.innerText = '...';
  }
};

buttonCEP.addEventListener('click', handleInputCEPValue);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const bitcoinSpan = document.querySelector('.bitcoin');
const bitcoinSpan2 = document.querySelector('.bitcoin2');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((btcJson) => {
      bitcoinSpan.innerText = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(btcJson.BRL.buy);
    });
}
// setInterval(fetchBtc, 5000);

function fetchBtc2() {
  fetch('https://api.coincap.io/v2/assets/bitcoin')
    .then((response) => response.json())
    .then((btcJson) => {
      bitcoinSpan2.innerText = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(btcJson.data.priceUsd);
    });
}
// setInterval(fetchBtc2, 5000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadaTag = document.querySelector('.piada');
const buttonPiada = document.querySelector('.buttonPiada');

const piadaAPI = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) {
      throw new Error('Erro na resposta da API: ' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao consultar a API:', error);
    return { erro: true };
  }
};

const randomPiada = async () => {
  const piada = await piadaAPI();
  piadaTag.innerText = piada.value;
};

buttonPiada.addEventListener('click', randomPiada);
