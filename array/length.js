// Em JavaScript, .length NÃO é uma função, então:
array.length() 
// 👉 Isso vai dar erro.

array.length 


/* 
O que .length faz?

Ele retorna a quantidade de elementos de um array (ou caracteres de uma string).

Exemplo com array:
*/
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length); // Saída: 3

// Exemplo com string:
const texto = "Olá, mundo!";
console.log(texto.length); // Saída: 13

// Exemplo comum com for:
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Aqui usamos .length para saber quantas vezes o loop deve rodar, garantindo que acessamos todos os elementos do array sem ultrapassar seus limites.

/*
Resumo simples:
.length → retorna a quantidade de itens em um array ou caracteres em uma string.
*/