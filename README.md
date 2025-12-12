# 🚀 Monorepo Boilerplate

**Production-Ready Monorepo Template for Rapid Development**

[Version française](./README_FR.md)

A comprehensive monorepo boilerplate designed to accelerate project development through reusable packages and example applications. This repository serves as a centralized foundation for building various types of applications while maintaining consistency, quality, and best practices across all projects.

## 🎯 Vision & Philosophy

This monorepo is built on the principle of **"Clone, Customize, Ship"** - providing a solid foundation that can be quickly adapted for specific project needs.

## ✨ Features

- 🏗️ **Turborepo** - High-performance build system for JavaScript/TypeScript monorepos
- 📦 **pnpm** - Fast, disk space efficient package manager with workspace support
- 🎨 **Tailwind CSS 4** - Shared CSS configuration across all projects
- 🌍 **i18n Ready** - Paraglide.js integration for type-safe internationalization
- 🧪 **Testing** - Vitest setup with comprehensive test coverage
- 🔧 **Generators** - Turbo generators for scaffolding packages, apps, and components
- 📝 **TypeScript** - Full type safety across the entire monorepo
- ♿ **Accessibility** - Built with WCAG compliance in mind
- 🚀 **CI/CD Ready** - GitHub Actions workflows included

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 24.0.0
- **pnpm** >= 10.0.0 (package manager)
- **nvm** (Node Version Manager) - recommended for managing Node.js versions

### Initial Setup

```bash
# Install the correct Node.js version
nvm use

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

## 📦 What's Included

### Applications (`apps/`)

#### astro-website

Production-ready Astro website with SSR, i18n support, and 100% Lighthouse score.

**Features:**

- ⚡ Astro 5 with Node.js adapter
- 🌍 French/English i18n with Paraglide.js
- 🎨 Tailwind CSS 4
- 🔒 Security headers and compression
- 📊 Perfect Lighthouse score
- 🧪 Vitest testing setup

**[View Documentation →](./apps/astro-website/README.md)**

#### storybook-react

Component library development environment with i18n support.

**Features:**

- 📖 Storybook 10 with React 19
- 🌍 Multilingual stories (FR/EN)
- ♿ Accessibility testing
- 🧪 Component testing with Vitest
- 🎨 Tailwind CSS 4 integration

**[View Documentation →](./apps/storybook-react/README.md)**

### Packages (`packages/`)

#### @myorg/react-package

React component library with TypeScript and testing.

**Features:**

- ⚛️ React 19 components
- 📦 ESM/CJS exports
- 🧪 Vitest + Testing Library
- 🔄 Auto-generated exports

**[View Documentation →](./packages/react-package/README.md)**

#### @myorg/typescript-package

TypeScript utilities and type guards.

**Features:**

- 🎯 Pure TypeScript utilities
- 🛡️ Type guards included
- 🔄 String transformation utilities
- 🧪 Comprehensive test coverage

**[View Documentation →](./packages/typescript-package/README.md)**

#### @myorg/font-package

Web font distribution package.

**Features:**

- 🔤 Multiple font formats (WOFF, WOFF2, TTF, OTF, EOT)
- 📦 Simple font asset distribution
- 🎯 TypeScript declarations
- 🔄 Watch mode for development

**[View Documentation →](./packages/font-package/README.md)**

### Configurations (`configs/`)

#### tailwind-config

Shared Tailwind CSS 4 configuration.

**Features:**

- 🎨 CSS-first configuration
- 📦 Workspace-wide sharing
- 🎯 TypeScript support
- 🔄 No JS config needed

**[View Documentation →](./configs/tailwind-config/README.md)**

## 🚀 Getting Started

### Getting Started

```bash
# Clone the repository using degit (without git history)
pnpm dlx degit https://github.com/guillaumecatel/boilerplate-wip my-project
cd my-project

# Copy environment variables
cp .env.example .env

# Install the correct Node.js version
nvm use

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Development Workflow

```bash
# Build all packages
pnpm build

# Run all tests
pnpm test

# Type check all packages
pnpm typecheck

# Format code
pnpm format

# Lint code
pnpm lint

# Clean all build artifacts
pnpm clean
```

## 🎨 Generators

This monorepo includes powerful Turbo generators for scaffolding:

### Create a New Application

```bash
pnpm gen
# Choose "app" → Select template → Enter name
```

**Available templates:**

- `astro-website` - Multilingual Astro website with SSR
- `storybook-react` - Component library with Storybook

### Create a New Package

```bash
pnpm gen
# Choose "package" → Select template → Enter name
```

**Available templates:**

- `react-package` - React component library
- `typescript-package` - TypeScript utility library
- `font-package` - Font distribution package

### Component/Hook Generators

Each package includes sub-generators:

```bash
# From package directory
cd packages/react-package
pnpm gen
# Choose: "create component", "create hook", or "sync exports"

cd packages/typescript-package
pnpm gen
# Choose: "create typescript file" or "sync exports"
```

### Story Generators

```bash
# From storybook-react directory
cd apps/storybook-react
pnpm gen
# Choose: "create stories"
```

## 📜 Available Scripts

### Workspace Root

```bash
pnpm build           # Build all packages and apps
pnpm dev             # Start all apps in development mode
pnpm test            # Run all tests
pnpm typecheck       # Type check all packages
pnpm lint            # Lint all code
pnpm format          # Format all code with Prettier
pnpm clean           # Clean all build artifacts
pnpm gen             # Run Turbo generators
pnpm check-updates   # Check for dependency updates
```

### Regenerate All Packages/Apps

```bash
pnpm gen:all         # Regenerate all packages and apps from templates
pnpm gen:packages    # Regenerate all packages
pnpm gen:apps        # Regenerate all apps
```

## 🏗️ Project Structure

```text
boilerplate-wip/
├── apps/                    # Applications
│   ├── astro-website/      # Astro SSR website
│   └── storybook-react/    # Storybook component library
├── packages/                # Shared packages
│   ├── react-package/      # React components
│   ├── typescript-package/ # TypeScript utilities
│   └── font-package/       # Font assets
├── configs/                 # Shared configurations
│   └── tailwind-config/    # Tailwind CSS config
├── turbo/                   # Turbo configuration
│   └── generators/         # Code generators
│       ├── actions.ts      # Custom generator actions
│       ├── config.ts       # Generator configuration
│       ├── helpers.ts      # Generator helpers
│       ├── validators.ts   # Input validators
│       └── templates/      # Generator templates
│           ├── apps/       # App templates
│           ├── packages/   # Package templates
│           └── internal/   # Shared templates
├── translations/            # i18n translation files
│   ├── en.json
│   └── fr.json
├── .nvmrc                  # Node.js version
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # pnpm workspace config
├── turbo.json              # Turborepo config
├── vitest.config.ts        # Vitest config
├── eslint.config.ts        # ESLint config
└── prettier.config.ts      # Prettier config
```

## 🔧 Technology Stack

### Core

- **[Turborepo](https://turbo.build/repo)** - Build system
- **[pnpm](https://pnpm.io/)** - Package manager
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vitest](https://vitest.dev/)** - Testing framework
- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Code formatting

### Frontend

- **[Astro](https://astro.build/)** - Web framework
- **[React](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Storybook](https://storybook.js.org/)** - Component development

### Build Tools

- **[tsdown](https://tsdown.vercel.app/)** - TypeScript bundler
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Paraglide.js](https://inlang.com/m/gerre34r/paraglide-js)** - i18n

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT

## 🙋 Support

For questions and support, please open an issue in the GitHub repository.
