/* 
Promises são muito usadas quando lidamos com operações assíncronas (coisas que demoram um tempo para terminar).
Exemplos comuns:
buscar dados de uma API 🌐
ler arquivos 📄
acessar banco de dados 🗄️
esperar um tempo ⏱️ 
*/

/* O que é uma Promise

Uma Promise é um objeto que representa um valor que ainda vai chegar no futuro.
Ela tem três estados possíveis:
1. Pending (Pendente): A promessa ainda não foi resolvida ou rejeitada.
2. Fulfilled (Cumprida): A promessa foi resolvida com sucesso e tem um valor.
3. Rejected (Rejeitada): A promessa foi rejeitada com um motivo (erro).
*/

// Criando uma Promise

const promessa0 = new Promise((resolve, reject) => {

});

/*
O construtor da Promise recebe uma função que tem dois parâmetros: resolve e reject.
- resolve: chamado quando dar certo.
- reject: chamado quando da errado.
*/

const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Deu tudo certto!")
  } else {
    reject("Deu erro!");
  }
});

/* sucesso = true: a promessa retorna resolve.
sucesso = false: a promessa retorna reject.
*/

// Consumindo uma Promise

promessa
  .then(resultado => {
    console.log(resultado);
  })
  .catch(erro => {
    console.log(erro);
  });

  /* fluxo de uma Promise:

    Promise
         ↓
    then → se deu certo
         ↓
    catch → se deu erro
  */

    // Exemplo mais real

    function buscarUsuario() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({ nome: "Ana", idade: 25 });
    }, 2000);

  });
}

// chamando a função: 

buscarUsuario()
  .then(usuario => {
    console.log(usuario);
  });

  console.log(buscarUsuario()); // Resultado depois de 2 segundos { nome: "Ana", idade: 25 }

  /* Estrutura mental de uma Promise
 Sempre pense assim:

  criar Promise
      ↓
  resolve ou reject
      ↓
  .then()
      ↓
  .catch()
  */

  // Promise Example
console.log('limao') // Primeiro a ser chamado
fetch('https://api.example.com/get-api-key') // função HTTP (GET)
  .then((apiKey) => {
    console.log('maca') // se a requisição for bem sucedida, esse sera o terceiro a ser chamado
    const server = new Express()
    console.log('coco') // quarto a ser chamado
    server.use({ apiKey: apiKey }) 
    server.start()
    console.log('pera') // quinto a ser chamado
  })
  .catch((error) => {
    console.error('caju', error) // se a requisição falhar, esse sera o terceiro a ser chamado
  })
  .finally(() => {
    console.log('uva') // sexto a ser chamado, independente do resultado da requisição
    console.info('manga') // sétimo a ser chamado
  })
console.log('mamao') // segundo a ser chamado

// Promise usando Promise.all
// Executa várias Promises ao mesmo tempo.
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(valores => {
    console.log(valores); // [10, 20, 30]
  });
// Isso é muito usado quando buscamos vários dados ao mesmo tempo.

// Promise esperando várias operações
function dobrar(numero) {
  return new Promise(resolve => {
    resolve(numero * 2);
  });
}

dobrar(5)
  .then(n => dobrar(n))
  .then(n => dobrar(n))
  .then(resultado => {
    console.log(resultado); // 40 (5 → 10 → 20 → 40)
  });


/* Resumo

Promise é um objeto para lidar com operações assíncronas.

 Partes principais:

parte	função
Promise	                    cria promessa
resolve	                    sucesso
reject	                    erro
.then	                      executa se sucesso
.catch	                    executa se erro
.finally	                  executa sempre
.all()	                    espera várias Promises
*/

