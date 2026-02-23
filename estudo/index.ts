import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import errorHandler from 'errorhandler'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import next from 'next' // linha 1 a 10 importa pacotes de terceiros, que são instalados via npm ou yarn. (vem do package.json)
import api from './utils/api' 
import emailRegex from './utils/email-regex'
import monitoring from './utils/monitoring/server'
import { isDevelopment, variables } from './utils/environment'
import mailer from './utils/mailer' // linha 11 a 15 importa pacotes de uma pasta local do projeto

const port = parseInt(variables.PORT || '3000', 10)
// const port vai receber o valor de variables.PORT, se existir. Se não existir, vai receber '3000'. Depois, parseInt converte essa string para número. 

const host = variables.HOST || (variables.DYNO ? '0.0.0.0' : '127.0.0.1')
// const host vai receber o valor de variables.HOST, se existir. Se não existir, vai verificar se DYNO existe. Se DYNO existir, host será '0.0.0.0'. Caso contrário, host será '127.0.0.1'.
const server = express()
if (isDevelopment) {
  variables.NEXT_DISABLE_TURBOPACK = '1'
}
// Se estiver em desenvolvimento, desabilita o Turbopack, que é um empacotador de código. Isso pode ser útil para evitar problemas de compatibilidade durante o desenvolvimento.
const app = next({ dev: isDevelopment })
// const esta vai retornar o resultado de next({ dev: isDevelopment }). O next é uma função que recebe um objeto. Nesse caso, estamos passando uma chamada propriedade dev.

monitoring.initialize(variables.MONITORING_API_KEY)
// monitoring.initialize é uma função. Ela recebe como argumento um objeto que é a chave da API de monitoramento, que está armazenada em variables.MONITORING_API_KEY.

mailer.initialize(variables.MAILER_KEY)
// mailer.initialize é uma função. Ela recebe como argumento um objeto que é a chave da API de envio de emails, que está armazenada em variables.MAILER_KEY.

app
  .prepare()
  .then(() => {
    const handle = app.getRequestHandler()
    // app é o resultado da chamada next({ dev: isDevelopment }). Ele tem um método chamado prepare, que é uma função assíncrona.
    //  E then é usado para lidar com a promessa retornada por prepare.
    //  Dentro do then, estamos definindo uma constante handle, que recebe o resultado de app.getRequestHandler(). Que é uma função.
    //  O getRequestHandler é um método do Next.js que retorna uma função para lidar com as requisições HTTP.
      .use(bodyParser.json())
      // .use é uma função do Express. Ela esta chamando bodyParser.json(), que também é uma função.
      .use(bodyParser.urlencoded({ extended: true }))
      // .use é uma função do Express. Ela esta chamando bodyParser.urlencoded(), que também é uma função. O argumento { extended: true } é um objeto.
      .use(compression())
      // .use é uma função do Express. Ela esta chamando compression(), que também é uma função.
      .use(cookieParser())
      // .use é uma função do Express. Ela esta chamando cookieParser(), que também é uma função.
      .use(cors())
      // .use é uma função do Express. Ela esta chamando cors(), que também é uma função.
      .use(errorHandler())
      // .use é uma função do Express. Ela esta chamando errorHandler(), que também é uma função.
      .use(helmet())
      // .use é uma função do Express. Ela esta chamando helmet(), que também é uma função.
      .use(methodOverride())
      // .use é uma função do Express. Ela esta chamando methodOverride(), que também é uma função.
      .use(morgan('dev'))
      // .use é uma função do Express. Ela esta chamando morgan('dev'), que também é uma função.
      .all('/_next/*', (handle))
      // .all é uma função do Express. O primeiro argumento é a rota, que é uma string. O segundo argumento é uma função. 
      .post('/subscribe/:email', api.subscribe)
      // .post é uma função do Express. O primeiro argumento é uma string. O segundo argumento é uma função.
      .post('/submit/:email/:origin', api.submit)
      // .post é uma função do Express. O primeiro argumento é uma string. O segundo argumento é uma função.
      .get('/confirm/:email/:origin/:body', (req, res) =>
        api.confirm(req, res, app),
      )
      // .get é uma função do Express. O primeiro argumento é uma string. O segundo argumento é uma função. A função api.confirm é chamada com os argumentos req, res e app.
      .post(emailRegex, (req, res) => api.verification(req, res, app))
      // .post é uma função do Express. O primeiro argumento é um objeto. O segundo argumento é uma função. A função api.verification é chamada com os argumentos req, res e app.
      .get(emailRegex, (req, res) => app.render(req, res, '/warning', {}))
      // .get é uma função do Express. O primeiro argumento é um objeto. O segundo argumento é uma função. A função app.render é chamada com os argumentos req, res, '/warning' e {}.
      .get('/confirmation', (req, res) => app.render(req, res, '/404', {}))
      // .get é uma função do Express. O primeiro argumento é uma string. O segundo argumento é uma função. A função app.render é chamada com os argumentos req, res, '/404' e {}.
      .get('/verification', (req, res) => app.render(req, res, '/404', {}))
      // .get é uma função do Express. O primeiro argumento é uma string. O segundo argumento é uma função. A função app.render é chamada com os argumentos req, res, '/404' e {}.
      .get('/warning', (req, res) => app.render(req, res, '/404', {}))
      // .get é uma função do Express. O primeiro argumento é uma string. O segundo argumento é uma função. A função app.render é chamada com os argumentos req, res, '/404' e {}.
      .all('*', (req, res) => handle(req, res))
      // .all é uma função do Express. O primeiro argumento é a string '*', que significa todas as rotas. O segundo argumento é uma função. A função handle é chamada com os argumentos req e res.

    monitoring.errorHandler(server)
    // monitoring.errorHandler é uma função. Ela recebe como argumento o (server).

    server.listen(port, host, () =>
      console.log(⁠ > Ready on http://${host}:${port} ⁠),
    )
  })
  // .listen é uma função do Express. Ela recebe como argumentos port, host e uma função.
  .catch((error) => console.error(error))
  // .catch é uma função. Ela recebe como argumento uma função que recebe o erro como parâmetro.
  