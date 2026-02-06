// O Object.is() método estático determina se dois valores são iguais 

console.log(Object.is('1', 1)); // Expected output: false
// '1' valor a comparar / 1 valor a ser comparado

console.log(Object.is(NaN, NaN)); // Expected output: true

console.log(Object.is(-0, 0)); // Expected output: false

const obj = {};
console.log(Object.is(obj, {})); // Expected output: false

// O método Object.is() sempre irá retornar um booleano indicando se os dois valores fornecidos são o mesmo valor. Ele é semelhante ao operador de igualdade estrita (===), mas difere em alguns casos, como NaN e -0.