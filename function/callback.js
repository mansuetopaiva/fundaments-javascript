/* O que é callback?

Um callback é uma função passada como argumento para outra função, que será executada depois.

👉 Em outras palavras:
“executa isso quando terminar”
*/
function saudacao(nome, callback) {
  console.log("Olá " + nome);
  callback();
}

function despedida() {
  console.log("Tchau!");
}

saudacao("Ana", despedida); // Saída: Olá Ana
                            //         Tchau!
// despedida é o callback que será executado depois de saudacao terminar.

// Onde callbacks são mais usados?
// 1. Em eventos (MUITO comum)
document.addEventListener("click", () => {
  console.log("Clicou!");
});
/*
✔ A função dentro é uma callback
✔ Executa quando o evento acontece
*/ 

// 2. Funções assíncronas (ex: setTimeout)
setTimeout(() => {
  console.log("Executou depois de 2s");
}, 2000);
// ✔ A função é executada depois de 2 segundos

// 3. Métodos de array
// forEach()
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((num) => {
  console.log(num);
});
// ✔ A função é chamada para cada elemento do array

// map()
const dobrados = [1, 2, 3].map(n => n * 2);

// filter()
const pares = [1, 2, 3, 4].filter(n => n % 2 === 0);

// Em resumo:
// Callbacks são funções que permitem executar código depois de uma ação ou evento acontecer, muito comuns em JavaScript para lidar com eventos e operações assíncronas.

// Exemplo com seu pedidos
pedidos.forEach(pedido => {
  console.log(pedido.cliente);
});
// pedido => {console.log(pedido.cliente)} é o callback

// Callback assíncrona (estilo antigo)
function buscarDados(callback) {
  setTimeout(() => {
    callback("Dados carregados");
  }, 2000);
}

buscarDados((resultado) => {
  console.log(resultado);
});

// Problema: Callback Hell 😵
buscar1(() => {
  buscar2(() => {
    buscar3(() => {
      console.log("Fim");
    });
  });
});

/* Código fica difícil de ler

✔ Por isso usamos:

Promises
async/await

  Resumo simples

✔ Callback = função passada como argumento
✔ Executa depois
✔ Muito usada em:

eventos
setTimeout
arrays (map, filter, forEach)
código assíncrono */

// Regra mental, se você ver isso
algumaFuncao(() => {})
// isso é um callback