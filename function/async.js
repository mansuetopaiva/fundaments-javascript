/* Agora entra o async/await (forma moderna)

👉 async/await é só uma forma mais limpa de usar Promise.
*/

// Exemplo simples:

const promessa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Terminou!");
  }, 2000);
});

// Usando async/await:

async function executar() {
  const resultado = await promessa;
  console.log(resultado);
}

executar();

/* O que acontece aqui?

1. A função executar é marcada como async, o que significa que ela pode usar await.
2. Quando chegamos em await, a execução da função é pausada até que a promessa seja resolvida.
3. Depois de 2 segundos, a promessa é resolvida com o valor "Terminou!", e esse valor é atribuído à variável resultado.
4. Finalmente, o resultado é impresso no console.

O async/await torna o código mais fácil de ler e escrever, especialmente quando lidamos com várias operações assíncronas em sequência.
*/

// Simulando algo real (API, banco, etc)

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: "Ana", idade: 25 });
    }, 2000);
  });
};

// Usando async/await

async function main() {
  const usuario = await buscarUsuario();
  console.log(usuario.nome);
}

main();

// Tratando erros com try/catch

const buscarDados = () => {
  return new Promise((resolve, reject) => {
    const erro = true;

    if (erro) {
      reject("Erro ao buscar dados");
    } else {
      resolve("Dados carregados");
    }
  });
};

// Usando async/await com tratamento de erros

async function main() {
  try {
    const resultado = await buscarDados();
    console.log(resultado);
  } catch (erro) {
    console.log("Deu erro:", erro);
  }
}

main();

// Exemplo prático com seu pedidos
// Simulando uma função que busca um pedido

const buscarPedidos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pedidos);
    }, 1000);
  });
};

// Usando async/await para buscar pedidos

async function mostrarPedidos() {
  const pedidos = await buscarPedidos();
  console.log(pedidos);
}

mostrarPedidos();

/* Regra de ouro

✔ async → transforma função em Promise
✔ await → espera a Promise terminar
✔ try/catch → trata erro
*/

// Resumo simples 

async function exemplo() {
  try {
    const resultado = await algumaPromise();
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
}

// Async/Await Example

console.log('banana') // primeiro a ser executado
(async () => {
    console.log('tangrina') // terceiro a ser executado
  try {
    console.log('pera') // quarto a ser executado
  const apiKey = await fetch('https://api.example.com/get-api-key') // função HTTP (GET)
    console.log('coco') // quinto a ser executado se a requisição for bem sucedida
  const server = new Express()
  server.use({ apiKey: apiKey }) 
  console.log('limao') // sexto a ser executado se a requisição for bem sucedida
  server.start()
  } catch (error) {
    console.error('caju') // quinto a ser executado se a requisição falhar
  }
  console.log('maca') // setimo a ser executado, independente do resultado da requisição
})();
  console.log('mamao') // segundo a ser executado