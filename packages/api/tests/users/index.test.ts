import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { z } from 'zod'

import { WrapperError, type WrapperResult } from '../../src/errors'
import { usersApi } from '../../src/index'
import { UserSchema, type User } from '../../src/users/schemas'
import { checkId, checkSchema } from '../../src/validators'
import { createWrapper, fetchAndValidate, safeRequest } from '../../src/wrapper'

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

const mockUser2: User = {
  ...mockUser,
  id: 2,
  name: 'Jane Doe',
  username: 'janedoe',
  email: 'jane@example.com',
}

const mockUsers: User[] = [mockUser, mockUser2]

// 🌐 Configuration MSW pour mocker l'API JSONPlaceholder
const server = setupServer(
  // GET /users - Liste tous les utilisateurs ou filtre par email
  http.get('https://jsonplaceholder.typicode.com/users', ({ request }) => {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')

    if (email) {
      const filteredUsers = mockUsers.filter((u) => u.email === email)
      return HttpResponse.json(filteredUsers)
    }

    return HttpResponse.json(mockUsers)
  }),

  // GET /users/:id - Retrieves a user by ID
  http.get('https://jsonplaceholder.typicode.com/users/:id', ({ params }) => {
    const id = parseInt(params.id as string)
    const user = mockUsers.find((u) => u.id === id)

    if (!user) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json(user)
  }),

  // POST /users - Creates a new user
  http.post(
    'https://jsonplaceholder.typicode.com/users',
    async ({ request }) => {
      const body = (await request.json()) as Omit<User, 'id'>
      const newUser = { ...body, id: Date.now() }
      return HttpResponse.json(newUser, { status: 201 })
    },
  ),

  // PUT /users/:id - Updates a user
  http.put(
    'https://jsonplaceholder.typicode.com/users/:id',
    async ({ params, request }) => {
      const id = parseInt(params.id as string)
      const updates = (await request.json()) as Partial<User>
      const user = mockUsers.find((u) => u.id === id)

      if (!user) {
        return new HttpResponse(null, { status: 404 })
      }

      const updatedUser = { ...user, ...updates, id }
      return HttpResponse.json(updatedUser)
    },
  ),

  // DELETE /users/:id - Supprime un utilisateur
  http.delete(
    'https://jsonplaceholder.typicode.com/users/:id',
    ({ params }) => {
      const id = parseInt(params.id as string)
      const user = mockUsers.find((u) => u.id === id)

      if (!user) {
        return new HttpResponse(null, { status: 404 })
      }

      return new HttpResponse(null, { status: 200 })
    },
  ),
)

// Configuration MSW
beforeEach(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

describe('Users API - usersApi.all()', () => {
  it('should return all users successfully', async () => {
    const [isSuccess, data, error] = await usersApi.all()

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toHaveLength(2)
    expect(data![0]).toMatchObject({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    })
    expect(data![1]).toMatchObject({
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
    })
  })

  it('should handle network errors gracefully', async () => {
    // Mock a network error
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.error()
      }),
    )

    const [isSuccess, data, error] = await usersApi.all()

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.code).toBe('FETCH_ERROR')
  })

  it('should handle empty response', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([])
      }),
    )

    const [isSuccess, data, error] = await usersApi.all()

    expect(isSuccess).toBe(true)
    expect(data).toEqual([])
    expect(error).toBeNull()
  })

  it('should handle server errors', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    const [isSuccess, data, error] = await usersApi.all()

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(500)
    expect(error?.code).toBe('INTERNAL_SERVER_ERROR')
  })
})

describe('Users API - usersApi.get(id)', () => {
  it('should return user when found', async () => {
    const [isSuccess, data, error] = await usersApi.get(1)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toMatchObject({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    })
  })

  it('should return 404 error when user not found', async () => {
    const [isSuccess, data, error] = await usersApi.get(999)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.status).toBe(404)
    expect(error?.code).toBe('NOT_FOUND')
  })

  it('should validate ID parameter - negative numbers', async () => {
    const [isSuccess, data, error] = await usersApi.get(-1)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(WrapperError)
    expect(error?.code).toBe('INVALID_ID')
    expect(error?.message).toBe('Invalid user ID')
    expect(error?.status).toBe(400)
  })

  it('should validate ID parameter - zero', async () => {
    const [isSuccess, data, error] = await usersApi.get(0)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should validate ID parameter - decimal numbers', async () => {
    const [isSuccess, data, error] = await usersApi.get(1.5)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should validate ID parameter - NaN', async () => {
    const [isSuccess, data, error] = await usersApi.get(NaN)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should handle server errors for specific user', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users/1', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    const [isSuccess, data, error] = await usersApi.get(1)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(500)
  })
})

