/**
 * Custom error class for API wrapper operations
 *
 * This class extends the native Error class to provide additional context
 * for HTTP requests, including status codes, error codes, and details.
 */
export class WrapperError extends Error {
  public status: number
  public code?: string
  public details?: unknown

  constructor(
    message: string,
    status: number,
    code?: string,
    details?: unknown,
  ) {
    super(message)
    this.name = 'WrapperError'
    this.status = status
    this.code = code
    this.details = details

    // Make properties enumerable for JSON.stringify()
    Object.defineProperties(this, {
      message: { enumerable: true },
      status: { enumerable: true },
      code: { enumerable: true },
      details: { enumerable: true },
    })
  }

  /**
   * Method to serialize the error to JSON
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
      details: this.details,
    }
  }
}

/**
 * Result type for API operations
 *
 * This discriminated union type ensures type-safe error handling:
 * - [true, data, null] on success
 * - [false, null, error] on failure
 */
export type WrapperResult<T> = [true, T, null] | [false, null, WrapperError]

/**
 * Creates a success result tuple
 *
 * @param data - The successful data to wrap
 * @returns Success tuple [true, data, null]
 */
export const createSuccess = <T>(data: T): WrapperResult<T> => [
  true,
  data,
  null,
]

/**
 * Creates an error result tuple
 *
 * @param error - The error to wrap
 * @returns Error tuple [false, null, error]
 */
export const createError = <T>(error: WrapperError): WrapperResult<T> => [
  false,
  null,
  error,
]
