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