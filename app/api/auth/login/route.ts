import { signIn } from '@/lib/auth'
import { withValidation } from '@/middlewares/validation'
import { SLoginRequest } from '@/schemas'
import { AuthError } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export const POST = withValidation(SLoginRequest, async (req, loginData) => {
  try {
    const result = await signIn('secure-id', {
      phoneNumber: loginData.phone_number,
      idNumber: loginData.id_number,
      redirect: false,
    })

    if (!result || result.error) {
      throw new AuthError(result?.error || 'Login failed')
    }

    // Get the JWT token that NextAuth created
    const token = await getToken({
      req,
      secret: process.env.AUTH_SECRET,
    })

    return NextResponse.json({
      message: 'Login successful',
      token: token, // This contains the JWT payload
      scopes: ['auth:initiated'],
    })
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    console.error('Unexpected error during login:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
})
