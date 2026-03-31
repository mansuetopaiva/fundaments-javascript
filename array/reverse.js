// O método .reverse() em JavaScript é usado para inverter a ordem dos elementos em um array. Ele modifica o array original e retorna o array invertido. Aqui está um exemplo de como usar o .reverse():

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.reverse()); // Saída: [5, 4, 3, 2, 1]
console.log(numeros); // O array original também foi modificado: [5, 4, 3, 2, 1]

// Exemplo com strings
const palavras = ["maçã", "banana", "laranja"];
console.log(palavras.reverse()); // Saída: ["laranja", "banana", "maçã"]

// Exemplo com objetos
const pessoas = [
  { nome: "Alice", idade: 30 },
  { nome: "Bob", idade: 25 },
  { nome: "Charlie", idade: 35 }
];
console.log(pessoas.reverse()); 
// Saída: [{ nome: "Charlie", idade: 35 }, { nome: "Bob", idade: 25 }, { nome: "Alice", idade: 30 }]    