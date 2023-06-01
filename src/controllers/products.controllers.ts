import { NextFunction, Request, Response } from 'express'
import { GetAllProducts, UpdateProduct, FindById, DeleteProduct } from '../useCases/products'
import { createProductService } from '../services/product.service'

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(await GetAllProducts())
}

export const updateProduct = async (req: Request, res: Response) => {
  const updatedProductResult = await UpdateProduct(req.params.productId, req.body)
  res.status(200).json(updatedProductResult)
}

export const findById = async (req: Request, res: Response) => {
  const findProductById = await FindById(req.params.productId)
  res.status(200).json(findProductById)
}

export const deleteProduct = async (req: Request, res: Response) => {
  const deleteProductById = await DeleteProduct(req.params.productId)
  res.status(200).json(deleteProductById)
}

export const createProductController = async (req: Request, res: Response) => {
  const createProductData = await createProductService(req.body)
  res.status(200).json(createProductData)
}
