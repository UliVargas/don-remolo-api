import { Request, Response } from 'express'
import { Login, CreateUser } from '../useCases/auth'

export const login = async (req: Request, res: Response) => {
  res.status(200).json(await Login(req.body))
}

export const createUser = async (req: Request, res: Response) => {
  res.status(201).json(await CreateUser(req.body))
}
