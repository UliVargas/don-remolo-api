import { CreateUser } from '../../services/auth.service'
import { BCHash } from '../../utilities/bcrypt'

export default async (data: { email: string, password: string }) => {
  const hash = await BCHash(data.password)
  return CreateUser({ ...data, password: hash })
}
