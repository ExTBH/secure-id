import { TJWTScope } from '@/schemas'

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
