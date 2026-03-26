/*
O método .map() em JavaScript é usado para percorrer um array e criar um novo array transformando cada elemento.

Ou seja:

Ele não altera o array original
Ele retorna um novo array com os resultados da função aplicada a cada item
*/

// Sintaxe básica:

array.map((elemento, indice, array) => {
  return novoValor;
});

/*
Parâmetros:

elemento → item atual do array
indice → posição do item (opcional)
array → array original (opcional)
*/

// Exemplo prático: dobrar números

const numeros = [1, 2, 3];

const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // Saída: [2, 4, 6]

// Exemplos com objetos:

const usuarios = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 },
  { nome: "João", idade: 18 }
];

const nomes = usuarios.map(u => u.nome);

console.log(nomes); // Saída: ["Ana", "Carlos", "João"]

/* 
Comparação rápida
        Método	O que faz
.map()          	transforma cada item e retorna um novo array
.find()	            retorna o primeiro item que atende a condição
.filter()       	retorna todos os itens que atendem a condição
.reduce()       	combina os itens em um único valor


Regra fácil de lembrar
.map() →        transformar
.filter() →     filtrar
.find() →       encontrar um
*/