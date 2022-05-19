import encoder from "@adapters/BcryptAdapter";
import { CreateUserInput } from "@interfaces/user";
import UserModel from "@models/user";
import ResponseError from "@utils/ResponseError";

const userModel = new UserModel();

export const createUser = async (params: CreateUserInput) => {
  const user = await userModel.findByEmail(params.email);
  if (user) {
    throw new ResponseError(
      404,
      "User email and/or name already has a account!"
    );
  }
  const encodedPassword = encoder.createHash(params.password);
  return userModel.create({
    ...params,
    password: encodedPassword,
  });
};
