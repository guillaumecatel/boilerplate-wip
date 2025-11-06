import { isNumber } from '@myorg/shared'
import z from 'zod'

import { WrapperError } from './errors'

/**
 * Validates that an ID is a positive integer
 *
 * @param id - The ID to validate
 * @throws {WrapperError} If the ID is not a positive integer
 */
export const checkId = (id: number): void => {
  if (!isNumber(id) || id <= 0 || !Number.isInteger(id)) {
    throw new WrapperError('Invalid user ID', 400, 'INVALID_ID')
  }
}

/**
 * Validates that an email has a correct format
 *
 * @param email - The email to validate
 * @throws {WrapperError} If the email format is invalid
 */
export const checkEmail = (email: string): void => {
  const validation = z.email().safeParse(email)

  if (validation.error) {
    throw new WrapperError('Invalid email format', 400, 'INVALID_EMAIL')
  }
}

/**
 * Validates data against a Zod schema
 *
 * @param data - The data to validate
 * @param schema - The Zod schema to validate against
 * @param name - Name of the data field for error messages (default: 'data')
 * @throws {WrapperError} If validation fails
 */
export const checkSchema = (
  data: unknown,
  schema: z.ZodTypeAny,
  name = 'data',
): void => {
  const validation = schema.safeParse(data)

  if (validation.error) {
    throw new WrapperError(
      `Validation failed for ${name}`,
      422,
      'VALIDATION_ERROR',
      validation.error.issues,
    )
  }
}
