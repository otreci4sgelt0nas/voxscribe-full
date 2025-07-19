import { getSession } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const session = await getSession()
  const { email, password } = await req.json()

  // In a real app, you'd validate the credentials against a database
  if (email === 'test@test.com' && password === 'admin123') {
    session.userId = 1
    session.isLoggedIn = true
    await session.save()
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ ok: false, message: 'Invalid credentials' }, { status: 401 })
}
