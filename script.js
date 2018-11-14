/*
DOM (HTML)
  - <head> 
    - <meta>
    - <meta>
    - <meta>
    - <title>
    - <script>
  - <body>
    - <p>
*/

const botao = document.querySelector('.botao-rodar');
const menuHamburguer = document.querySelector('.menu-hamburguer');
const quadrado = document.querySelector('.quadrado');
const navMobile = document.querySelector('.nav-mobile');
let inputEmail = document.querySelector('input');

const alterarNavMobile = () => {
  navMobile.classList.toggle('visivel');
};

const rodarQuadrado = () => {
  quadrado.classList.toggle('rodando');
};

menuHamburguer.onclick = alterarNavMobile;
botao.onclick = rodarQuadrado;

inputEmail.onchange = (event) => {
  if (event.target.value.includes('@') && event.target.value.includes('.com')) {
    console.log('É válido');
  }
  else {
    console.log('Nem é');
  }
}