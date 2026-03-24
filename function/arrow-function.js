// Arrow function (função de seta) é uma forma mais curta e moderna de escrever funções em JavaScript.

// Forma normal:
function soma(a, b) {
  return a + b;
}

// Arrow function:
const somaArrow = (a, b) => {
  return a + b;
};

/* Forma simplificada (mais usada)
Quando tem apenas uma linha, você pode remover {} e return:
*/

// Se a função tiver apenas uma expressão, podemos omitir as chaves e o return:
const somaArrowCurta = (a, b) => a + b;

// Exemplo de uso:
console.log(soma(2, 3)); // 5
console.log(somaArrow(2, 3)); // 5
console.log(somaArrowCurta(2, 3)); // 5

// Exemplo simples:
// Ver se é par:
const par = (num) => num % 2 === 0;

//Usando com arrays (muito importante)
//Exemplo com .map()
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6]

//Exemplo com .filter()
const numbrs = [10, 15, 20, 25, 5, 45];
const maioresQue15 = numbrs.filter(n => n > 15);
console.log(maioresQue15); // [20, 25, 45]

/*
    Diferença importante (this)

Arrow function NÃO tem seu próprio this.

Isso significa que ela usa o this do lugar onde foi criada.

👉 Exemplo simples: 
*/
const pessoa = {
  nome: "Ana",
  falar: () => {
    console.log(this.nome);
  }
};

pessoa.falar(); // undefined
// Aqui dá undefined porque arrow function não cria seu próprio this, então ele tenta acessar this.nome no contexto global, onde nome não existe.

/*
Quando usar arrow function?
Use quando quiser:

funções curtas

callbacks (map, filter, find)

código mais limpo
*/


/* Resumo rápido

✔ Arrow function:

é mais curta

usa " => " 

pode omitir return

não tem this próprio
*/

// Comparação com outras formas de função:

//  1. 
function exemple (parametro) {
  // código
}
//  2. Função anônima (function expression):
const exemple2 = function() {
  // código
}

//  3. Arrow function:
const exemple3 = () => {
  // código
}

