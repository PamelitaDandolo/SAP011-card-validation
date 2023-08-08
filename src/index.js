import validator from './validator.js';

const cardNumber = document.getElementById("numCartao");
const botaoEnviar = document.getElementById("enviar");
const msgValidacao = document.getElementById("validacao");




botaoEnviar.addEventListener("click",function() { 
  const numCard = cardNumber.value;  
  if (/^\d$/.test && validator.isValid(numCard)) {  
    msgValidacao.innerHTML = "Cartão Válido!";
  }else{
    msgValidacao.innerHTML = "Cartão Inválido!";
  }

  const validacaoFinal = validator.isValid(numCard);
  document.getElementById("true-false-boolean").innerText = validacaoFinal;

  const digitCamuflados = validator.maskify(numCard); 
  document.getElementById("numeros-mascarados").innerHTML = digitCamuflados;

});




