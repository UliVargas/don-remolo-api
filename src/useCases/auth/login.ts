import ApiError from '../../ApiError/apiError'
import { LoginService } from '../../services/auth.service'
import { FindUserByEmail } from '../../services/user.service'
import { BCCompare } from '../../utilities/bcrypt'

export default async ({
  email,
  password
}) => {
  const user = await FindUserByEmail(email)

  if (!await BCCompare(password, user.password)) {
    throw new ApiError({
      errorCode: 'INCORRECT_DATA'
    })
  }

  return {
    token: await LoginService({
      email,
      password
    })
  }
}
