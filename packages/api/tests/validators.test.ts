import { describe, expect, it } from 'vitest'
import { WrapperError } from '../src/errors'
import type { User } from '../src/users/schemas'
import { UserSchema } from '../src/users/schemas'
import { checkEmail, checkId, checkSchema } from '../src/validators'

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  address: {
    street: '123 Main St',
    suite: 'Apt 4B',
    city: 'Anytown',
    zipcode: '12345',
    geo: {
      lat: '40.7128',
      lng: '-74.0060',
    },
  },
  phone: '555-1234',
  website: 'john.example.com',
  company: {
    name: 'ACME Corp',
    catchPhrase: 'Building tomorrow',
    bs: 'innovative solutions',
  },
}

describe('Utils - checkId', () => {
  it('should pass for valid positive integers', () => {
    expect(() => checkId(1)).not.toThrow()
    expect(() => checkId(100)).not.toThrow()
    expect(() => checkId(999999)).not.toThrow()
  })

  it('should throw WrapperError for invalid IDs', () => {
    expect(() => checkId(0)).toThrow(WrapperError)
    expect(() => checkId(-1)).toThrow(WrapperError)
    expect(() => checkId(1.5)).toThrow(WrapperError)
    expect(() => checkId(NaN)).toThrow(WrapperError)
    expect(() => checkId(Infinity)).toThrow(WrapperError)
  })

  it('should throw with correct error details', () => {
    try {
      checkId(-1)
      expect.fail('Should have thrown an error')
    } catch (error) {
      expect(error).toBeInstanceOf(WrapperError)
      expect((error as WrapperError).message).toBe('Invalid user ID')
      expect((error as WrapperError).status).toBe(400)
      expect((error as WrapperError).code).toBe('INVALID_ID')
    }
  })

  it('should handle edge cases', () => {
    expect(() => checkId(Number.MAX_SAFE_INTEGER)).not.toThrow()
    expect(() => checkId(Number.MIN_SAFE_INTEGER)).toThrow(WrapperError)
    expect(() => checkId(0.1)).toThrow(WrapperError)
    expect(() => checkId(-0.1)).toThrow(WrapperError)
  })
})

describe('Utils - checkEmail', () => {
  it('should pass for valid email formats', () => {
    const validEmails = [
      'test@example.com',
      'user@domain.org',
      'john.doe@company.co.uk',
      'name+tag@example.com',
      '123@example.com',
      'user.name+tag@example.co.uk',
      'x@example.com',
      'example@s.example',
    ]

    validEmails.forEach((email) => {
      expect(() => checkEmail(email)).not.toThrow()
    })
  })

  it('should throw WrapperError for invalid email formats', () => {
    const invalidEmails = [
      'invalid-email',
      '@example.com',
      'test@',
      'test..test@example.com',
      'test@example',
      '',
      'test space@example.com',
      'test@example.',
      '.test@example.com',
      'test@.example.com',
      'test@example..com',
    ]

    invalidEmails.forEach((email) => {
      expect(() => checkEmail(email)).toThrow(WrapperError)
    })
  })

  it('should throw with correct error details', () => {
    try {
      checkEmail('invalid-email')
      expect.fail('Should have thrown an error')
    } catch (error) {
      expect(error).toBeInstanceOf(WrapperError)
      expect((error as WrapperError).message).toBe('Invalid email format')
      expect((error as WrapperError).status).toBe(400)
      expect((error as WrapperError).code).toBe('INVALID_EMAIL')
    }
  })

  it('should handle edge cases', () => {
    // Very long but valid emails
    const longEmail = 'a'.repeat(50) + '@' + 'b'.repeat(50) + '.com'
    expect(() => checkEmail(longEmail)).not.toThrow()

    // Allowed special characters
    expect(() => checkEmail('test-email@example.com')).not.toThrow()
    expect(() => checkEmail('test_email@example.com')).not.toThrow()
  })
})

