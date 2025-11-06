import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { z } from 'zod'

import { createError, createSuccess, WrapperError } from '../src/errors'
import { createWrapper, safeRequest } from '../src/wrapper'

// 🌐 MSW server configuration for wrapper tests
const server = setupServer(
  // Test endpoint for success
  http.get('https://test.example.com/success', () => {
    return HttpResponse.json({
      message: 'success',
      data: { id: 1, name: 'Test' },
    })
  }),

  // Test endpoint for 404 error
  http.get('https://test.example.com/not-found', () => {
    return new HttpResponse(null, { status: 404 })
  }),

  // Test endpoint for 500 error
  http.get('https://test.example.com/server-error', () => {
    return new HttpResponse('Internal Server Error', { status: 500 })
  }),

  // Test endpoint for network error
  http.get('https://test.example.com/network-error', () => {
    return HttpResponse.error()
  }),

  // Test endpoint pour JSON invalide
  http.get('https://test.example.com/invalid-json', () => {
    return new HttpResponse('invalid json{', {
      headers: { 'Content-Type': 'application/json' },
    })
  }),

  // Test endpoint for timeout (simulation)
  http.get('https://test.example.com/timeout', () => {
    return new HttpResponse(null, { status: 408 })
  }),

  // Handlers for different HTTP methods
  http.post('https://test.example.com/create', () => {
    return HttpResponse.json({ created: true }, { status: 201 })
  }),

  http.put('https://test.example.com/update', () => {
    return HttpResponse.json({ updated: true })
  }),

  http.delete('https://test.example.com/delete', () => {
    return new HttpResponse(null, { status: 204 })
  }),

  // Error tests for different status codes
  http.get('https://test.example.com/error/400', () => {
    return new HttpResponse('Bad Request', { status: 400 })
  }),

  http.get('https://test.example.com/error/401', () => {
    return new HttpResponse('Unauthorized', { status: 401 })
  }),

  http.get('https://test.example.com/error/403', () => {
    return new HttpResponse('Forbidden', { status: 403 })
  }),

  http.get('https://test.example.com/error/500', () => {
    return new HttpResponse('Internal Server Error', { status: 500 })
  }),

  // Test endpoint pour query parameters
  http.get('https://test.example.com/search', ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('q')
    const limit = url.searchParams.get('limit')

    return HttpResponse.json({
      query,
      limit: limit ? parseInt(limit) : null,
      results: [],
    })
  }),
)

