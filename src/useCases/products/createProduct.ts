import { createProductService } from '../../services/product.service'
import ApiError from '../../ApiError/apiError'
import { Product } from '@prisma/client'
const Joi = require('joi')

export default async (productData: Product) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    price: Joi.number().integer().required(),
    description: Joi.string().alphanum().required().min(3).max(50),
    imgURL: Joi.string().required().min(3).max(50)
  })

  if (schema.validate(productData)) {
    throw new Error('Hay datos invalidos, revisar los requisitos')
  } else if (!productData.name) {
    throw new Error('El nombre es requerido')
  } else if (!productData.description) {
    throw new Error('El producto necesita tener una descripcion')
  } else if (!productData.imgURL) {
    throw new Error('debes agregar una imagen al producto')
  }

  return createProductService(productData)
}
