# @myorg/fonts

🔤 **Inter Font Family for Monorepo Applications**

A comprehensive font package providing the complete Inter font family with both static and variable font files. Designed to ensure consistent typography across all applications in this monorepo with optimal performance and tree-shakeable imports.

## ✨ Features

- 🎯 **Complete Inter Family**: All weights and styles from Thin (100) to Black (900)
- 🔤 **Inter Display**: Optimized for larger text sizes and display purposes
- ⚡ **Variable Fonts**: Modern variable font support for optimal performance
- 📦 **Tree-Shakeable**: Import only the font weights you need
- 🏗️ **Multiple Formats**: Both WOFF2 and TTF formats for maximum compatibility
- 🎨 **Ready-to-Use CSS**: Pre-configured @font-face declarations
- 📱 **Web Optimized**: Font-display: swap for improved loading performance
- 🌍 **Cross-Platform**: Works seamlessly across all frameworks and browsers

## 🏢 Monorepo Usage

This package is designed specifically for internal use within this monorepo. It's automatically available to all applications without publishing to npm.

### In CSS/Tailwind Applications

```css
/* Import the complete Inter CSS */
@import '@myorg/fonts/inter.css';

/* Use in your CSS */
body {
  font-family: 'Inter', sans-serif;
}

/* Or with variable font support */
body {
  font-family: 'InterVariable', sans-serif;
  font-optical-sizing: auto;
}
```

### In Next.js Applications

```tsx
// pages/_app.tsx or app/layout.tsx
import '@myorg/fonts/inter.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-inter'>{children}</body>
    </html>
  )
}
```

### In Vite/React Applications

```tsx
// main.tsx or App.tsx
import '@myorg/fonts/inter.css'
import './index.css'

function App() {
  return (
    <div className='font-inter'>
      <h1 className='font-bold'>Welcome</h1>
      <p className='font-normal'>Hello World</p>
    </div>
  )
}
```

## 🎯 Quick Start

### Installation

This package is automatically available as a workspace dependency:

```json
// In your app's package.json
{
  "dependencies": {
    "@myorg/fonts": "workspace:*"
  }
}
```

### Basic Usage

```css
/* Import all Inter fonts */
@import '@myorg/fonts/inter.css';

/* Apply to your root element */
html {
  font-family: 'Inter', sans-serif;
}

/* Or use with Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@myorg/fonts/inter.css';

@layer base {
  html {
    font-family: 'Inter', sans-serif;
  }
}
```

## 📚 Font Catalog

### 🔤 Inter Font Family

The classic Inter font family, perfect for body text and UI elements.

| Weight  | Style  | Import Path                                  | Use Case            |
| ------- | ------ | -------------------------------------------- | ------------------- |
| **100** | Normal | `@myorg/fonts/inter-thin.woff2`              | Ultra-light text    |
| **100** | Italic | `@myorg/fonts/inter-thin-italic.woff2`       | Ultra-light italic  |
| **200** | Normal | `@myorg/fonts/inter-extralight.woff2`        | Extra-light text    |
| **200** | Italic | `@myorg/fonts/inter-extralight-italic.woff2` | Extra-light italic  |
| **300** | Normal | `@myorg/fonts/inter-light.woff2`             | Light text          |
| **300** | Italic | `@myorg/fonts/inter-light-italic.woff2`      | Light italic        |
| **400** | Normal | `@myorg/fonts/inter-regular.woff2`           | Body text (default) |
| **400** | Italic | `@myorg/fonts/inter-italic.woff2`            | Body italic         |
| **500** | Normal | `@myorg/fonts/inter-medium.woff2`            | Medium weight       |
| **500** | Italic | `@myorg/fonts/inter-medium-italic.woff2`     | Medium italic       |
| **600** | Normal | `@myorg/fonts/inter-semibold.woff2`          | Semi-bold text      |
| **600** | Italic | `@myorg/fonts/inter-semibold-italic.woff2`   | Semi-bold italic    |
| **700** | Normal | `@myorg/fonts/inter-bold.woff2`              | Bold text           |
| **700** | Italic | `@myorg/fonts/inter-bold-italic.woff2`       | Bold italic         |
| **800** | Normal | `@myorg/fonts/inter-extrabold.woff2`         | Extra-bold text     |
| **800** | Italic | `@myorg/fonts/inter-extrabold-italic.woff2`  | Extra-bold italic   |
| **900** | Normal | `@myorg/fonts/inter-black.woff2`             | Black/Heavy text    |
| **900** | Italic | `@myorg/fonts/inter-black-italic.woff2`      | Black italic        |

