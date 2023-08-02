import validator from './validator.js';

//manipulando o DOM
const cardNumber = document.getElementById("numCartao");
const botaoEnviar = document.getElementById("enviar");
const msgValidacao = document.getElementById("validacao");




botaoEnviar.addEventListener("click",function() { 
  const numCard = cardNumber.value; //importa do id do html os números do cartão  
  if (/^\d{13,19}$/.test(numCard)) { //condicional não ter espaços e ter entre 13 e 16 
    msgValidacao.innerHTML = "Cartão Válido!";
  }else{
    msgValidacao.innerHTML = "Cartão Inválido!";
  }

  const validacaoFinal = validator.isValid(numCard);
  document.getElementById("true-false-boolean").innerText = validacaoFinal;
  console.log(validator);

  const digitCamuflados = validator.maskify(numCard); //tá funcionando, não mexer!
  document.getElementById("numeros-mascarados").innerHTML = digitCamuflados;
  console.log(digitCamuflados); 
});




