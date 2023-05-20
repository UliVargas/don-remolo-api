import { compare, hash } from 'bcrypt'
import { env } from '../config/env'

export const BCHash = (password: string): Promise<string> => {
  return hash(password, 10)
}

export const BCCompare = (
  passwordToCompare: string,
  hashedPassword: string
): Promise<boolean> => {
  return compare(passwordToCompare, hashedPassword)
}
