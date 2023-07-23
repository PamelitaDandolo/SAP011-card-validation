import validator from './validator.js';

console.log(validator);



id="cardNumber"; // caixa do número do cartão
id="pagCardNumber"; //botão de validar o número


const confirmButton = document.getElementById("pagCardNumber"); //liguei o id do botão de pagamento à const.

confirmButton.addEventListener("click",function(event) { //addEventListener "ouve" a ação, no caso o click
event.preventDefault() //preventDeFault() não deixa o click abrir oura página que seria o esperado









});