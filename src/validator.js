const validator = { 
  
  isValid:function(numCard) {
    const cardArrays = []; 
    let soma = 0; 
    for (let index = 0; index < numCard.length; index++) {
      const cadaNumero = numCard[index];
      cardArrays.push(parseInt(cadaNumero));
    }

    for (let index = cardArrays.length - 2; index >= 0; index -= 2) {
      const digitoAtual = cardArrays[index] * 2;
      if (digitoAtual > 9) { 
        cardArrays[index] = digitoAtual % 10 + 1; 
      } else {
        cardArrays[index] = digitoAtual; 
      }
    }
  
    for (let index = 0; index < cardArrays.length; index++) {
      soma = soma + cardArrays[index];
    }
    if (soma % 10 === 0) {
      return true;
    } else {
      return false;
    }
        
  },

  maskify:function(numCard){ 
    let digitMascarados = ""; 
    if(numCard.length>4){ 
      const ultimosDigitos = numCard.substr(-4);  
      const digitosOcultos = "#".repeat(numCard.length - 4); 
      digitMascarados = digitosOcultos + ultimosDigitos;      
    } else {
      digitMascarados = numCard;
    }
    return digitMascarados
  
  },

};
   
export default validator; 

