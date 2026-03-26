/* O que é import e export?

Eles servem para:

export → tornar algo disponível fora do arquivo
import → usar algo de outro arquivo

👉 Ou seja: você divide o código em partes(módulos) e depois os importa onde precisar
*/

// Export nomeado (mais comum):

export function soma(a, b) {
  return a + b;
}

export const PI = 3.14;

// Importando em outro arquivo:

import { soma, PI } from "./funcoes.js";

console.log(soma(2, 3)); // Saída: 5
console.log(PI); // Saída: 3.14

// Export default (muito usado) - Você pode exportar um valor principal

export default function mensagem() {
  console.log("Olá!");
}

// Importando o default:
import mensagem from "./mensagem.js";

mensagem(); // Saída: Olá!

// Aqui NÃO usa {}

/*
 Diferença importante
Tipo	                Como importar
Export nomeado	        import { nome }
Export default	        import qualquerNome


Múltiplos exports */

export const nome = "Ana";
export const idade = 25;

// Importando ambos:
import { nome, idade } from "./dados.js";

console.log(nome); // Ana
console.log(idade); // 25

// Exemplo real com seu estilo de dados e pedidos:

// arquivo pedidos.js
export const pedidos = [
  { id: 1, item: "Pizza", quantidade: 2 },
  { id: 2, item: "Hambúrguer", quantidade: 1 },
];

// arquivo main.js
import { pedidos } from "./pedidos.js";

console.log(pedidos);
/*
Saída:
[
  { id: 1, item: "Pizza", quantidade: 2 },
  { id: 2, item: "Hambúrguer", quantidade: 1 }
]
*/

// Em resumo:
// Import e export são usados para organizar o código em módulos, permitindo que você compartilhe funções, objetos ou valores entre arquivos de forma fácil e clara.