import connectDatabase from "./connectDatabase";

export default class UserModel {
  private userDB;

  constructor() {
    this.userDB = connectDatabase.user;
  }

  create(params: { name: string; email: string; password: string }) {
    return this.userDB.create({
      data: params,
    });
  }

  findByEmail(email: string) {
    return this.userDB.findUnique({
      where: {
        email,
      },
      include: {
        cart: true,
      },
    });
  }
}
