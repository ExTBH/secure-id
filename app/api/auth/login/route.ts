import { withValidation } from '@/middlewares/validation'
import { SLoginRequest } from '@/schemas'

export const POST = withValidation(SLoginRequest, (req, loginData) => {
  // Here you would typically handle the login logic, e.g., checking credentials
  // For demonstration, we will just return the validated data
  return new Response(
    JSON.stringify({ message: 'Login successful', data: loginData }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
})
