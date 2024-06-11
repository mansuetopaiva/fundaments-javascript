//O método estático Object.values() retorna um array com os valores das propriedades enumeráveis do objeto, cujas chaves são strings.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1));  // Expected output: Array ["somestring", 42, false]

  const object3 = {
    1: 'neto',
    3: 312,
    5:{
      hello:[1, 2, 3, "oi"]
    }
  }

  console.log(Object.values(object3)); // Expected output: Array ["neto", 312, Object { hello: Array [1, 2, 3, "oi"] }]

  // Ao usar chaves numéricas, os valores são retornados na ordem numérica das chaves.
const arrayLikeObj2 = { 
    100: "a", 
    2: "b", 
    7: "c" 
};

console.log(Object.values(arrayLikeObj2)); // Expected output: Array ['b', 'c', 'a']

// Usando Object.values() em primitivos
// Argumentos que não são objetos são convertidos em objetos. undefined e null não podem ser convertidos em objetos e lançarão um TypeError. Apenas strings podem ter propriedades enumeráveis próprias, enquanto todas as outras primitivas retornam um array vazio.

// As strings possuem índices como propriedades enumeráveis próprias.
console.log(Object.values("foo")); // Expected output: Array ['f', 'o', 'o']

// Outros tipos primitivos, exceto undefined e null, não possuem propriedades próprias.
console.log(Object.values(100)); // []