import { z } from 'zod/v4'

export const SLoginRequest = z.strictObject({
  country_code: z
    .string()
    .min(1, 'Country code is required')
    .max(5, 'Country code must be at most 5 characters'),

  phone_number: z
    .string()
    .min(1, 'Phone number is required')
    .max(9, 'Phone number must be at most 9 characters'),

  id_number: z
    .string()
    .min(6, 'ID number is required')
    .max(12, 'ID number must be at most 12 characters'),
})

export type TLoginRequest = z.infer<typeof SLoginRequest>
