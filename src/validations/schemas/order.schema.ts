import Joi from 'joi'

const propsItem = {
  productId: Joi.string(),
  quantity: Joi.number()
}

const props = {
  nameClient: Joi.string(),
  comment: Joi.string(),
  items: Joi.array().items(
    Joi.object({
      productId: propsItem.productId.required(),
      quantity: propsItem.quantity.required()
    })
  )
}

export const createOrder = Joi.object({
  nameClient: props.nameClient.required(),
  comment: props.comment,
  items: props.items.required()
})
