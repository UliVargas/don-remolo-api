import express, { NextFunction, Request, Response, json } from 'express'
import morgan from 'morgan'
import { ErrorHandler } from './config/error-handler'
import { ContextHandler } from './config/context-handler'
import RootRoutes from './router/v1/index.routes'

const app = express()

app.use(json({ limit: '50mb' }))
app.use(morgan('dev'))

app.use('/api/v1', RootRoutes)

app.use(ErrorHandler)

app.use(ContextHandler)

export default app