### 🎨 Inter Display Font Family

Optimized for headlines, banners, and large text displays.

| Weight      | Style  | Import Path                                | Use Case            |
| ----------- | ------ | ------------------------------------------ | ------------------- |
| **100-900** | Normal | `@myorg/fonts/interdisplay-*.woff2`        | Headlines, banners  |
| **100-900** | Italic | `@myorg/fonts/interdisplay-*-italic.woff2` | Display italic text |

### ⚡ Variable Fonts

Modern variable fonts for ultimate flexibility and performance.

| Font                     | Import Path                                | Features                        |
| ------------------------ | ------------------------------------------ | ------------------------------- |
| **InterVariable**        | `@myorg/fonts/inter-variable.woff2`        | Complete weight range (100-900) |
| **InterVariable Italic** | `@myorg/fonts/inter-variable-italic.woff2` | Italic with full weight range   |

## 🌳 Tree-Shaking Examples

### Import Only What You Need

```css
/* ❌ Not optimal: Imports all font weights (~150KB) */
@import '@myorg/fonts/inter.css';

/* ✅ Optimal: Import only specific weights you use */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('@myorg/fonts/inter-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('@myorg/fonts/inter-bold.woff2') format('woff2');
}
```

### Webpack/Vite Configuration

```javascript
// vite.config.js or webpack.config.js
export default {
  // Ensure font files are properly handled
  assetsInclude: ['**/*.woff2', '**/*.ttf'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/fonts/[name].[hash][extname]',
      },
    },
  },
}
```

## 🎨 Typography System

### CSS Custom Properties

```css
:root {
  /* Font families */
  --font-inter: 'Inter', sans-serif;
  --font-inter-display: 'InterDisplay', sans-serif;
  --font-inter-variable: 'InterVariable', sans-serif;

  /* Font weights */
  --font-thin: 100;
  --font-extralight: 200;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
}
```

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'inter-display': ['InterDisplay', 'sans-serif'],
        'inter-variable': ['InterVariable', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
}
```

### Usage with Tailwind

```tsx
function TypographyExample() {
  return (
    <div className='font-inter'>
      <h1 className='font-inter-display text-4xl font-black'>Main Headline</h1>

      <h2 className='text-2xl font-bold'>Section Title</h2>

      <p className='text-base font-normal'>
        Regular body text with optimal readability.
      </p>

      <p className='text-sm font-medium text-gray-600'>Secondary information</p>

      <span className='text-xs font-light'>Fine print or captions</span>
    </div>
  )
}
```

## ⚡ Performance Optimization

### Font Loading Strategy

```css
/* Preload critical fonts */
<link rel="preload" href="@myorg/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="@myorg/fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin>

/* Use font-display: swap for better loading */
@font-face {
  font-family: 'Inter';
  font-display: swap; /* Prevents invisible text during font load */
  /* ... other properties */
}
```

### Variable Font Optimization

```css
/* Modern approach with variable fonts */
@supports (font-variation-settings: normal) {
  :root {
    font-family: 'InterVariable', sans-serif;
    font-optical-sizing: auto;
  }
}

/* Fallback for older browsers */
:root {
  font-family: 'Inter', sans-serif;
}
```

### Bundle Size Optimization

```css
/* ✅ Minimal setup: Only Regular + Bold (~25KB) */
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  src: url('@myorg/fonts/inter-regular.woff2') format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  font-weight: 700;
  src: url('@myorg/fonts/inter-bold.woff2') format('woff2');
  font-display: swap;
}

/* ✅ Variable font: All weights in one file (~30KB) */
@font-face {
  font-family: 'InterVariable';
  font-weight: 100 900;
  src: url('@myorg/fonts/inter-variable.woff2') format('woff2');
  font-display: swap;
}
```

## 🎯 Framework Integration

### Next.js App Router

```tsx
// app/layout.tsx
import '@myorg/fonts/inter.css'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className='font-inter'>
      <head>
        <link
          rel='preload'
          href='/_next/static/media/inter-regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin=''
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Next.js Pages Router

```tsx
// pages/_app.tsx
import '@myorg/fonts/inter.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='font-inter'>
      <Component {...pageProps} />
    </div>
  )
}
```

### Vite + React

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@myorg/fonts/inter.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Astro

