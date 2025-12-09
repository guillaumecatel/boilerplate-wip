# @myorg/font-package

False

## Installation

```bash
pnpm add @myorg/font-package
```

## Usage

Import fonts in your project:

```typescript
import '@myorg/font-package/font-name.woff2'
```

## Available Fonts

Place your font files in the `src/` directory. Supported formats:
- `.woff2`
- `.woff`
- `.ttf`
- `.otf`
- `.eot`

## Development

```bash
# Copy fonts to dist
pnpm dev

# Build for production
pnpm build

# Clean build artifacts
pnpm clean
```
