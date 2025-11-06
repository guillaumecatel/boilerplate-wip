import { isObject } from '@myorg/shared'
import wretch, { type WretchOptions, type WretchResponseChain } from 'wretch'
import QueryAddon, { type QueryStringAddon } from 'wretch/addons/queryString'
import z from 'zod'

import {
  WrapperError,
  type WrapperResult,
  createError,
  createSuccess,
} from './errors'

export const createWrapper = (
  endpoint: string,
  options = {} as WretchOptions,
) => {
  const wrapper = wretch(endpoint)
    .options(options)
    .addon(QueryAddon)
    .resolve((resolver) => {
      resolver.badRequest((error) => {
        throw new WrapperError('Bad request', 400, 'BAD_REQUEST', error.stack)
      })

      resolver.unauthorized((error) => {
        throw new WrapperError('Unauthorized', 401, 'UNAUTHORIZED', error.stack)
      })

      resolver.forbidden((error) => {
        throw new WrapperError('Forbidden', 403, 'FORBIDDEN', error.stack)
      })

      resolver.notFound((error) => {
        throw new WrapperError('Not found', 404, 'NOT_FOUND', error.stack)
      })

      resolver.timeout(() => {
        throw new WrapperError('Request timeout', 408, 'REQUEST_TIMEOUT')
      })

      resolver.internalError((error) => {
        throw new WrapperError(
          'Internal server error',
          500,
          'INTERNAL_SERVER_ERROR',
          error.stack,
        )
      })

      resolver.fetchError((error) => {
        throw new WrapperError('Network error', 0, 'FETCH_ERROR', error.stack)
      })

      return resolver
    })
  return wrapper
}

/**
 * Utility function to fetch and validate data from an HTTP response
 *
 * This function:
 * 1. Retrieves JSON data from the HTTP response
 * 2. Validates this data against a Zod schema
 * 3. Returns typed data or throws an exception if validation fails
 *
 * @template T - Type of expected data after validation
 * @param wretchResponseChain - Wretch response object with json() method
 * @param schema - Zod schema to validate the data
 * @returns Promise of validated and typed data
 * @throws {z.ZodError} If data doesn't match the schema
 */
export const fetchAndValidate = async <T>(
  wretchResponseChain: WretchResponseChain<QueryStringAddon, unknown>,
  schema: z.ZodSchema<T>,
): Promise<T> => {
  const serializedData = await wretchResponseChain.json()
  return schema.parse(serializedData)
}

/**
 * Utility function to wrap requests in a safe error handler
 *
 * This function transforms exceptions into a Result<T> tuple that contains either:
 * - [true, data, null] on success
 * - [false, null, WrapperError] on error
 *
 * This avoids having to use try/catch in every API call
 *
 * @template T - Type of data returned by the request
 * @param request - Function that executes the HTTP request
 * @returns Promise of a Result tuple containing either data or error
 */
export const safeRequest = async <T>(
  request: () => Promise<T>,
): Promise<WrapperResult<T>> => {
  try {
    const data = await request()
    return createSuccess(data) // ✨ [true, data, null]
  } catch (error) {
    // Special handling for WrapperError already constructed (from resolvers)
    if (error instanceof WrapperError) {
      return createError(error) // ✨ [false, null, error]
    }

    // Handle Zod validation errors
    // These errors occur when received data doesn't match the expected schema
    if (error instanceof z.ZodError) {
      const wrapperError = new WrapperError(
        'Data validation failed',
        422, // Unprocessable Entity - validation error
        'VALIDATION_ERROR',
        error.issues, // Validation error details
      )
      return createError(wrapperError) // ✨ [false, null, error]
    }

    // Handle Wretch HTTP errors (400, 404, 500, etc.)
    if (isObject(error) && 'status' in error) {
      const wretchError = error as unknown as WrapperError
      const wrapperError = new WrapperError(
        wretchError.message || 'API request failed',
        wretchError.status || 500,
        wretchError.code,
        wretchError.details,
      )
      return createError(wrapperError) // ✨ [false, null, error]
    }

    // Handle network or unknown errors
    // All other errors that are neither HTTP nor validation errors
    const wrapperError = new WrapperError(
      error instanceof Error ? error.message : 'Unknown error',
      0, // Code 0 indicates a network/unknown error
      'UNKNOWN_ERROR',
    )
    return createError(wrapperError) // ✨ [false, null, error]
  }
}
