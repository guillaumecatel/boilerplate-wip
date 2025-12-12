# @myorg/react-package

A React component package with TypeScript support, testing, and automated builds.

[Version française](./README_FR.md)

## Features

- ⚛️ React 19 components
- 📦 ESM and CJS exports
- 🎯 TypeScript with full type definitions
- 🧪 Testing with Vitest and Testing Library
- 🔄 Auto-generated exports from source files
- 🛠️ Built with tsdown for optimal bundle size

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
pnpm add @myorg/react-package
```

## Usage

```tsx
import { Button } from '@myorg/react-package'
// or
import { Button } from '@myorg/react-package/button'

function App() {
  return <Button>Click me</Button>
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

This package includes Turbo generators for scaffolding new components and hooks:

### Create a Component

```bash
# From workspace root
pnpm turbo gen @myorg/react-package create component

# Or from package directory
pnpm gen
```

This will:

- Create `src/YourComponent.tsx`
- Create `tests/YourComponent.test.tsx`
- Update `package.json` exports
- Update `src/index.ts`

### Create a Hook

```bash
# From workspace root
pnpm turbo gen @myorg/react-package create hook

# Or from package directory
pnpm gen
```

This will:

- Create `src/useYourHook.ts`
- Create `tests/useYourHook.test.ts`
- Update `package.json` exports
- Update `src/index.ts`

### Sync Exports

Automatically synchronize `package.json` exports and `src/index.ts` with all files in `src/`:

```bash
# From workspace root
pnpm turbo gen @myorg/react-package sync exports

# Or from package directory
pnpm gen
```

This scans the `src/` directory and updates:

- All export statements in `src/index.ts`
- All exports in `package.json`
- All publishConfig exports in `package.json`

## Project Structure

```text
react-package/
├── src/
│   ├── Button.tsx          # Example component
│   └── index.ts            # Main entry point
├── tests/
│   └── Button.test.tsx     # Component tests
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

## Exports

This package uses conditional exports for optimal compatibility:

```json
{
  "exports": {
    "./button": "./src/Button.tsx",
    ".": "./src/index.ts"
  },
  "publishConfig": {
    "exports": {
      "./button": {
        "import": "./dist/Button.js",
        "require": "./dist/Button.cjs",
        "types": "./dist/Button.d.ts"
      },
      ".": {
        "import": "./dist/*.js",
        "require": "./dist/*.cjs",
        "types": "./dist/*.d.ts"
      }
    }
  }
}
```

## Testing

Tests are written with Vitest and React Testing Library:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## Development Workflow

1. **Create a component**: `pnpm gen` → Choose "create component"
2. **Develop with hot reload**: `pnpm dev`
3. **Write tests**: Add tests in `tests/` directory
4. **Run tests**: `pnpm test`
5. **Build for production**: `pnpm build`
6. **Sync exports** (if needed): `pnpm gen` → Choose "sync exports"

## License

MIT
