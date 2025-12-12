# @myorg/font-package

A font package for distributing web fonts with proper type definitions.

[Version française](./README_FR.md)

## Features

- 🔤 Web font files (WOFF, WOFF2, TTF, OTF, EOT)
- 📦 Simple distribution of font assets
- 🎯 TypeScript declarations included
- 🔄 Auto-copy build process
- 🛠️ Watch mode for development

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
pnpm add @myorg/font-package
```

## Usage

### In CSS

```css
@font-face {
  font-family: 'Inter';
  src: url('@myorg/font-package/inter-regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

### In TypeScript

```typescript
import '@myorg/font-package/inter-regular.ttf'
```

### With Vite/Webpack

```typescript
import interRegular from '@myorg/font-package/inter-regular.ttf'
```

## Available Scripts

### Development

```bash
# Watch mode - auto-copy fonts on changes
pnpm dev

# Type checking
pnpm typecheck
```

### Build

```bash
# Build for production (copy fonts to dist/)
pnpm build
```

### Maintenance

```bash
# Clean generated files
pnpm clean
```

## Project Structure

```text
font-package/
├── src/
│   ├── Inter-Regular.ttf   # Font file
│   └── index.d.ts          # TypeScript declarations
├── dist/                   # Built fonts (generated)
│   ├── Inter-Regular.ttf
│   └── index.d.ts
├── turbo/
│   └── package.json        # Turbo config
└── package.json
```

## Adding New Fonts

1. Add your font files to `src/` directory:

   ```bash
   cp MyFont.woff MyFont.woff2 src/
   ```

2. Update `package.json` exports:

   ```json
   {
     "exports": {
       "./my-font.woff": "./src/MyFont.woff",
       "./my-font.woff2": "./src/MyFont.woff2"
     },
     "publishConfig": {
       "exports": {
         "./my-font.woff": "./dist/MyFont.woff",
         "./my-font.woff2": "./dist/MyFont.woff2"
       }
     }
   }
   ```

3. Build:
   ```bash
   pnpm build
   ```

## Supported Font Formats

- `.woff` - Web Open Font Format
- `.woff2` - Web Open Font Format 2 (compressed)
- `.ttf` - TrueType Font
- `.otf` - OpenType Font
- `.eot` - Embedded OpenType (legacy IE support)

## Build Process

The build script:

1. Creates `dist/` directory
2. Copies all font files from `src/` to `dist/`
3. Copies `index.d.ts` for TypeScript support

In development mode with `pnpm dev`, this process runs automatically when font files change.

## Exports

```json
{
  "exports": {
    "./inter-regular.ttf": "./src/Inter-Regular.ttf",
    "./index.d.ts": "./src/index.d.ts",
    "./*": "./src/*"
  },
  "publishConfig": {
    "exports": {
      "./inter-regular.ttf": "./dist/Inter-Regular.ttf",
      "./index.d.ts": "./dist/index.d.ts",
      "./*": "./dist/*"
    }
  }
}
```

## TypeScript Support

The package includes type declarations for importing font files:

```typescript
declare module '*.woff' {
  const content: string
  export default content
}

declare module '*.woff2' {
  const content: string
  export default content
}

declare module '*.ttf' {
  const content: string
  export default content
}

declare module '*.otf' {
  const content: string
  export default content
}

declare module '*.eot' {
  const content: string
  export default content
}
```

## License

MIT
