import validator from './validator.js';


const cardNumber = document.getElementById("numCartao"); //caixa que recebe os números do cartão
const pagCardNumber = document.getElementById("enviar"); // botão de pagamento
const validCard = document.getElementById("cartaoValido"); // mensagem de validação
const emptySpace = document.getElementById("espacoVazio");// avisar espaço vazio


//encontrei uma outra forma de validar o cartão
function isValid(cardNumber) {

    cardNumber = cardNumber.replace(/\s/g, '') //remove todos os espaços em branco e substitui por string vazia

    if (!/^\d+$/.test(cardNumber)) { //lá no começo dos parênteses tem um ! que denota negação de toda a ação seguinte
        return false;                  //verifica se o cartão possui números de [0-9], se não houver então retorna false
      }

      if (cardNumber.length === 16) { //se tiver 16 números retorna true portanto é válido
        return true
      }
    };


pagCardNumber.addEventListener("click", function() { //chamei a const pagCardNumber que é o botão de validar

const cardNumber = /*validator.*/ isValid(cardNumber); //a const chama o algoritmo de luhn em cima do número do cartão
if (cardNumber === true) {      //a condição para a função ser verdadeira é que o número do cartão seja válido pelo algoritmo avisa dentro do
validCard.innerHTML = /*value +*/ "Seu CARTÃO É VÁLIDO!" //innerHTML é onde vai aparecer se é válido ou não através do id=cartaoValido
} else { //ou, caso a sequência numérica não seja compatível com o algoritmo a mensagem de inválido é disparada no html tb
    validCard.innerHTML = /*value*/ + " Seu CARTÃO É INVÁLIDO! Certifique-se de ter digitado os números corretamente."
}
})

//falta o algoritmo de luhn e o código que oculta os caracteres


console.log(validator);