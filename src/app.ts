import express, { NextFunction, Request, Response, json } from 'express'
import morgan from 'morgan'
import { ErrorHandler } from './config/error-handler'
import { ContextHandler } from './config/context-handler'
import RootRoutes from './router/v1/index.routes'
import { HeadersHandler } from './config/headers-handler'

const app = express()

app.use(HeadersHandler)
app.use(json({ limit: '50mb' }))
app.use(morgan('dev'))

app.use(ContextHandler)

app.use('/api/v1', RootRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Ruta no encontrada - ${req.originalUrl}`)
  res.status(404)
  next(error)
})

app.use(ErrorHandler)

export default app
