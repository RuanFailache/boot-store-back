import UserModel from "@models/user";
import ResponseError from "@utils/ResponseError";

const userModel = new UserModel();

export const getCurrentUser = async (userId: number) => {
  return userModel.findById(userId);
};
