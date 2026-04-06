/* 
O método .forEach() em JavaScript é usado para percorrer todos os elementos de um array, executando uma função para cada item.

📌 Características principais
Percorre todos os elementos
Não retorna um novo array
Serve mais para executar ações (ex: imprimir, alterar algo externo)

Sintaxe básica:
*/

    array.forEach((elemento, indice, array) => {
  // ação a ser executada
});

// Exemplo simples:

const numeros = [1, 2, 3];

numeros.forEach(num => {
  console.log(num); // Saída: 1, depois 2, depois 3
});

// Exemplo com índice:

const frutas = ["maçã", "banana", "uva"];

frutas.forEach((fruta, index) => {
  console.log(index, fruta); // Saída: 0 "maçã", depois 1 "banana", depois 2 "uva"
});

/* 
⚠️ Importante

Diferente do .map():
*/ 
const resultado = numeros.forEach(num => num * 2);

console.log(resultado); // undefined

// Multiplicar por 2.

const numeros2 = [1, 2, 3, 4];
const resultado2 = [];

numeros2.forEach(num => {
  resultado2.push(num * 2);
});

console.log(resultado2); // [2, 4, 6, 8]

// Somar valores de um array:

const numeros3 = [10, 20, 30];
let soma = 0;

numeros3.forEach(num => {
  soma += num;
});

console.log(soma); // 60

// 

// .forEach() não retorna nada (undefined)

const carrinho = [
  { produto: "Notebook", preco: 3000 },
  { produto: "Mouse", preco: 100 },
  { produto: "Teclado", preco: 200 }
];

let total = 0;

carrinho.forEach(item => {
  total += item.preco;
});

console.log(total); // 3300

/*
 Quando usar?

Use .forEach() quando você quer:

Mostrar dados no console
Atualizar algo fora do array
Executar efeitos colaterais

 Quando NÃO usar

        Se você quer:

transformar dados →          use .map()
filtrar dados →              use .filter()
encontrar algo →             use .find()

 Resumo
.forEach() →                percorre e executa ação
.map() →                    transforma
.filter() →                 filtra
.find() →                   encontra 
*/