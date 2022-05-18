import Joi from "joi";
import { CreateUserInput } from "@interfaces/user";
import * as userServices from "@services/user";
import * as sessionServices from "@services/session";
import { EventResponse } from "..";

export const signUpSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signUpHandler = async (
  params: CreateUserInput
): Promise<EventResponse> => {
  const user = await userServices.createUser(params);
  const session = await sessionServices.openSession(user.id);
  return {
    status: 201,
    data: {
      token: session.token,
    },
  };
};
