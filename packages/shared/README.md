# @myorg/shared

🛠️ **Shared TypeScript Utilities for Monorepo**

A collection of well-typed utility functions and type aliases designed to be shared across all applications and packages in this monorepo. This package provides essential building blocks for type-safe development with zero runtime dependencies.

## ✨ Features

- 🛡️ **Type Safety**: Strict TypeScript with comprehensive type guards and aliases
- 🔍 **Runtime Type Checking**: Reliable type guards for JavaScript values
- 📊 **Utility Types**: Common type aliases for nullable, maybe, and primitive types
- 🏗️ **Zero Dependencies**: No external runtime dependencies
- ⚡ **Tree Shakable**: Modular exports for optimal bundle size
- 🔒 **Well Tested**: Comprehensive test coverage for all utilities
- 📚 **Fully Documented**: Complete JSDoc documentation with examples

## 🏢 Monorepo Usage

This package is designed specifically for internal use within this monorepo. It's automatically available to all applications and packages without publishing to npm.

### In Any Application or Package

```typescript
// Import everything
import { isString, isNumber, Nullable } from '@myorg/shared'

// Import specific modules
import { isTruthy, isDefined } from '@myorg/shared/guards'
import { Maybe, Primitive } from '@myorg/shared/alias'
```

## 📚 API Reference

### 🏷️ Type Aliases (`@myorg/shared/alias`)

Collection of commonly used type aliases that enhance code readability and type safety.

#### `Nullable<T>`

Represents a value that can be `null`.

```typescript
import { Nullable } from '@myorg/shared/alias'

type UserName = Nullable<string>
// Equivalent to: string | null

function processUserName(name: UserName) {
  if (name === null) {
    console.log('No name provided')
  } else {
    console.log(`Hello, ${name}`)
  }
}
```

#### `Maybe<T>`

Represents a value that can be `undefined`.

```typescript
import { Maybe } from '@myorg/shared/alias'

type OptionalConfig = Maybe<{ apiUrl: string }>
// Equivalent to: { apiUrl: string } | undefined

function initializeApp(config: OptionalConfig) {
  if (config === undefined) {
    console.log('Using default configuration')
  } else {
    console.log(`API URL: ${config.apiUrl}`)
  }
}
```

#### `Falsy`

Type representing all falsy values in JavaScript.

```typescript
import { Falsy } from '@myorg/shared/alias'

type Various = 'active' | 'inactive' | Falsy

// Use with Exclude to remove falsy values
type CleanVarious = Exclude<Various, Falsy>
// Result: 'active' | 'inactive'
```

#### `Primitive`

Type representing all primitive types in JavaScript.

```typescript
import { Primitive } from '@myorg/shared/alias'

type MixedData = Primitive | object | Array<unknown>

// Use to separate primitives from complex types
type OnlyPrimitives = Extract<MixedData, Primitive>
// Result: string | number | bigint | boolean | symbol | null | undefined
```

#### `Nullish`

Type representing nullish values (`null | undefined`).

```typescript
import { Nullish } from '@myorg/shared/alias'

function processValue<T>(value: T | Nullish): T | 'empty' {
  if (value == null) {
    // Covers both null and undefined
    return 'empty'
  }
  return value
}
```

### 🛡️ Type Guards (`@myorg/shared/guards`)

Runtime type checking functions that provide type narrowing in TypeScript.

#### Basic Type Guards

##### `isString(val)`

Tests if a value is a string primitive.

```typescript
import { isString } from '@myorg/shared/guards'

function processInput(input: unknown) {
  if (isString(input)) {
    // TypeScript knows input is string here
    return input.toUpperCase()
  }
  throw new Error('Expected string input')
}
```

##### `isNumber(val)`

Tests if a value is a valid number (excludes NaN).

```typescript
import { isNumber } from '@myorg/shared/guards'

function calculateTax(value: unknown, rate: number) {
  if (isNumber(value)) {
    // TypeScript knows value is number here
    return value * rate
  }
  throw new Error('Invalid numeric value')
}
```

##### `isBoolean(val)`

Tests if a value is a boolean primitive.

```typescript
import { isBoolean } from '@myorg/shared/guards'

function processFlag(flag: unknown) {
  if (isBoolean(flag)) {
    // TypeScript knows flag is boolean here
    return flag ? 'enabled' : 'disabled'
  }
  return 'unknown'
}
```

##### `isFunction(val)`

Tests if a value is a function.

```typescript
import { isFunction } from '@myorg/shared/guards'

function executeCallback(callback: unknown, ...args: unknown[]) {
  if (isFunction(callback)) {
    // TypeScript knows callback is function here
    return callback(...args)
  }
  throw new Error('Callback must be a function')
}
```

#### Complex Type Guards

