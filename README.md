# Credit Card Validation
## Primeiro projeto do bootcamp da Laboratória realizado em julho de 2023.

### *Projeto em desenvolvimento.*




# Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-Resumo-do-projeto)
* [3. Tecnologias utilizadas](#3-tecnologias-utilizadas)
* [4. Objetivos de aprendizagem](#4-objetivos-de-aprendizagem)
* [5. Considerações gerais](#3-considerações-gerais)
* [6. (#3-considerações-gerais)


***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)



## 2. Resumo do projeto 

A A proposta do projeto é criar um sistema de validação de cartão de crédito onde o Algoritmo de Luhn seja o recurso que confirme se o cartão de crédito usado no pagamento é válido ou não.

Além disso, algumas funcionalidades fazem parte dos critérios de aceitação do projeto como ocultar todos os dígitos de um cartão, exceto os quatro últimos e a realização de testes de validação.

Revisitar conceitos aprendidos no trabalho de pré-admissão da [Laboratória](https://www.laboratoria.la/br) como variáveis, condicionais, conceitos básicos de HTML e CSS e bem como aprofundar e compreender o HTML Semântico e como ele pode facilitar a acessibilidade para usuáries com algum tipo de limitação visual, no CSS aprofundar o modelo de caixa , trabalhar com um boilerplate como base, deployar no site Github Pages.


## 3. Tecnologias Utilizadas
- HTML
- CSS
- Vanilla Javascript

## 4. Começando a criar e desenvolver

Este primeiro projeto foi desafiador, sem praticamente nenhum conhecimento prévio criei uma página para pagamento via cartão de crédito.

A primeira coisa que fiz foi esboçar o visual da página através de um protótipo de baixa fidelidade, esse protótipo foi feito à lápis já que meu processo criativo flui melhor a partir da escrita e do desenho.

![protótipo baixa fidelidade](img/baixa-fidelidade1.png) Esse foi o primeiro esboço onde planejava uma página de boas vindas e uma segunda página com a área para pagamento.

Decidi por manter tudo em uma única página e priorizar meu aprendizado além de cumprir com os criterios estabelecidos para aceitação do mesmo.

 O segundo protótipo de baixa fidelidade ficou dessa forma:
![protótipo baixa fidelidade 2](img/baixa-fidelidade1.png)




3. Desenvolvendo o projeto

A idéia central é a página do site de um estúdio de yoga e terapias onde a usuária pode comprar pacotes de serviços como massagens bem como pagar a mensalidade das aulas regulares.

A usuária digitará os 16 números de seu cartão de crédito em uma caixa que receberá a sequência então clicará no botão "Validar".

Nesta caixa apenas os 4 últimos números do cartão serão exibidos.




* 4. Protótipos

Primeiro foi feito um protótipo de baixa fidelidade:
//colocar o link aqui da foto do protótipo