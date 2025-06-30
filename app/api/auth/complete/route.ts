import { withScopes } from '@/middlewares/scope'
import { NextResponse } from 'next/server'

export const POST = withScopes('auth:initiated')(() => {
  return NextResponse.json({
    message: 'Login completed successfully',
  })
})
