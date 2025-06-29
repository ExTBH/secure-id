import { NextRequest, NextResponse } from 'next/server'
import z from 'zod/v4'

export function withValidation<T extends z.ZodSchema>(
  schema: T,
  handler: (
    request: NextRequest,
    data: z.infer<T>
  ) => Response | Promise<Response>
) {
  return async (request: NextRequest) => {
    try {
      const body = await request.json()
      const validatedData = schema.parse(body)
      return await handler(request, validatedData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json(
          { errors: z.prettifyError(error) },
          { status: 400 }
        )
      }
      if (error instanceof Error) {
        return NextResponse.json(
          {
            error: 'Request processing failed',
            message: error.message,
            type: error.constructor.name,
          },
          { status: 400 }
        )
      }

      return NextResponse.json(
        {
          error: 'Unknown error occurred',
          detail: String(error),
        },
        { status: 500 }
      )
    }
  }
}
