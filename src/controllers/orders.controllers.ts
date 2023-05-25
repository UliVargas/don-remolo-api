import { Request, Response } from 'express'
import addOrders from '../useCases/orders/addOrders'

export const createOrder = async (req:Request, res:Response) => {
  res.status(201).json(await addOrders(req.body))
}
