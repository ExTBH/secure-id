import { getUserByUserID } from '@/database'
import { SLoginRequest, TJWTScope } from '@/schemas'
import NextAuth, { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const config: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'secure-id',
      credentials: {
        phoneNumber: { label: 'Phone', type: 'text' },
        idNumber: { label: 'ID', type: 'text' },
      },
      async authorize(credentials) {
        const result = SLoginRequest.safeParse(credentials)
        if (!result.success) return null

        // Initial login only gives basic scope
        return {
          id: `user_${result.data.phone_number}`,
          phoneNumber: result.data.phone_number,
          idNumber: result.data.id_number,
          scopes: ['auth:kyc:initiate'] as TJWTScope[],
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.phoneNumber = user.phoneNumber
        token.idNumber = user.idNumber
        token.scopes = user.scopes
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.sub!
      session.user.phoneNumber = token.phoneNumber
      session.user.idNumber = token.idNumber
      session.user.scopes = token.scopes
      return session
    },
  },
}

async function initiateKYC(userid: string) {
  console.log(`Initiaing KYC for user: ${getUserByUserID(userid)}`)
  return { success: true, verified: true }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)

// Helper functions for scope management
export async function upgradeUserScopes(
  userId: string,
  newScopes: TJWTScope[]
) {
  // In a real app, you'd update the database here
  // For now, we'll handle this in the route handlers
  console.log(`Upgrading scopes for ${userId}:`, newScopes)
}

export { initiateKYC }
