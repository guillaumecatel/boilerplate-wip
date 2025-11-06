import z from 'zod'

import { type WrapperResult } from '../errors'
import { checkEmail, checkId, checkSchema } from '../validators'
import { createWrapper, fetchAndValidate, safeRequest } from '../wrapper'
import { UserSchema, type User } from './schemas'

const usersWrapper = createWrapper('https://jsonplaceholder.typicode.com/users')

/**
 * API client for user management
 *
 * All methods return a WrapperResult<T> tuple that contains either:
 * - [true, data, null] on success
 * - [false, null, WrapperError] on error
 *
 * This approach avoids unhandled exceptions and forces explicit error handling.
 */
export const usersApi = {
  /**
   * Retrieves all users
   *
   * @returns Promise<WrapperResult<User[]>> - List of all users or error
   *
   * @example
   * const [isSuccess, users, error] = await usersApi.all()
   * if (!isSuccess) {
   *   console.error('Error during retrieval:', error.code, error.message)
   * } else {
   *   console.log('Users retrieved:', users)
   * }
   */
  all: (): Promise<WrapperResult<User[]>> =>
    safeRequest(() =>
      fetchAndValidate(usersWrapper.get(), z.array(UserSchema)),
    ),

  /**
   * Retrieves a specific user by ID
   *
   * @param id - Unique user identifier (must be a positive integer)
   * @returns Promise<WrapperResult<User>> - Found user or error (404 if not found)
   *
   * @example
   * const [isSuccess, user, error] = await usersApi.get(1)
   * if (!isSuccess && error?.status === 404) {
   *   console.log('User not found')
   * } else if (!isSuccess) {
   *   console.error('Error:', error.message)
   * } else {
   *   console.log('User:', user.name)
   * }
   */
  get: (id: number): Promise<WrapperResult<User>> => {
    return safeRequest(() => {
      checkId(id)
      return fetchAndValidate(usersWrapper.url(`/${id}`).get(), UserSchema)
    })
  },

  /**
   * Searches for users by email address
   *
   * @param email - Email address to search for (will be validated)
   * @returns Promise<WrapperResult<User[]>> - Matching users or error
   *
   * @example
   * const [isSuccess, users, error] = await usersApi.findByEmail('john@example.com')
   * if (isSuccess) {
   *   console.log(`${users.length} user(s) found`)
   * }
   */
  findByEmail: (email: string): Promise<WrapperResult<User[]>> => {
    return safeRequest(() => {
      checkEmail(email)
      return fetchAndValidate(
        usersWrapper.query({ email }).get(),
        z.array(UserSchema),
      )
    })
  },

  /**
   * Creates a new user
   *
   * @param user - User data to create (without id which will be generated)
   * @returns Promise<WrapperResult<User>> - Created user with new ID or error
   *
   * @example
   * const newUser = { name: 'John Doe', email: 'john@example.com', ... }
   * const [isSuccess, createdUser, error] = await usersApi.create(newUser)
   * if (isSuccess) {
   *   console.log('User created with ID:', createdUser.id)
   * }
   */
  create: (user: Omit<User, 'id'>): Promise<WrapperResult<User>> => {
    return safeRequest(() => {
      checkSchema(user, UserSchema.omit({ id: true }), 'user')
      return fetchAndValidate(usersWrapper.post(user), UserSchema)
    })
  },

  /**
   * Updates an existing user
   *
   * @param id - User identifier to modify (must be a positive integer)
   * @param user - Partial data to update (will be validated)
   * @returns Promise<WrapperResult<User>> - Updated user or error
   *
   * @example
   * const updates = { name: 'Jane Doe' }
   * const [isSuccess, updatedUser, error] = await usersApi.update(1, updates)
   * if (isSuccess) {
   *   console.log('User updated:', updatedUser.name)
   * }
   */
  update: (id: number, user: Partial<User>): Promise<WrapperResult<User>> => {
    return safeRequest(() => {
      checkId(id)
      checkSchema(user, UserSchema.partial(), 'user')
      return fetchAndValidate(usersWrapper.url(`/${id}`).put(user), UserSchema)
    })
  },

  /**
   * Deletes a user
   *
   * @param id - User identifier to delete (must be a positive integer)
   * @returns Promise<WrapperResult<void>> - Success (void) or error
   *
   * @example
   * const [isSuccess, , error] = await usersApi.delete(1)
   * if (!isSuccess && error?.status === 404) {
   *   console.log('User already deleted or non-existent')
   * } else if (!isSuccess) {
   *   console.error('Error during deletion:', error.message)
   * } else {
   *   console.log('User successfully deleted')
   * }
   */
  delete: (id: number): Promise<WrapperResult<void>> => {
    return safeRequest(async () => {
      checkId(id)
      const response = usersWrapper.url(`/${id}`).delete()
      await response.res()
    })
  },
}
