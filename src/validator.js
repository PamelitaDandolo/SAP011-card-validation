const validator = { //validator são os dois códigos, maskify e isValid
  
  //começa validação pelo algoritmo de Luhn
  isValid:function(numCard) {//a função usa como parâmetro o numCard que é o número do cartão
    //colocar os números dentro de uma array
    const cardArrays = []; //array vazia para receber as strings do cartão
    let soma = 0; //calcula a soma dos dígitos do cartão

    //passa por cada número do cartão converte em número inteiro
    for (let index = 0; index < numCard.length; index++) {
      const cadaNumero = numCard[index];
      cardArrays.push(parseInt(cadaNumero));
    }


    //a ppartir do penúltimo dígito, multiplica por 2 os números pares
    for (let index = cardArrays.length - 2; index >= 0; index -= 2) {
      const digitoAtual = cardArrays[index] * 2;
      if (digitoAtual > 9) { //se o resultado for maior que 9
        cardArrays[index] = digitoAtual % 10 + 1; //soma o produto para virar 1 dígito
      } else {
        cardArrays[index] = digitoAtual; // ou não faz nada
      }
    }
  
    for (let index = 0; index < cardArrays.length; index++) {//soma todos os dígitos
      soma = soma + cardArrays[index];
    }
    
    if (soma % 10 === 0) {
      return true;
    } else {
      return false;
    }
        
  },

  maskify:function(numCard){  //maskify deu certo, não mexer!
  
    let digitMascarados = ""; //cria uma variável incialmente vazia que armazenará o número do cartão
    if(numCard.length>4){ //verifica se tem mais de 4 dígitos
      const ultimosDigitos = numCard.substr(-4); //subtrai os 4 últimos 
      const digitosOcultos = "#".repeat(numCard.length - 4); //coloca # nos demais
      digitMascarados = digitosOcultos + ultimosDigitos;      
    } else {
      digitMascarados = numCard;
    }
    return digitMascarados
  
  },

};
   
export default validator; 

