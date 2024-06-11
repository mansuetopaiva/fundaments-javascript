// O Object.keys() método estático retorna uma matriz de nomes de propriedades enumeráveis ​​com chave de string do próprio objeto.

// Retorna um Array de string do próprio objeto

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1)); // Expected output: Array ["a", "b", "c"]
  

  const object2 = {
    d: 'neto',
    e: 312,
    false:{
      hello:[1, 2, 3, "oi"]
    }
  }

  console.log(Object.keys(object2)); // Expected output: Array ["d", "e", "false"]

  const object3 = {
    1: 'neto',
    3: 312,
    5:{
      hello:[1, 2, 3, "oi"]
    }
  }

  console.log(Object.keys(object3)); // Expected output: Array ['1', '3', '5']