```astro
---
// src/layouts/Layout.astro
import '@myorg/fonts/inter.css'
---

<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link
      rel='icon'
      type='image/svg+xml'
      href='/favicon.svg'
    />
    <meta
      name='viewport'
      content='width=device-width'
    />
    <title>{title}</title>
  </head>
  <body class='font-inter'>
    <slot />
  </body>
</html>

<style>
  html {
    font-family: 'Inter', sans-serif;
  }
</style>
```

## 🏗️ Architecture

```bash
packages/fonts/src/
├── index.d.ts           # TypeScript declarations for font files
└── inter/               # Inter font family
    ├── inter.css        # 🌳 Complete CSS with @font-face declarations
    ├── Inter-*.ttf      # 🌳 TTF format (all weights and styles)
    ├── Inter-*.woff2    # 🌳 WOFF2 format (all weights and styles)
    ├── InterDisplay-*   # 🌳 Display variant fonts
    └── InterVariable.*  # 🌳 Variable fonts
```

### Font File Organization

| Category           | Pattern                          | Count    | Purpose                               |
| ------------------ | -------------------------------- | -------- | ------------------------------------- |
| **Inter Static**   | `Inter-[Weight][Style].*`        | 18 files | Static font files for precise control |
| **Inter Display**  | `InterDisplay-[Weight][Style].*` | 18 files | Optimized for large text display      |
| **Inter Variable** | `InterVariable[-Italic].*`       | 4 files  | Modern variable fonts                 |
| **CSS Bundle**     | `inter.css`                      | 1 file   | Complete @font-face declarations      |

### Export Mapping

Each font file is individually exportable for tree-shaking:

```typescript
// All available exports
import interCSS from '@myorg/fonts/inter.css'
import interRegular from '@myorg/fonts/inter-regular.woff2'
import interBold from '@myorg/fonts/inter-bold.woff2'
import interVariable from '@myorg/fonts/inter-variable.woff2'
// ... and 40+ more individual font files
```

## 🛠️ Development

### Available Scripts

```bash
# Type checking
pnpm type-check

# Run tests (if any)
pnpm test

# Clean build artifacts
pnpm clean
```

### Adding New Font Families

1. **Add font files** to `src/[font-family]/` directory
2. **Create CSS file** with @font-face declarations
3. **Update package.json exports** for tree-shaking
4. **Add TypeScript declarations** in `index.d.ts`
5. **Update this README** with new font documentation

#### Example: Adding Roboto Font

```bash
# 1. Create directory and add files
mkdir src/roboto
# Add Roboto-*.woff2 and Roboto-*.ttf files

# 2. Create roboto.css with @font-face rules
# 3. Update package.json exports
```

```json
// package.json
{
  "exports": {
    "./roboto.css": "./src/roboto/roboto.css",
    "./roboto-regular.woff2": "./src/roboto/Roboto-Regular.woff2"
    // ... other Roboto files
  }
}
```

```typescript
// index.d.ts
declare module '*.woff2'
declare module '*.ttf'
declare module '*.css'
```

## 🚀 Monorepo Integration

### Framework Compatibility

| Framework   | CSS Import | Font Loading | Tree-Shaking | Status       |
| ----------- | ---------- | ------------ | ------------ | ------------ |
| **Next.js** | ✅ Full    | ✅ Optimized | ✅ Yes       | ✅ Supported |
| **Vite**    | ✅ Full    | ✅ Optimized | ✅ Yes       | ✅ Supported |
| **Astro**   | ✅ Full    | ✅ Optimized | ✅ Yes       | ✅ Supported |
| **Webpack** | ✅ Full    | ✅ Manual    | ✅ Yes       | ✅ Supported |
| **Parcel**  | ✅ Full    | ✅ Auto      | ✅ Yes       | ✅ Supported |

### Workspace Dependencies

```json
// In any app's package.json
{
  "dependencies": {
    "@myorg/fonts": "workspace:*"
  }
}
```

### Development Workflow

1. **Import fonts** in your application
2. **Configure bundler** for font asset handling (if needed)
3. **Test font loading** in development
4. **Optimize for production** using tree-shaking

### Cross-Platform Consistency

```css
/* Same font imports work everywhere */
@import '@myorg/fonts/inter.css';

/* Same CSS classes work everywhere */
.title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}
.body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
```

## 📄 License

MIT

---

**🔤 Built for beautiful, consistent typography across the entire monorepo ecosystem!**
