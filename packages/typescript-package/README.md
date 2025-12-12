# @myorg/typescript-package

A TypeScript utility package with comprehensive testing and automated builds.

[Version française](./README_FR.md)

## Features

- 📦 ESM and CJS exports
- 🎯 Pure TypeScript with full type definitions
- 🧪 Testing with Vitest
- 🔄 Auto-generated exports from source files
- 🛠️ Built with tsdown for optimal bundle size
- 🛡️ Type guards and utilities included

## Prerequisites

- **Node.js** >= 24.0.0
- **pnpm** >= 10.0.0 (package manager)
- **nvm** (Node Version Manager) - recommended

```bash
# Install correct Node.js version
nvm use

# Install dependencies
pnpm install
```

## Installation

```bash
pnpm add @myorg/typescript-package
```

## Usage

```typescript
import { isString, isNumber } from '@myorg/typescript-package'
// or
import { isString } from '@myorg/typescript-package/guards'
import { kebabCase } from '@myorg/typescript-package/alias'

if (isString(value)) {
  console.log(value.toUpperCase())
}
```

## Available Scripts

### Development

```bash
# Watch mode with auto-rebuild
pnpm dev

# Type checking
pnpm typecheck

# Run tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

### Build

```bash
# Build for production
pnpm build
```

### Maintenance

```bash
# Clean generated files
pnpm clean
```

## Generator Commands

This package includes Turbo generators for scaffolding new utilities:

### Create a TypeScript File

```bash
# From workspace root
pnpm turbo gen @myorg/typescript-package create typescript file

# Or from package directory
pnpm gen
```

This will:

- Create `src/yourFile.ts`
- Create `tests/yourFile.test.ts`
- Update `package.json` exports
- Update `src/index.ts`

### Sync Exports

Automatically synchronize `package.json` exports and `src/index.ts` with all files in `src/`:

```bash
# From workspace root
pnpm turbo gen @myorg/typescript-package sync exports

# Or from package directory
pnpm gen
```

This scans the `src/` directory and updates:

- All export statements in `src/index.ts`
- All exports in `package.json`
- All publishConfig exports in `package.json`

## Project Structure

```text
typescript-package/
├── src/
│   ├── alias.ts            # String transformation utilities
│   ├── guards.ts           # Type guards
│   └── index.ts            # Main entry point
├── tests/
│   ├── alias.test.ts       # Alias tests
│   └── guards.test.ts      # Guard tests
├── turbo/
│   ├── package.json        # Turbo generator config
│   └── generators/
│       ├── config.ts       # Generator definitions
│       └── templates/      # (Uses shared templates from monorepo)
├── package.json
├── tsconfig.json
├── tsconfig.test.json
├── tsdown.config.ts        # Build configuration
└── vitest.config.ts        # Test configuration
```

## Included Utilities

### Type Guards (`guards.ts`)

```typescript
import {
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
} from '@myorg/typescript-package/guards'

// Comprehensive type checking utilities
if (isString(value)) {
  // TypeScript knows value is string here
}
```

### String Utilities (`alias.ts`)

```typescript
import {
  kebabCase,
  camelCase,
  pascalCase,
} from '@myorg/typescript-package/alias'

kebabCase('HelloWorld') // 'hello-world'
camelCase('hello-world') // 'helloWorld'
pascalCase('hello-world') // 'HelloWorld'
```

## Exports

This package uses conditional exports for optimal compatibility:

```json
{
  "exports": {
    "./alias": "./src/alias.ts",
    "./guards": "./src/guards.ts",
    ".": "./src/index.ts"
  },
  "publishConfig": {
    "exports": {
      "./alias": {
        "import": "./dist/alias.js",
        "require": "./dist/alias.cjs",
        "types": "./dist/alias.d.ts"
      },
      "./guards": {
        "import": "./dist/guards.js",
        "require": "./dist/guards.cjs",
        "types": "./dist/guards.d.ts"
      },
      ".": {
        "import": "./dist/index.js",
        "require": "./dist/index.cjs",
        "types": "./dist/index.d.ts"
      }
    }
  }
}
```

## Testing

Tests are written with Vitest:

```typescript
import { describe, expect, it } from 'vitest'
import { isString } from '@/guards'

describe('isString', () => {
  it('returns true for strings', () => {
    expect(isString('hello')).toBe(true)
  })

  it('returns false for non-strings', () => {
    expect(isString(123)).toBe(false)
  })
})
```

## Development Workflow

1. **Create a utility file**: `pnpm gen` → Choose "create typescript file"
2. **Develop with hot reload**: `pnpm dev`
3. **Write tests**: Add tests in `tests/` directory
4. **Run tests**: `pnpm test`
5. **Build for production**: `pnpm build`
6. **Sync exports** (if needed): `pnpm gen` → Choose "sync exports"

## License

MIT
