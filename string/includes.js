// O método .includes() é usado para verificar se uma string contém um determinado trecho.
string.includes(valor)

// Exemplo:
const frase = "JavaScript é muito bom";

console.log(frase.includes("muito")); // true
console.log(frase.includes("ruim")); // false

/* 
O método .includes() é case-sensitive, ou seja, diferencia maiúsculas de minúsculas.
*/

console.log(frase.includes("Muito")); // false
console.log(frase.includes("muito")); // true

/* 
Dica prática: para verificar se uma string começa ou termina com um trecho específico, prefira os métodos .startsWith() e .endsWith() para maior legibilidade.

Comparação rápida

Método	O que faz

includes()	        Procura em qualquer parte
startsWith()	    Verifica o início
endsWith()	        Verifica o final
*/