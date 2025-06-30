import { TDatabaseUser } from '@/schemas'
import { randomUUID } from 'crypto'

const users: Map<string, TDatabaseUser> = new Map()

users.set(randomUUID(), {
  phone_number: '+97333674967',
  id_number: '041005708',
  full_name: 'Natheer Radhi',
  email: 'natheer@secure-id.com',
  is_profile_complete: true,
})

users.set(randomUUID(), {
  phone_number: '+97338084876',
  id_number: '031003257',
  full_name: 'Noora Qasim',
  is_profile_complete: false,
})

export function getUserByIdNumber(idNumber: string): TDatabaseUser | undefined {
  return users.values().find((user) => user.id_number === idNumber)
}

export function getUserByUserID(userId: string): TDatabaseUser | undefined {
  return users.get(userId)
}

export function setUserEmail(
  userId: string,
  email: string
): TDatabaseUser | undefined {
  const user = users.get(userId)
  if (!user) return undefined

  const updatedUser = { ...user, email, is_profile_complete: true }
  users.set(userId, updatedUser)
  return updatedUser
}
