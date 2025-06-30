// types/next-auth.d.ts
import { TJWTScope } from '@/schemas'

import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    phoneNumber: string
    idNumber: string
    scopes: TJWTScope[]
  }

  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    phoneNumber: string
    idNumber: string
    scopes: TJWTScope[]
  }
}
