import connectDatabase from "./connectDatabase";

export default class SessionModel {
  private sessionDB;

  constructor() {
    this.sessionDB = connectDatabase.session;
  }

  create(params: { userId: number; token: string }) {
    return this.sessionDB.create({
      data: params,
    });
  }

  findByUserId(userId: number) {
    return this.sessionDB.findUnique({
      where: {
        userId,
      },
    });
  }

  findByToken(token: string) {
    return this.sessionDB.findUnique({
      where: {
        token,
      },
    });
  }

  delete(userId: number) {
    return this.sessionDB.delete({
      where: {
        userId,
      },
    });
  }
}
