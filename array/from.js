// O método estático Array.from() cria uma nova instância de Array, com cópia superficial, a partir de um objeto iterável ou semelhante a um array

// Converting a string to an array of characters
const str = "Hello";
const arr = Array.from(str);
console.log(arr); // Output: ["H", "e", "l", "l", "o"]

// Converting a NodeList to an array
const nodeList = document.querySelectorAll('p');
const nodesArray = Array.from(nodeList);
console.log(nodesArray); // Output: Array of <p> elements

// Using with a mapping function
const nums = Array.from([1, 2, 3], x => x * 2);
console.log(nums); // Output: [2, 4, 6]
