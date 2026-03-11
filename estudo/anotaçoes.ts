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
/* Aqui está importando dois valores específicos de um arquivo:
  isDevelopment → booleano (true/false)
  variables → objeto com variáveis do ambiente */

const port = parseInt(variables.PORT || '', 10) || '3000';
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


const a = {}
const b = '{}'
const c = []
const d = [0,3,4,5,6]
const e = ['caju','banana']
const f = [{}, {a:'caju'},{b:'banana'},{c:'laranja'}]
const g = function () {return {}}
const h = function () {return ''}
const i = function() {return 0}
const j = function() {return 0}()
const l = () => ''
const m = (() => {return {}})
const n = (() => {return {}})()
const o = () => []          
const p = () => undefined
const q = [() => ({}),function(){return undefined}]

console.log(g());
console.log(typeof f[2].b)
console.log(typeof n)
console.log(typeof q[1]())
console.log(typeof h) 