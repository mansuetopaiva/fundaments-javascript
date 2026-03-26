// O método .reduce() em JavaScript é um dos mais poderosos — ele serve para transformar um array inteiro em um único valor.

 /*
    Ideia principal

    Ele “reduz” vários valores a um só resultado

    Exemplos comuns:

    somar números
    juntar dados
    criar objetos
    contar valores
*/

// Sintaxe básica;

array.reduce((acumulador, elemento) => {
  return novoValor;
}, valorInicial);

/*
Parâmetros:
acumulador → guarda o resultado parcial
elemento → item atual
valorInicial → valor inicial do acumulador
*/ 

// Exemplo prático: somar números

const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(soma); // Saída: 10 

// Exemplo 2: Somar preços de produtos

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 }
];

const total = produtos.reduce((acc, produto) => {
  return acc + produto.preco;
}, 0);

console.log(total); // Saída: 3150  

// Exemplo 3 — Agrupar dados (🔥 importante)

const pedidos = [
  { cliente: "Ana", total: 100 },
  { cliente: "Carlos", total: 200 },
  { cliente: "Ana", total: 50 }
];

const resultado = pedidos.reduce((acc, pedido) => {
  if (!acc[pedido.cliente]) {
    acc[pedido.cliente] = 0;
  }
  acc[pedido.cliente] += pedido.total;
  return acc;
}, {});

console.log(resultado); // Saída: { Ana: 150, Carlos: 200 }

/*
Comparação com outros métodos
Método	                O que faz
.forEach()	            percorre e executa
.map()	                transforma array
.filter()	            filtra
.reduce()	            transforma em um único valor


    Regra de ouro

    Se você pensar:

    “quero transformar isso tudo em um resultado só”

    provavelmente é .reduce()


    Dica de entrevista

.reduce() é muito usado para:

somas
contadores
agrupamentos
transformar array → objeto
*/

