import SessionModel from "@models/session";

const sessionModel = new SessionModel();

export const closeSession = async (userId: number) => {
  await sessionModel.delete(userId);
};
