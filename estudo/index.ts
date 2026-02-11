import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import errorHandler from 'errorhandler'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import next from 'next'
import api from './utils/api' 
import emailRegex from './utils/email-regex'
import monitoring from './utils/monitoring/server'
import { isDevelopment, variables } from './utils/environment'
import mailer from './utils/mailer'

const port = parseInt(variables.PORT || '', 10) || 3000
const host = variables.HOST || (variables.DYNO ? '0.0.0.0' : '127.0.0.1')
const server = express()
if (isDevelopment) {
  variables.NEXT_DISABLE_TURBOPACK = '1'
}
const app = next({ dev: isDevelopment })

monitoring.initialize(variables.MONITORING_API_KEY)
mailer.initialize(variables.MAILER_KEY)

app
  .prepare()
  .then(() => {
    const handle = app.getRequestHandler()

    server
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(compression())
      .use(cookieParser())
      .use(cors())
      .use(errorHandler())
      .use(helmet())
      .use(methodOverride())
      .use(morgan('dev'))
      .all('/_next/*', (req, res) => handle(req, res))
      .post('/subscribe/:email', api.subscribe)
      .post('/submit/:email/:origin', api.submit)
      .get('/confirm/:email/:origin/:body', (req, res) =>
        api.confirm(req, res, app),
      )
      .post(emailRegex, (req, res) => api.verification(req, res, app))
      .get(emailRegex, (req, res) => app.render(req, res, '/warning', {}))
      .get('/confirmation', (req, res) => app.render(req, res, '/404', {}))
      .get('/verification', (req, res) => app.render(req, res, '/404', {}))
      .get('/warning', (req, res) => app.render(req, res, '/404', {}))
      .all('*', (req, res) => handle(req, res))

    monitoring.errorHandler(server)

    server.listen(port, host, () =>
      console.log(⁠ > Ready on http://${host}:${port} ⁠),
    )
  })
  .catch((error) => console.error(error))