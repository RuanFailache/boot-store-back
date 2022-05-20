import encoder from '@adapters/BcryptAdapter'
import { ValidateUserInput } from '@interfaces/user'
import UserModel from '@models/user'
import ResponseError from '@utils/ResponseError'

const userModel = new UserModel()

export const validateUser = async (params: ValidateUserInput) => {
  const user = await userModel.findByEmail(params.email)
  if (!user) {
    throw new ResponseError(404, 'User email and/or password is invalid!')
  }
  const isValidPassword = encoder.compareDataWithHash(
    params.password,
    user.password,
  )
  if (!isValidPassword) {
    throw new ResponseError(404, 'User email and/or password is invalid!')
  }
  return user
}
