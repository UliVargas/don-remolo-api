import Joi from 'joi'

const props = {
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  imgURL: Joi.string(),
  category: Joi.string()
}

export const createProduct = Joi.object({
  name: props.name.required(),
  description: props.description,
  price: props.price.required(),
  imgURL: props.imgURL.required(),
  category: props.category.required()
})
