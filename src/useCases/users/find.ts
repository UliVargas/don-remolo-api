import { FindUserByEmail } from '../../services/user.service'

export default (userEmail: string) => {
  return FindUserByEmail(userEmail)
}
