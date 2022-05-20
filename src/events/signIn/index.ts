import { ValidateUserInput } from '@interfaces/user'
import * as sessionServices from '@services/session'
import * as userServices from '@services/user'
import Joi from 'joi'
import { EventResponse } from '..'

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const signInHandler = async (
  params: ValidateUserInput,
): Promise<EventResponse> => {
  const user = await userServices.validateUser(params)
  const session = await sessionServices.openSession(user.id)
  return {
    status: 201,
    data: {
      token: session.token,
    },
  }
}