##### `isObject(val)`

Tests if a value is a plain object (excludes arrays, null, Date, etc.).

```typescript
import { isObject } from '@myorg/shared/guards'

function processConfig(config: unknown) {
  if (isObject(config)) {
    // TypeScript knows config is Record<string, unknown> here
    const apiUrl = config.apiUrl
    const timeout = config.timeout
    // ... safe to access properties
  }
}
```

##### `isArray(val)`

Tests if a value is an array.

```typescript
import { isArray } from '@myorg/shared/guards'

function processItems(items: unknown) {
  if (isArray(items)) {
    // TypeScript knows items is Array<unknown> here
    return items.map((item) => String(item))
  }
  return []
}
```

##### `isDate(val)`

Tests if a value is a valid Date object.

```typescript
import { isDate } from '@myorg/shared/guards'

function formatDate(date: unknown): string {
  if (isDate(date)) {
    // TypeScript knows date is Date here
    return date.toISOString()
  }
  return 'Invalid date'
}
```

##### `isRegExp(val)`

Tests if a value is a RegExp object.

```typescript
import { isRegExp } from '@myorg/shared/guards'

function testPattern(pattern: unknown, text: string): boolean {
  if (isRegExp(pattern)) {
    // TypeScript knows pattern is RegExp here
    return pattern.test(text)
  }
  return false
}
```

##### `isError(val)`

Tests if a value is an Error object.

```typescript
import { isError } from '@myorg/shared/guards'

function handleException(error: unknown) {
  if (isError(error)) {
    // TypeScript knows error is Error here
    console.error(error.message, error.stack)
  } else {
    console.error('Unknown error:', error)
  }
}
```

#### Nullish and Undefined Guards

##### `isUndefined(val)`

Tests if a value is undefined.

```typescript
import { isUndefined } from '@myorg/shared/guards'

function processOptional(value: string | undefined) {
  if (isUndefined(value)) {
    return 'No value provided'
  }
  // TypeScript knows value is string here
  return value.trim()
}
```

##### `isDefined(val)`

Tests if a value is defined (not undefined).

```typescript
import { isDefined } from '@myorg/shared/guards'

const values: (string | undefined)[] = ['hello', undefined, 'world']
const definedValues = values.filter(isDefined)
// TypeScript knows definedValues is string[] here
```

##### `isNull(val)`

Tests if a value is null.

```typescript
import { isNull } from '@myorg/shared/guards'

function processNullable(value: string | null) {
  if (isNull(value)) {
    return 'Value is null'
  }
  // TypeScript knows value is string here
  return value.toUpperCase()
}
```

##### `isNonNull(val)`

Tests if a value is not null.

```typescript
import { isNonNull } from '@myorg/shared/guards'

const values: (string | null)[] = ['hello', null, 'world']
const nonNullValues = values.filter(isNonNull)
// TypeScript knows nonNullValues is string[] here
```

##### `isNullish(val)`

Tests if a value is nullish (null or undefined).

```typescript
import { isNullish } from '@myorg/shared/guards'

function processValue(value: string | null | undefined): string {
  if (isNullish(value)) {
    return 'No value'
  }
  // TypeScript knows value is string here
  return value.trim()
}
```

#### Truthiness Guards

##### `isTruthy(val)`

Tests if a value is truthy.

```typescript
import { isTruthy, Falsy } from '@myorg/shared'

const values: (string | Falsy)[] = ['hello', '', 'world', 0, false]
const truthyValues = values.filter(isTruthy)
// TypeScript knows truthyValues is string[] here
console.log(truthyValues) // ['hello', 'world']
```

##### `isFalsy(val)`

Tests if a value is falsy.

```typescript
import { isFalsy } from '@myorg/shared/guards'

function processValue(value: boolean | string | number) {
  if (isFalsy(value)) {
    console.log('Value is falsy:', value)
    return
  }
  console.log('Value is truthy:', value)
}
```

#### Advanced Guards

##### `isPrimitive(val)`

Tests if a value is a primitive type.

```typescript
import { isPrimitive } from '@myorg/shared/guards'

function serialize(value: unknown): string {
  if (isPrimitive(value)) {
    // TypeScript knows value is Primitive here
    return String(value)
  }
  // Handle complex objects
  return JSON.stringify(value)
}
```

##### `isNaN(val)`

Tests if a value is NaN (Not-a-Number).

```typescript
import { isNaN } from '@myorg/shared/guards'

function validateNumber(input: unknown) {
  if (isNaN(input)) {
    throw new Error('Invalid number operation resulted in NaN')
  }
  // Continue with valid number processing
}
```

## 🎨 Usage Examples

### Filtering Arrays with Type Safety

