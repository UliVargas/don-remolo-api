import { NextFunction, Request, Response } from 'express'
import { GetAllProducts } from '../useCases/products'

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  res.req.body = await GetAllProducts()
  next()
}
