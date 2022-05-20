import idEncoder from '@adapters/UuidAdapter'
import SessionModel from '@models/session'

const sessionModel = new SessionModel()

export const openSession = async (userId: number) => {
  const session = await sessionModel.findByUserId(userId)
  if (session) {
    await sessionModel.delete(userId)
  }
  const token = idEncoder.makeToken()
  return sessionModel.create({
    userId,
    token,
  })
}
