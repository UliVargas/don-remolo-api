import { NextFunction, Request, Response } from 'express'
import { createProduct } from '../../schemas/product.schema'
import validateData from '../handler'
import { createProductController } from '../../../controllers/products.controllers'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateData(createProduct, req.body)
    next()
  } catch (error) {
    res.status(400).json({ error: 'MISSING_DATA' })
  }
}
