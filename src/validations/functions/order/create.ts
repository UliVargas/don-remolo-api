import { NextFunction, Request, Response } from 'express'
import { createOrder } from '../../schemas/order.schema'
import validateData from '../handler'

export default async (req:Request, res:Response, next: NextFunction) => {
  await validateData(createOrder, req.body)
  next()
}