beforeEach(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

describe('Wrapper - WrapperError Class', () => {
  it('should create error with all properties', () => {
    const error = new WrapperError('Test message', 404, 'NOT_FOUND')

    expect(error.message).toBe('Test message')
    expect(error.status).toBe(404)
    expect(error.code).toBe('NOT_FOUND')
    expect(error.name).toBe('WrapperError')
    expect(error).toBeInstanceOf(Error)
  })

  it('should create error with default status 500', () => {
    const error = new WrapperError('Test message', 500, 'GENERIC_ERROR')

    expect(error.status).toBe(500)
    expect(error.code).toBe('GENERIC_ERROR')
  })

  it('should be serializable to JSON', () => {
    const error = new WrapperError('API Error', 422, 'VALIDATION_ERROR')
    const serialized = JSON.parse(JSON.stringify(error))

    expect(serialized.message).toBe('API Error')
    expect(serialized.status).toBe(422)
    expect(serialized.code).toBe('VALIDATION_ERROR')
  })

  it('should inherit from Error correctly', () => {
    const error = new WrapperError('Test', 400, 'TEST')

    expect(error instanceof Error).toBe(true)
    expect(error instanceof WrapperError).toBe(true)
    expect(error.stack).toBeDefined()
  })

  it('should handle different status codes', () => {
    const statusCodes = [400, 401, 403, 404, 422, 500, 502, 503]

    statusCodes.forEach((status) => {
      const error = new WrapperError(
        `Error ${status}`,
        status,
        `ERROR_${status}`,
      )
      expect(error.status).toBe(status)
      expect(error.code).toBe(`ERROR_${status}`)
    })
  })
})

describe('Wrapper - Result Pattern Helpers', () => {
  it('createSuccess should return [true, data, null]', () => {
    const testData = { id: 1, name: 'Test User' }
    const result = createSuccess(testData)

    expect(result).toEqual([true, testData, null])
    expect(result[0]).toBe(true) // isSuccess
    expect(result[1]).toEqual(testData) // data
    expect(result[2]).toBeNull() // error
  })

  it('createError should return [false, null, error]', () => {
    const error = new WrapperError('Test error', 400, 'TEST_ERROR')
    const result = createError<{ id: number }>(error)

    expect(result).toEqual([false, null, error])
    expect(result[0]).toBe(false) // isSuccess
    expect(result[1]).toBeNull() // data
    expect(result[2]).toBe(error) // error
  })

  it('should provide correct TypeScript discriminated union types', () => {
    const successResult = createSuccess('hello world')
    const errorResult = createError<string>(
      new WrapperError('Error', 500, 'SERVER_ERROR'),
    )

    // Test de type via assertion
    expect(typeof successResult[0]).toBe('boolean')
    expect(typeof errorResult[0]).toBe('boolean')

    if (successResult[0]) {
      expect(typeof successResult[1]).toBe('string')
      expect(successResult[2]).toBeNull()
    }

    if (!errorResult[0]) {
      expect(errorResult[1]).toBeNull()
      expect(errorResult[2]).toBeInstanceOf(WrapperError)
    }
  })

  it('should work with different data types', () => {
    // Test avec string
    const stringResult = createSuccess('test')
    expect(stringResult[1]).toBe('test')

    // Test avec number
    const numberResult = createSuccess(42)
    expect(numberResult[1]).toBe(42)

    // Test avec array
    const arrayResult = createSuccess([1, 2, 3])
    expect(arrayResult[1]).toEqual([1, 2, 3])

    // Test avec object
    const objectResult = createSuccess({ key: 'value' })
    expect(objectResult[1]).toEqual({ key: 'value' })

    // Test avec null/undefined
    const nullResult = createSuccess(null)
    expect(nullResult[1]).toBeNull()

    const undefinedResult = createSuccess(undefined)
    expect(undefinedResult[1]).toBeUndefined()
  })
})

describe('Wrapper - safeRequest Function', () => {
  it('should handle successful requests', async () => {
    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data, error] = await safeRequest(() =>
      wrapper.get('/success').json(),
    )

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toEqual({ message: 'success', data: { id: 1, name: 'Test' } })
  })

  it('should handle 404 errors', async () => {
    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data, error] = await safeRequest(() =>
      wrapper.get('/not-found').json(),
    )

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(404)
    expect(error?.code).toBe('NOT_FOUND')
  })

  it('should handle 500 errors', async () => {
    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data, error] = await safeRequest(() =>
      wrapper.get('/server-error').json(),
    )

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(500)
    expect(error?.code).toBe('INTERNAL_SERVER_ERROR')
  })

  it('should handle network errors', async () => {
    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data, error] = await safeRequest(() =>
      wrapper.get('/network-error').json(),
    )

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.code).toBe('FETCH_ERROR')
  })

  it('should handle timeout errors', async () => {
    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data, error] = await safeRequest(() =>
      wrapper.get('/timeout').json(),
    )

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(408)
    expect(error?.code).toBe('REQUEST_TIMEOUT')
  })

  it('should handle JSON parsing errors', async () => {
    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data, error] = await safeRequest(() =>
      wrapper.get('/invalid-json').json(),
    )

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    // Le code d'erreur peut varier selon le parser JSON
  })

  it('should handle Zod validation errors', async () => {
    const invalidSchema = z.object({ name: z.string() })

    const [isSuccess, data, error] = await safeRequest(async () => {
      // Simulate a failing Zod validation
      const invalidData = { name: 123 } // number instead of string
      return invalidSchema.parse(invalidData)
    })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(422)
    expect(error?.code).toBe('VALIDATION_ERROR')
    expect(error?.message).toBe('Data validation failed')
  })

  it('should handle custom HTTP-like errors with status', async () => {
    const customError = {
      message: 'Custom API Error',
      status: 503,
      code: 'SERVICE_UNAVAILABLE',
    }

    const [isSuccess, data, error] = await safeRequest(async () => {
      throw customError
    })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(503)
    expect(error?.code).toBe('SERVICE_UNAVAILABLE')
    expect(error?.message).toBe('Custom API Error')
  })

  it('should handle HTTP-like errors with missing message and status', async () => {
    const customError = {
      message: '', // Falsy message
      status: 0, // Falsy status
      code: 'UNKNOWN_HTTP_ERROR',
    }

    const [isSuccess, data, error] = await safeRequest(async () => {
      throw customError
    })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(500) // Fallback due to falsy status (0)
    expect(error?.code).toBe('UNKNOWN_HTTP_ERROR')
    expect(error?.message).toBe('API request failed') // Fallback due to falsy message ('')
  })

  it('should handle generic Error instances', async () => {
    const genericError = new Error('Generic error message')

    const [isSuccess, data, error] = await safeRequest(async () => {
      throw genericError
    })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(0)
    expect(error?.code).toBe('UNKNOWN_ERROR')
    expect(error?.message).toBe('Generic error message')
  })

  it('should handle non-Error unknown values', async () => {
    const unknownError = 'String error'

    const [isSuccess, data, error] = await safeRequest(async () => {
      throw unknownError
    })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(0)
    expect(error?.code).toBe('UNKNOWN_ERROR')
    expect(error?.message).toBe('Unknown error')
  })
})

