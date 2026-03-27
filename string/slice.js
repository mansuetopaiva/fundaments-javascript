// O método .slice() em JavaScript serve para extrair uma parte de uma string (ou array) sem alterar o original.

// Sintaxe:
string.slice(inicio, fim)

/* 
inicio: posição onde começa (inclusivo)
fim: posição onde termina (exclusivo)
Se não passar o fim, ele vai até o final

🧠 Exemplo básico */

const texto = "JavaScript";

console.log(texto.slice(0, 4)); // "Java"
console.log(texto.slice(4, 10)); // "Script"

/* 
Diferença importante

.slice() →   NÃO altera a string original
Strings em JS são imutáveis

💡 Dica prática

Hoje em dia, para comparar final de string, prefira:

endsWith() →        mais legível
.slice() →          útil quando você precisa manipular partes da string
*/