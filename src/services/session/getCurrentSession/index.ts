import SessionModel from '@models/session'

const sessionModel = new SessionModel()

export const getCurrentSession = async (token: string) => {
  return sessionModel.findByToken(token)
}
