import { z } from 'zod/v4'

export const EJWTScope = z.enum([
  'auth:initiated', // Initial login scope
  'auth:kyc:initiate',
  'profile:full', // Full profile access
  'app:full', // Full access
])

const SCountryCode = z
  .string()
  .min(1, 'Country code is required')
  .max(5, 'Country code must be at most 5 characters')
  .regex(/^\+\d+$/, 'Country code must start with "+" followed by numbers only')

const SPhoneNumber = z
  .string()
  .min(1, 'Phone number is required')
  .max(9, 'Phone number must be at most 9 characters')
  .regex(/^\d+$/, 'Phone number must contain numbers only, without leading "+"')

const SPhoneNumberWithCountryCode = z
  .string()
  .min(1, 'Phone number with country code is required')
  .max(15, 'Phone number with country code must be at most 15 characters')
  .regex(
    /^\+\d{1,5}\d{1,9}$/,
    'Phone number with country code must start with "+" followed by country code and phone number'
  )

const SIdNumber = z
  .string()
  .min(6, 'ID number is required')
  .max(12, 'ID number must be at most 12 characters')
  .regex(/^\d+$/, 'ID number must contain numbers only')

export const SLoginRequest = z.strictObject({
  country_code: SCountryCode,

  phone_number: SPhoneNumber,

  id_number: SIdNumber,
})

export const SDatabaseUserShema = z
  .strictObject({
    phone_number: SPhoneNumberWithCountryCode,
    id_number: SIdNumber,
    full_name: z
      .string()
      .min(1, 'Full name is required')
      .max(100, 'Full name must be at most 100 characters'),

    email: z.email().optional(),
  })
  .transform((data) => ({
    ...data,
    is_profile_complete: data.email ? true : false,
  }))

export type TJWTScope = z.infer<typeof EJWTScope>
export type TDatabaseUser = z.infer<typeof SDatabaseUserShema>

export type TLoginRequest = z.infer<typeof SLoginRequest>