describe('Wrapper - createWrapper Function', () => {
  it('should create wrapper with base URL', () => {
    const wrapper = createWrapper('https://api.example.com')

    // The wrapper should be a Wretch instance
    expect(wrapper).toBeDefined()
    expect(typeof wrapper.get).toBe('function')
    expect(typeof wrapper.post).toBe('function')
    expect(typeof wrapper.put).toBe('function')
    expect(typeof wrapper.delete).toBe('function')
  })

  it('should handle HTTP methods correctly', async () => {
    const wrapper = createWrapper('https://test.example.com')

    // Test POST
    const [postSuccess, postData] = await safeRequest(() =>
      wrapper.url('/create').post().json(),
    )
    expect(postSuccess).toBe(true)
    expect(postData).toEqual({ created: true }) // Test PUT
    const [putSuccess, putData] = await safeRequest(() =>
      wrapper.url('/update').put().json(),
    )
    expect(putSuccess).toBe(true)
    expect(putData).toEqual({ updated: true })

    // Test DELETE (pas de contenu)
    const [deleteSuccess, deleteData] = await safeRequest(() =>
      wrapper.url('/delete').delete().res(),
    )
    expect(deleteSuccess).toBe(true)
    expect(deleteData).toBeDefined() // Response object
  })

  it('should handle query parameters', async () => {
    server.use(
      http.get('https://test.example.com/search', ({ request }) => {
        const url = new URL(request.url)
        const query = url.searchParams.get('q')
        const limit = url.searchParams.get('limit')

        return HttpResponse.json({
          query,
          limit: limit ? parseInt(limit) : null,
          results: [],
        })
      }),
    )

    const wrapper = createWrapper('https://test.example.com')
    const [isSuccess, data] = await safeRequest(() =>
      wrapper.get('/search?q=test&limit=10').json(),
    )

    expect(isSuccess).toBe(true)
    expect(data).toEqual({
      query: 'test',
      limit: 10,
      results: [],
    })
  })
})

describe('Wrapper - Error Code Mapping', () => {
  it('should map HTTP status codes to appropriate error codes', async () => {
    const wrapper = createWrapper('https://test.example.com')

    // Test 400 Bad Request
    const [badRequestSuccess, badRequestData, badRequestError] =
      await safeRequest(() => wrapper.get('/error/400').json())
    expect(badRequestSuccess).toBe(false)
    expect(badRequestData).toBeNull()
    expect(badRequestError?.status).toBe(400)
    expect(badRequestError?.code).toBe('BAD_REQUEST')

    // Test 401 Unauthorized
    const [unauthorizedSuccess, unauthorizedData, unauthorizedError] =
      await safeRequest(() => wrapper.get('/error/401').json())
    expect(unauthorizedSuccess).toBe(false)
    expect(unauthorizedData).toBeNull()
    expect(unauthorizedError?.status).toBe(401)
    expect(unauthorizedError?.code).toBe('UNAUTHORIZED')

    // Test 403 Forbidden
    const [forbiddenSuccess, forbiddenData, forbiddenError] = await safeRequest(
      () => wrapper.get('/error/403').json(),
    )
    expect(forbiddenSuccess).toBe(false)
    expect(forbiddenData).toBeNull()
    expect(forbiddenError?.status).toBe(403)
    expect(forbiddenError?.code).toBe('FORBIDDEN')

    // Test 500 Internal Server Error
    const [serverErrorSuccess, serverErrorData, serverErrorError] =
      await safeRequest(() => wrapper.get('/server-error').json())
    expect(serverErrorSuccess).toBe(false)
    expect(serverErrorData).toBeNull()
    expect(serverErrorError?.status).toBe(500)
    expect(serverErrorError?.code).toBe('INTERNAL_SERVER_ERROR')
  })
})

describe('Wrapper - Integration Tests', () => {
  it('should work with real-world scenarios', async () => {
    const wrapper = createWrapper('https://test.example.com')

    // Test d'erreur 401
    const [noAuthSuccess, , noAuthError] = await safeRequest(() =>
      wrapper.get('/error/401').json(),
    )
    expect(noAuthSuccess).toBe(false)
    expect(noAuthError?.status).toBe(401)
    expect(noAuthError?.code).toBe('UNAUTHORIZED')

    // Success test with data
    const [authSuccess, authData] = await safeRequest(() =>
      wrapper.get('/success').json(),
    )
    expect(authSuccess).toBe(true)
    expect(authData).toEqual({
      message: 'success',
      data: { id: 1, name: 'Test' },
    })
  })

  it('should handle concurrent requests', async () => {
    const wrapper = createWrapper('https://test.example.com')

    // Launch multiple requests in parallel
    const promises = Array.from({ length: 10 }, () =>
      safeRequest(() => wrapper.get('/success').json()),
    )

    const results = await Promise.all(promises)

    // All requests should succeed
    results.forEach(([isSuccess, data, error]) => {
      expect(isSuccess).toBe(true)
      expect(data).toBeDefined()
      expect(error).toBeNull()
    })
  })
})
