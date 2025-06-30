import { auth } from '@/auth'
import { TJWTScope } from '@/schemas'
import { Session } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export function withScopes(requiredScopes: TJWTScope | TJWTScope[]) {
  return function (
    handler: (
      request: NextRequest,
      session: Session
    ) => Response | Promise<Response>
  ) {
    return async (request: NextRequest) => {
      const _session: Session = await auth()

      if (!_session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }

      if (!Array.isArray(requiredScopes)) {
        requiredScopes = [requiredScopes]
      }

      const userScopes = _session.user.scopes || []
      const hasRequiredScopes = requiredScopes.every((scope) =>
        userScopes.includes(scope)
      )

      if (!hasRequiredScopes) {
        return NextResponse.json(
          {
            error: 'Insufficient permissions',
            required: requiredScopes,
            current: userScopes,
          },
          { status: 403 }
        )
      }

      return handler(request, _session)
    }
  }
}
