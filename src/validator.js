const validator = {
// recebe primeiro o algoritmo de luhn... tem duas funções
// //colocar numeros dentro de uma array
// //converter array em strings (split)
// //converter strings em numeros (map)
// //inverter a ordem os números com a função (reverse), 
// //identificar os npumeros pares e multiplicar os números por 2
// //somar o produto dos números 
// //somar todos os números do array
// //verificar se a soma dos dígitos é multiplo de 10 (termina em 0)
// //exibir a mensagem de validação (return true ou false)




 

    isValid: function isValid() { // é uma chave: valor - algoritmo de luhn
      
      // Remove todos os caracteres não numéricos do número do cartão.
      const numCardValid = numCard.replace(/\D/g, ''); //só reconhece e armazena números

      // Inicializa a variável "soma" com 0 para calcular a soma dos dígitos.
      let soma = 0;

      // Indica se o dígito atual é o segundo dígito a ser processado.
      let segundoDigito = false;
    
      // Itera através dos dígitos do número do cartão de crédito, começando do último dígito.
      for (let i = numCardValid.length - 1; i >= 0; i--) { 

        // Converte o dígito atual em um número inteiro.
        let digit = parseInt(numCardValid.charAt(i)); //reconhece se estão entre 0 e 9
    
        // Verifica se o dígito atual deve ser multiplicado por 2.
        if (segundoDigito) {
          digit *= 2;
    
          // Se o resultado da multiplicação for maior ou igual a 10, soma os dígitos individualmente.
          if (digit >= 10) {
            digit = digit.toString();
            digit = parseInt(digit.charAt(0)) + parseInt(digit.charAt(1));
          }
        }
    
        // Adiciona o dígito (ou a soma dos dígitos, no caso de multiplicação por 2) à variável "sum".
        soma += digit;
        // Alterna a flag "isSecondDigit" para indicar o próximo dígito.
        segundoDigito = !segundoDigito;
      }
    
      // Retorna um objeto com a validade do número do cartão (true ou false).
      return soma % 10 === 0;
    },
  



    //maskify deu certo, não mexer!
    maskify:function(numCard){  
      //const numCard = 
       let digitMascarados = ""; //cria uma variável incialmente vazia que armazenará o número do cartão
      if(numCard.length>4){ //verifica se tem mais de 4 dígitos
      
        const ultimosDigitos = numCard.substr(-4);
        const digitosOcultos = "#".repeat(numCard.length - 4);
        digitMascarados = digitosOcultos + ultimosDigitos;
      
      } else {
      
        digitMascarados = numCard;
      }
      
      return digitMascarados
      
      }
  };



  export default validator; //maskify tem que estar dentro do validator que é um objeto











