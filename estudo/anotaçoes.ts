import bodyParser from 'body-parser'; // importa todo o pacote body-parser
import { (a, b) } from './math'; // importa a função add do arquivo math.ts

export function add(a: number, b: number): number {
  return a + b;
}

export default function App() {
  return <div>{add(1, 2)}</div>;
}

import abc from './math'; // importa o default do arquivo math.ts

import { isDevelopment, variables } from './utils/environment'
//Aqui está importando dois valores específicos de um arquivo:
//isDevelopment → booleano (true/false)
//variables → objeto com variáveis do ambiente 

const port = parseInt(variables.PORT || '', 10) || 3000
//Define a porta do servidor.
// parseInt é uma função que converte string para número
//Tenta pegar variables.PORT
//Converte para número
//Se não existir → usa 3000

// Mais facil de aprender
- import 
- string
- number 
- boolean
- null
- undefined

// Mais complexos e mais usados
- array
- object
- function


console.log(typeof.get(emailRegex, (req, res) => api.verification(req, res, app)))
// typeof.get → retorna o tipo do valor
// emailRegex → expressão regular para validar email
// (req, res) => api.verification(req, res, app) → função de callback para lidar com a requisição e resposta


