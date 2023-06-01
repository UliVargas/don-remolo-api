import { NextFunction, Request, Response } from 'express'
import { GetAllProducts, UpdateProduct, FindById, DeleteProduct, CreateProduct } from '../useCases/products'

export const getAllProductsController = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(await GetAllProducts())
}

export const updateProductController = async (req: Request, res: Response) => {
  const updatedProductResult = await UpdateProduct(req.params.productId, req.body)
  res.status(200).json(updatedProductResult)
}

export const findByIdController = async (req: Request, res: Response) => {
  const findProductById = await FindById(req.params.productId)
  res.status(200).json(findProductById)
}

export const deleteProductController = async (req: Request, res: Response) => {
  const deleteProductById = await DeleteProduct(req.params.productId)
  res.status(200).json(deleteProductById)
}

export const createProductController = async (req: Request, res: Response) => {
  const createProductData = await CreateProduct(req.body)
  res.status(200).json(createProductData)
}
