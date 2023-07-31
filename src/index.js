import validator from './validator.js';

//manipulando o DOM
const botaoEnviar = document.getElementById("enviar");
const cardNumber = document.getElementById("numCartao");
const msgValidacao = document.getElementById("validacao");




botaoEnviar.addEventListener("click",function() { 
 const numCard = cardNumber.value; //importa do id do html os números do cartão  
  if (/^\d{13,19}$/.test(numCard)) { //condicional para validar é não ter espaços e ter entre 13 e 16 (quando eu tiro o ! acusa um erro)
  msgValidacao.innerHTML = "Cartão Válido!";

  }else{

  msgValidacao.innerHTML = "Cartão Inválido!";
}

//const validacaoFinal = validator.isValid(numCard);

const digitCamuflados = validator.maskify(numCard); //tá funcionando, não mexer!
console.log(digitCamuflados); //
});


 

console.log(validator);


//fazer a lógica para ver se o cartão é válido
// if (!/^\d{13,19}$/.test(numCard)) { //parâmetro para verificar se o numCard é válido, o que é verdadeiro já está aqui neste parâmetro
//   submit.textContent = " Digite os números."; //
//   submit.classList.add("error"); // pesquisar classlist
//   return;
// }