import { CreateUserInput } from '@interfaces/user'
import connectDatabase from '../connectDatabase'

export default class UserModel {
  private userDB

  constructor() {
    this.userDB = connectDatabase.user
  }

  create(params: CreateUserInput) {
    return this.userDB.create({
      data: params,
    })
  }

  findById(id: number) {
    return this.userDB.findUnique({
      where: {
        id,
      },
      include: {
        cart: true,
        UserFavoriteProducts: true,
      },
    })
  }

  findByEmail(email: string) {
    return this.userDB.findUnique({
      where: {
        email,
      },
    })
  }
}
