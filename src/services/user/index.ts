import UserModel from "@models/user";
import encoder from "@adapters/BcryptAdapter";
import { CreateUserInput, ValidateUserInput } from "@interfaces/user";
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

export const validateUser = async (params: ValidateUserInput) => {
  const user = await userModel.findByEmail(params.email);
  if (!user) {
    throw new ResponseError(404, "User email and/or password is invalid!");
  }
  const isValidPassword = encoder.compareDataWithHash(
    params.password,
    user.password
  );
  if (!isValidPassword) {
    throw new ResponseError(404, "User email and/or password is invalid!");
  }
  return user;
};
