import UserModel from '@models/user'

const userModel = new UserModel()

export const getCurrentUser = async (userId: number) => {
  return userModel.findById(userId)
}