describe('Users API - usersApi.findByEmail(email)', () => {
  it('should find users by email', async () => {
    const [isSuccess, data, error] =
      await usersApi.findByEmail('john@example.com')

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toHaveLength(1)
    expect(data![0].email).toBe('john@example.com')
    expect(data![0].name).toBe('John Doe')
  })

  it('should return empty array when no users found', async () => {
    const [isSuccess, data, error] = await usersApi.findByEmail(
      'notfound@example.com',
    )

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toHaveLength(0)
  })

  it('should validate email format', async () => {
    const invalidEmails = [
      'invalid-email',
      '@example.com',
      'test@',
      'test..test@example.com',
      '',
      'test space@example.com',
    ]

    for (const email of invalidEmails) {
      const [isSuccess, data, error] = await usersApi.findByEmail(email)

      expect(isSuccess).toBe(false)
      expect(data).toBeNull()
      expect(error).toBeInstanceOf(WrapperError)
      expect(error?.code).toBe('INVALID_EMAIL')
      expect(error?.message).toBe('Invalid email format')
      expect(error?.status).toBe(400)
    }
  })

  it('should handle valid email formats', async () => {
    const validEmails = [
      'test@example.com',
      'user.name@domain.org',
      'name+tag@example.co.uk',
    ]

    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        // Return empty array for test emails
        return HttpResponse.json([])
      }),
    )

    for (const email of validEmails) {
      const [isSuccess, data, error] = await usersApi.findByEmail(email)

      // Should not throw validation error
      expect(isSuccess).toBe(true)
      expect(error).toBeNull()
      expect(data).toEqual([])
    }
  })

  it('should handle server errors during search', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    const [isSuccess, data, error] =
      await usersApi.findByEmail('test@example.com')

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(500)
  })
})

describe('Users API - usersApi.create(userData)', () => {
  it('should create a new user with complete data', async () => {
    const newUserData = {
      name: 'New User',
      username: 'newuser',
      email: 'new@example.com',
      address: mockUser.address,
      phone: '555-9999',
      website: 'new.example.com',
      company: mockUser.company,
    }

    const [isSuccess, data, error] = await usersApi.create(newUserData)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toMatchObject({
      name: 'New User',
      username: 'newuser',
      email: 'new@example.com',
    })
    expect(typeof data!.id).toBe('number')
    expect(data!.id).toBeGreaterThan(0)
  })

  it('should create user with minimal required data', async () => {
    const minimalUserData = {
      name: 'Minimal User',
      username: 'minimal',
      email: 'minimal@example.com',
      address: {
        street: 'Main St',
        suite: '',
        city: 'City',
        zipcode: '12345',
        geo: { lat: '0', lng: '0' },
      },
      phone: '123-456-7890',
      website: 'example.com',
      company: {
        name: 'Company',
        catchPhrase: 'Phrase',
        bs: 'business',
      },
    }

    const [isSuccess, data, error] = await usersApi.create(minimalUserData)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data?.name).toBe('Minimal User')
  })

  it('should handle server errors during creation', async () => {
    server.use(
      http.post('https://jsonplaceholder.typicode.com/users', () => {
        return new HttpResponse(null, { status: 400 })
      }),
    )

    const userData = {
      name: 'Test User',
      username: 'test',
      email: 'test@example.com',
      address: mockUser.address,
      phone: '555-0000',
      website: 'test.com',
      company: mockUser.company,
    }

    const [isSuccess, data, error] = await usersApi.create(userData)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(400)
    expect(error?.code).toBe('BAD_REQUEST')
  })

  it('should handle validation errors for malformed data', async () => {
    server.use(
      http.post('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json({
          id: 'not-a-number', // Invalid response that will fail Zod validation
          name: 123,
        })
      }),
    )

    const userData = {
      name: 'Test User',
      username: 'test',
      email: 'test@example.com',
      address: mockUser.address,
      phone: '555-0000',
      website: 'test.com',
      company: mockUser.company,
    }

    const [isSuccess, data, error] = await usersApi.create(userData)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('VALIDATION_ERROR')
    expect(error?.status).toBe(422)
  })
})