describe('Utils - checkSchema', () => {
  it('should pass for valid user data against UserSchema', () => {
    expect(() => checkSchema(mockUser, UserSchema)).not.toThrow()
  })

  it('should throw WrapperError for data that fails schema validation', () => {
    const invalidUser = {
      id: 'not-a-number',
      name: 123,
      email: 'invalid-email',
    }

    expect(() => checkSchema(invalidUser, UserSchema)).toThrow(WrapperError)
  })

  it('should throw with validation error details', () => {
    const invalidUser = { id: -1, name: '', email: 'bad-email' }

    try {
      checkSchema(invalidUser, UserSchema)
      expect.fail('Should have thrown an error')
    } catch (error) {
      expect(error).toBeInstanceOf(WrapperError)
      expect((error as WrapperError).status).toBe(422)
      expect((error as WrapperError).code).toBe('VALIDATION_ERROR')
      expect((error as WrapperError).message).toContain('Validation failed')
    }
  })

  it('should work with different schemas', () => {
    // Test with a simple schema
    const SimpleSchema = UserSchema.pick({ id: true, name: true, email: true })
    const simpleData = { id: 1, name: 'Test', email: 'test@example.com' }

    expect(() => checkSchema(simpleData, SimpleSchema)).not.toThrow()

    // Test with invalid data for this schema
    const invalidSimpleData = { id: 'invalid', name: 123 }
    expect(() => checkSchema(invalidSimpleData, SimpleSchema)).toThrow(
      WrapperError,
    )
  })

  it('should handle missing required fields', () => {
    const incompleteUser = {
      id: 1,
      name: 'John Doe',
      // missing email and other required fields
    }

    expect(() => checkSchema(incompleteUser, UserSchema)).toThrow(WrapperError)
  })

  it('should handle extra fields gracefully', () => {
    const userWithExtraFields = {
      ...mockUser,
      extraField: 'should be ignored',
      anotherExtra: 123,
    }

    // Zod by default ignores additional fields
    expect(() => checkSchema(userWithExtraFields, UserSchema)).not.toThrow()
  })

  it('should validate nested objects correctly', () => {
    const userWithInvalidAddress = {
      ...mockUser,
      address: {
        street: 123, // should be string
        city: null, // should be string
      },
    }

    expect(() => checkSchema(userWithInvalidAddress, UserSchema)).toThrow(
      WrapperError,
    )
  })
})

describe('Utils - Integration Tests', () => {
  it('should work together in a validation pipeline', () => {
    // Test d'un pipeline de validation complet
    const validateUser = (id: number, email: string, userData: unknown) => {
      checkId(id)
      checkEmail(email)
      checkSchema(userData, UserSchema)
      return true
    }

    // Cas valide
    expect(() => validateUser(1, 'test@example.com', mockUser)).not.toThrow()

    // Cas invalides
    expect(() => validateUser(-1, 'test@example.com', mockUser)).toThrow(
      WrapperError,
    )
    expect(() => validateUser(1, 'invalid-email', mockUser)).toThrow(
      WrapperError,
    )
    expect(() =>
      validateUser(1, 'test@example.com', { invalid: 'data' }),
    ).toThrow(WrapperError)
  })

  it('should provide consistent error handling', () => {
    const errors: WrapperError[] = []

    // Collection of different error types
    try {
      checkId(-1)
    } catch (e) {
      errors.push(e as WrapperError)
    }
    try {
      checkEmail('invalid')
    } catch (e) {
      errors.push(e as WrapperError)
    }
    try {
      checkSchema({}, UserSchema)
    } catch (e) {
      errors.push(e as WrapperError)
    }

    // All errors should be WrapperErrors
    errors.forEach((error) => {
      expect(error).toBeInstanceOf(WrapperError)
      expect(error).toBeInstanceOf(Error)
      expect(typeof error.message).toBe('string')
      expect(typeof error.status).toBe('number')
      expect(typeof error.code).toBe('string')
    })

    // Specific error codes
    expect(errors[0].code).toBe('INVALID_ID')
    expect(errors[1].code).toBe('INVALID_EMAIL')
    expect(errors[2].code).toBe('VALIDATION_ERROR')
  })
})
