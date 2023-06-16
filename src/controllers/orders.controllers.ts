import { NextFunction, Request, Response } from 'express'
import addOrders from '../useCases/orders/addOrders'
import getAll from '../useCases/orders/getAll'
import editOrder from '../useCases/orders/updateOrder'
import getOneOrder from '../useCases/orders/getOneOrder'

export const createOrder = async (req:Request, res:Response) => {
  res.status(201).json(await addOrders(req.body))
}

export const getAllOrders = async (req:Request, res:Response, next:NextFunction) => {
  const querys = {
    status: req.query.status ? req.query.status.toString() : null,
    offset: req.query.offset ? Number(req.query.offset) : 1,
    limit: req.query.limit ? Number(req.query.limit) : 10,
    date: req.body.date ? req.body.date.toString() : ''
  }
  res.status(200).json(await getAll(querys))
}

export const updateOrder = async (req:Request, res:Response, next:NextFunction) => {
  const data = {
    idOrder: req.params.orderId,
    order: req.body
  }
  res.status(200).json(await editOrder(data))
}

export const getOneOrderById = async (req:Request, res:Response, next:NextFunction) => {
  const { params } = req
  res.status(200).json(await getOneOrder(params.orderId))
}
