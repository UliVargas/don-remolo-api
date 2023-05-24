import { NextFunction, Request, Response } from 'express'
import { GetAllProducts, UpdateProduct } from '../useCases/products'

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(await GetAllProducts())
}

export const updateProduct = async (req: Request, res: Response) => {
  const updatedProductResult = await UpdateProduct(req.params.productId, req.body);
  res.status(200).json(updatedProductResult);
}