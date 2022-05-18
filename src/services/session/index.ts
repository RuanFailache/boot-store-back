import idEncoder from "@adapters/UuidAdapter";
import SessionModel from "@models/session";

const sessionModel = new SessionModel();

export const openSession = async (userId: number) => {
  const token = idEncoder.makeToken();
  return sessionModel.create({
    userId,
    token,
  });
};

export const validateSession = async (token: string) => {
  return sessionModel.findByToken(token);
};

export const closeSession = async (userId: number) => {
  await sessionModel.delete(userId);
};
