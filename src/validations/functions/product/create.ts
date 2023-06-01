import { NextFunction, Request, Response } from 'express'
import { createProduct } from '../../schemas/product.schema'
import validateData from '../handler'

export default async (req: Request, res: Response, next: NextFunction) => {
  await validateData(createProduct, req.body)
  next()
}
