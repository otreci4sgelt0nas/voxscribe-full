import { IronSession, getIronSession } from 'iron-session'
import { cookies } from 'next/headers'

export interface SessionData {
  userId?: number
  isLoggedIn: boolean
}

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'voxscribe-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export async function getSession() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
  return session
}
