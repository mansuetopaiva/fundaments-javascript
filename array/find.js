/*
O método .find() em JavaScript é usado em arrays para encontrar o primeiro elemento que satisfaz uma condição.

Ele percorre o array e retorna o primeiro item que faz a função de teste retornar true.
Se nenhum elemento satisfizer a condição, ele retorna undefined.
*/

// Exemplo de uso do .find():

const numeros = [1, 2, 3, 4, 5];

// Encontrar o primeiro número par
const primeiroPar = numeros.find(num => num % 2 === 0);

console.log(primeiroPar); // Output: 2

// Exemplo com objetos:

const pessoas = [
  { nome: "Alice", idade: 30 },
  { nome: "Bob", idade: 25 },
  { nome: "Charlie", idade: 35 }
];

// Encontrar a primeira pessoa com idade maior que 30
const pessoaMaisVelha = pessoas.find(pessoas => pessoas.idade > 30);
console.log(pessoaMaisVelha); // Output: { nome: "Charlie", idade: 35 }

/*
O método .find() é muito útil para buscar elementos em arrays, especialmente quando você precisa encontrar um item específico com base em uma condição.
Ele é diferente do .filter(), que retorna um array com todos os elementos que satisfazem a condição, enquanto o .find() retorna apenas o primeiro elemento encontrado.
*/