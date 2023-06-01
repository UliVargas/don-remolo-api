import { NextFunction, Request, Response } from 'express'
import addOrders from '../useCases/orders/addOrders'
import getAll from '../useCases/orders/getAll'
import editOrder from '../useCases/orders/updateOrder'
import getOneOrder from '../useCases/orders/getOneOrder'

export const createOrder = async (req:Request, res:Response) => {
  res.status(201).json(await addOrders(req.body))
}

export const getAllOrders = async (req:Request, res:Response, next:NextFunction) => {
  res.status(200).json(await getAll())
}

export const updateOrder = async (req:Request, res:Response, next:NextFunction) => {
  const data = {
    idOrder: req.params.idOrder,
    order: req.body
  }
  res.status(200).json(await editOrder(data))
}

export const getOneOrderById = async (req:Request, res:Response, next:NextFunction) => {
  const { params } = req
  res.status(200).json(await getOneOrder(params.idOrder))
}