describe('Users API - usersApi.update(id, updates)', () => {
  it('should update user successfully with partial data', async () => {
    const updates = { name: 'Updated Name' }
    const [isSuccess, data, error] = await usersApi.update(1, updates)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data!.name).toBe('Updated Name')
    expect(data!.id).toBe(1)
    expect(data!.email).toBe('john@example.com') // unchanged
  })

  it('should update multiple fields', async () => {
    const updates = {
      name: 'New Name',
      email: 'newemail@example.com',
      phone: '555-UPDATED',
    }
    const [isSuccess, data, error] = await usersApi.update(1, updates)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data!.name).toBe('New Name')
    expect(data!.email).toBe('newemail@example.com')
    expect(data!.phone).toBe('555-UPDATED')
  })

  it('should return 404 for non-existent user', async () => {
    const [isSuccess, data, error] = await usersApi.update(999, {
      name: 'New Name',
    })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(404)
    expect(error?.code).toBe('NOT_FOUND')
  })

  it('should validate ID parameter', async () => {
    const [isSuccess, data, error] = await usersApi.update(-1, { name: 'Test' })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should handle empty updates object', async () => {
    const [isSuccess, data, error] = await usersApi.update(1, {})

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data?.id).toBe(1)
    // Original data should be preserved
    expect(data?.name).toBe('John Doe')
  })

  it('should handle server errors during update', async () => {
    server.use(
      http.put('https://jsonplaceholder.typicode.com/users/1', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    const [isSuccess, data, error] = await usersApi.update(1, { name: 'Test' })

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(500)
  })
})

