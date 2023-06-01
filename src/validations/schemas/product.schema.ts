import Joi from 'joi'

const props = {
  name: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
  imgURL: Joi.string(),
  categoryId: Joi.string()
}

export const createProduct = Joi.object({
  name: props.name.required(),
  price: props.price.required(),
  description: props.description,
  imgURL: props.imgURL.required(),
  categoryId: props.categoryId.required()
})