```typescript
import { isDefined, isTruthy, isString } from '@myorg/shared/guards'

// Remove undefined values
const maybeStrings: (string | undefined)[] = ['hello', undefined, 'world']
const definedStrings = maybeStrings.filter(isDefined)
// Type: string[]

// Remove falsy values
const mixedValues: (string | number | false | '' | 0)[] = [
  'hello',
  0,
  'world',
  '',
  false,
  42,
]
const truthyValues = mixedValues.filter(isTruthy)
// Type: (string | number)[]

// Filter by type
const unknownValues: unknown[] = ['hello', 42, true, {}, []]
const strings = unknownValues.filter(isString)
// Type: string[]
```

### Safe Object Property Access

```typescript
import { isObject, isString } from '@myorg/shared/guards'

function extractUserName(data: unknown): string | null {
  if (isObject(data) && isString(data.name)) {
    return data.name
  }
  return null
}

// Usage
const userData = { name: 'John', age: 30 }
const userName = extractUserName(userData) // 'John'
```

### API Response Validation

```typescript
import { isObject, isString, isNumber, isArray } from '@myorg/shared/guards'

interface User {
  id: number
  name: string
  tags: string[]
}

function validateUser(data: unknown): User | null {
  if (
    isObject(data) &&
    isNumber(data.id) &&
    isString(data.name) &&
    isArray(data.tags) &&
    data.tags.every(isString)
  ) {
    return data as User
  }
  return null
}

// Usage with API
async function fetchUser(id: number): Promise<User | null> {
  const response = await fetch(`/api/users/${id}`)
  const data = await response.json()
  return validateUser(data)
}
```

### Error Handling

```typescript
import { isError } from '@myorg/shared/guards'

async function safeApiCall<T>(apiCall: () => Promise<T>): Promise<T | string> {
  try {
    return await apiCall()
  } catch (error) {
    if (isError(error)) {
      return `API Error: ${error.message}`
    }
    return 'Unknown error occurred'
  }
}
```

## 🏭 Architecture

```bash
packages/shared/src/
├── index.ts          # Main entry point (re-exports all)
├── alias.ts          # Type aliases (Nullable, Maybe, Falsy, etc.)
└── guards.ts         # Type guard functions (isString, isNumber, etc.)
```

### Modular Imports

You can import from specific modules for better tree-shaking:

```typescript
// Import specific utilities
import { Nullable, Maybe } from '@myorg/shared/alias'
import { isString, isNumber } from '@myorg/shared/guards'

// Or import everything
import { Nullable, Maybe, isString, isNumber } from '@myorg/shared'
```

## 🛠️ Development

### Available Scripts

```bash
# Build the package
pnpm build

# Run tests
pnpm test

# Type checking
pnpm typecheck

# Development with watch mode
pnpm dev

# Clean build artifacts
pnpm clean
```

### Adding New Utilities

#### Adding Type Aliases

1. Add new type to `src/alias.ts`
2. Export from `src/index.ts`
3. Add comprehensive JSDoc documentation
4. Include usage examples

```typescript
// src/alias.ts
/**
 * NewType
 * @desc Description of the new type
 * @example
 *   type Example = NewType<string>
 */
export type NewType<T> = T | SomeTransformation
```

#### Adding Type Guards

1. Add new guard function to `src/guards.ts`
2. Export from `src/index.ts`
3. Include comprehensive JSDoc documentation
4. Add thorough test coverage

```typescript
// src/guards.ts
/**
 * Tests if a value meets specific criteria.
 *
 * @param val - The value to be tested
 * @returns `true` if `val` meets the criteria
 *
 * @example
 *   if (isNewType(value)) {
 *     // TypeScript knows value is NewType here
 *     // Safe to use value as NewType
 *   }
 */
export const isNewType = (val: unknown): val is NewType => {
  // Implementation
  return /* boolean condition */
}
```

## 🚀 Monorepo Integration

### Workspace Dependencies

This package is configured as a workspace dependency and is automatically available to all apps and packages:

```json
// In any app's or package's package.json
{
  "dependencies": {
    "@myorg/shared": "workspace:*"
  }
}
```

### Development Workflow

1. **Make changes** to the shared utilities
2. **Test locally** using `pnpm test`
3. **Use immediately** in any app/package - no build step required for development
4. **Build for production** when deploying apps

### Cross-Platform Compatibility

The utilities work consistently across all platforms and frameworks:

```typescript
// Same imports everywhere - React, React Native, Astro, Node.js, etc.
import { isString, Nullable } from '@myorg/shared'

// Same behavior everywhere
const processValue = (value: Nullable<string>) => {
  if (isString(value)) {
    return value.toUpperCase()
  }
  return 'No value'
}
```

## 📄 License

MIT

---

**🎯 Built for type-safe development across the entire monorepo ecosystem!**