describe('Users API - usersApi.delete(id)', () => {
  it('should delete user successfully', async () => {
    const [isSuccess, data, error] = await usersApi.delete(1)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toBeUndefined()
  })

  it('should return 404 for non-existent user', async () => {
    const [isSuccess, data, error] = await usersApi.delete(999)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(404)
    expect(error?.code).toBe('NOT_FOUND')
  })

  it('should validate ID parameter - negative', async () => {
    const [isSuccess, data, error] = await usersApi.delete(-1)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should validate ID parameter - zero', async () => {
    const [isSuccess, data, error] = await usersApi.delete(0)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should validate ID parameter - decimal', async () => {
    const [isSuccess, data, error] = await usersApi.delete(1.5)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.code).toBe('INVALID_ID')
  })

  it('should handle server errors during deletion', async () => {
    server.use(
      http.delete('https://jsonplaceholder.typicode.com/users/1', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    const [isSuccess, data, error] = await usersApi.delete(1)

    expect(isSuccess).toBe(false)
    expect(data).toBeNull()
    expect(error?.status).toBe(500)
  })

  it('should handle different success status codes', async () => {
    // Some APIs return 204 No Content for successful deletion
    server.use(
      http.delete('https://jsonplaceholder.typicode.com/users/1', () => {
        return new HttpResponse(null, { status: 204 })
      }),
    )

    const [isSuccess, data, error] = await usersApi.delete(1)

    expect(isSuccess).toBe(true)
    expect(error).toBeNull()
    expect(data).toBeUndefined()
  })
})

describe('Users API - Integration Tests', () => {
  it('should handle a complete CRUD workflow', async () => {
    // 1. Create a user
    const newUser = {
      name: 'Integration Test User',
      username: 'integration',
      email: 'integration@test.com',
      address: mockUser.address,
      phone: '555-TEST',
      website: 'test.com',
      company: mockUser.company,
    }

    const [createSuccess, createdUser] = await usersApi.create(newUser)
    expect(createSuccess).toBe(true)
    expect(createdUser?.name).toBe('Integration Test User')

    // 2. Get the created user (simulate with existing mock)
    const [getSuccess, retrievedUser] = await usersApi.get(1)
    expect(getSuccess).toBe(true)
    expect(retrievedUser?.id).toBe(1)

    // 3. Update the user
    const [updateSuccess, updatedUser] = await usersApi.update(1, {
      name: 'Updated Integration User',
    })
    expect(updateSuccess).toBe(true)
    expect(updatedUser?.name).toBe('Updated Integration User')

    // 4. Find user by email
    const [findSuccess, foundUsers] =
      await usersApi.findByEmail('john@example.com')
    expect(findSuccess).toBe(true)
    expect(foundUsers?.length).toBeGreaterThan(0)

    // 5. List all users
    const [listSuccess, allUsers] = await usersApi.all()
    expect(listSuccess).toBe(true)
    expect(allUsers?.length).toBeGreaterThan(0)

    // 6. Delete the user
    const [deleteSuccess] = await usersApi.delete(1)
    expect(deleteSuccess).toBe(true)
  })

  it('should handle concurrent operations', async () => {
    // Perform multiple operations concurrently
    const operations = [
      usersApi.all(),
      usersApi.get(1),
      usersApi.get(2),
      usersApi.findByEmail('john@example.com'),
      usersApi.findByEmail('jane@example.com'),
    ]

    const results = await Promise.all(operations)

    // All operations should succeed
    results.forEach((result) => {
      const [isSuccess, , error] = result
      expect(isSuccess).toBe(true)
      expect(error).toBeNull()
    })
  })

  it('should maintain type safety across all operations', async () => {
    // Test that TypeScript types are correctly inferred
    const [isSuccess, data, error] = await usersApi.get(1)

    if (isSuccess) {
      // In this block, TypeScript knows data is User, not null
      expect(typeof data.id).toBe('number')
      expect(typeof data.name).toBe('string')
      expect(typeof data.email).toBe('string')
      expect(error).toBeNull()
    } else {
      // In this block, TypeScript knows data is null, error is WrapperError
      expect(data).toBeNull()
      expect(error).toBeInstanceOf(WrapperError)
    }
  })

  it('should handle error scenarios gracefully', async () => {
    // Test various error scenarios
    const errorTests = [
      { fn: () => usersApi.get(-1), expectedCode: 'INVALID_ID' },
      { fn: () => usersApi.get(999), expectedCode: 'NOT_FOUND' },
      {
        fn: () => usersApi.findByEmail('invalid-email'),
        expectedCode: 'INVALID_EMAIL',
      },
      { fn: () => usersApi.update(-1, {}), expectedCode: 'INVALID_ID' },
      { fn: () => usersApi.delete(0), expectedCode: 'INVALID_ID' },
    ]

    for (const { fn, expectedCode } of errorTests) {
      const [isSuccess, data, error] = await fn()

      expect(isSuccess).toBe(false)
      expect(data).toBeNull()
      expect(error?.code).toBe(expectedCode)
    }
  })
})

describe('Users API - Authentication Use Case', () => {
  it('should demonstrate creating authenticated wrapper', () => {
    // 🔐 Exemple d'utilisation avec authentification
    const authenticatedUsersWrapper = createWrapper(
      'https://jsonplaceholder.typicode.com/users',
    ).auth('my-api-key')

    // Verify that the wrapper was created correctly
    expect(authenticatedUsersWrapper).toBeDefined()
    expect(typeof authenticatedUsersWrapper.get).toBe('function')
    expect(typeof authenticatedUsersWrapper.post).toBe('function')
    expect(typeof authenticatedUsersWrapper.put).toBe('function')
    expect(typeof authenticatedUsersWrapper.delete).toBe('function')
  })

  it('should demonstrate creating authenticated users API factory', () => {
    // 🚀 Example of creating a users API factory with authentication
    const createAuthenticatedUsersApi = (apiKey: string) => {
      const authenticatedWrapper = createWrapper(
        'https://jsonplaceholder.typicode.com/users',
      ).auth(apiKey)

      return {
        all: (): Promise<WrapperResult<User[]>> => {
          return safeRequest(() =>
            fetchAndValidate(authenticatedWrapper.get(), z.array(UserSchema)),
          )
        },
        get: (id: number): Promise<WrapperResult<User>> => {
          return safeRequest(() => {
            checkId(id)
            return fetchAndValidate(
              authenticatedWrapper.url(`/${id}`).get(),
              UserSchema,
            )
          })
        },
        create: (user: Omit<User, 'id'>): Promise<WrapperResult<User>> => {
          return safeRequest(() =>
            fetchAndValidate(authenticatedWrapper.post(user), UserSchema),
          )
        },
        update: (
          id: number,
          user: Partial<User>,
        ): Promise<WrapperResult<User>> => {
          return safeRequest(() => {
            checkId(id)
            checkSchema(user, UserSchema.partial(), 'user')
            return fetchAndValidate(
              authenticatedWrapper.url(`/${id}`).put(user),
              UserSchema,
            )
          })
        },
        delete: (id: number): Promise<WrapperResult<void>> => {
          return safeRequest(async () => {
            checkId(id)
            const response = authenticatedWrapper.url(`/${id}`).delete()
            await response.res()
          })
        },
      }
    }

    // Using the API factory
    const authUsersApi = createAuthenticatedUsersApi('my-api-key')

    // Verify that all methods are available
    expect(typeof authUsersApi.all).toBe('function')
    expect(typeof authUsersApi.get).toBe('function')
    expect(typeof authUsersApi.create).toBe('function')
    expect(typeof authUsersApi.update).toBe('function')
    expect(typeof authUsersApi.delete).toBe('function')
  })

  it('should show different authentication methods', () => {
    const baseUrl = 'https://api.example.com/users'

    // 🔑 Bearer token authentication
    const bearerAuthWrapper = createWrapper(baseUrl).auth('my-bearer-token')
    expect(bearerAuthWrapper).toBeDefined()

    // 🔑 Authentication with custom headers
    const customHeaderWrapper = createWrapper(baseUrl).headers({
      'X-API-Key': 'my-api-key',
      'X-Client-Version': '1.0.0',
    })
    expect(customHeaderWrapper).toBeDefined()

    // 🔑 Combined authentication
    const combinedAuthWrapper = createWrapper(baseUrl)
      .auth('bearer-token')
      .headers({ 'X-API-Key': 'api-key' })
    expect(combinedAuthWrapper).toBeDefined()

    // 🚀 These wrappers can be used to create business APIs
    // Example: const authUsersApi = createUsersApi(bearerAuthWrapper)
  })
})
