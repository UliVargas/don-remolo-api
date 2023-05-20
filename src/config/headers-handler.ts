import { NextFunction, Request, Response } from 'express'

export const HeadersHandler = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With-, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, DELETE, POST')
    return res.status(200).json({})
  }
  next()
}
