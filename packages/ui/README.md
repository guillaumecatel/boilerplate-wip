# @myorg/ui

🎨 **React UI Components Library for Monorepo**

A comprehensive, tree-shakeable React components library designed to be shared across all applications in this monorepo. Whether you're building React web apps, Next.js applications, or any other React-based projects, this package provides consistent, accessible, and beautiful UI components.

## ✨ Features

- 🎯 **Tree-Shakeable**: Import only the components you need for optimal bundle size
- 🛡️ **Type Safety**: Full TypeScript support with comprehensive prop types
- ♿ **Accessibility**: WCAG compliant components with proper ARIA attributes
- 🎨 **Tailwind CSS**: Built with Tailwind CSS for easy customization
- 🧪 **Well Tested**: Comprehensive test coverage with Testing Library
- 📱 **Responsive**: Mobile-first design approach
- 🌙 **Consistent Design**: Unified design system across all components
- 🔧 **Radix UI Foundation**: Built on top of Radix UI primitives for reliability

## 🏢 Monorepo Usage

This package is designed specifically for internal use within this monorepo. It's automatically available to all React applications without publishing to npm.

### In React Applications

```typescript
// Tree-shakeable imports (recommended)
import { Button } from '@myorg/ui/button'
import { Alert } from '@myorg/ui/alert'
import { Modal } from '@myorg/ui/modal'

// Or import everything (not recommended for production)
import { Button, Alert, Modal } from '@myorg/ui'
```

### In Next.js Applications

```typescript
// Same tree-shakeable imports work in Next.js
import { Button } from '@myorg/ui/button'
import { Table } from '@myorg/ui/table'

// Perfect for server-side rendering
function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
      <Table data={data} />
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
    "@myorg/ui": "workspace:*"
  }
}
```

### Basic Usage

```tsx
import { Button } from '@myorg/ui/button'
import { Alert } from '@myorg/ui/alert'

function App() {
  return (
    <div className='p-4'>
      <Alert>Welcome to our application!</Alert>

      <Button onClick={() => console.log('Clicked!')}>Get Started</Button>
    </div>
  )
}
```

## 📚 Components Library

### 🔘 Form Components

| Component         | Import Path                | Description                              |
| ----------------- | -------------------------- | ---------------------------------------- |
| **Button**        | `@myorg/ui/button`         | Primary action button with hover effects |
| **TextField**     | `@myorg/ui/text-field`     | Text input with validation support       |
| **Textarea**      | `@myorg/ui/textarea`       | Multi-line text input                    |
| **Checkbox**      | `@myorg/ui/checkbox`       | Checkbox input with custom styling       |
| **Select**        | `@myorg/ui/select`         | Dropdown select component                |
| **Toggle**        | `@myorg/ui/toggle`         | Switch/toggle input                      |
| **QuantityField** | `@myorg/ui/quantity-field` | Numeric input with increment/decrement   |
| **FileUploader**  | `@myorg/ui/file-uploader`  | File upload component                    |

### 📄 Layout Components

| Component       | Import Path              | Description                            |
| --------------- | ------------------------ | -------------------------------------- |
| **Modal**       | `@myorg/ui/modal`        | Accessible modal dialog                |
| **Accordion**   | `@myorg/ui/accordion`    | Collapsible content sections           |
| **Table**       | `@myorg/ui/table`        | Data table with sorting and pagination |
| **Divider**     | `@myorg/ui/divider`      | Visual separator                       |
| **ButtonGroup** | `@myorg/ui/button-group` | Grouped button controls                |

### 📝 Content Components

| Component          | Import Path                 | Description                        |
| ------------------ | --------------------------- | ---------------------------------- |
| **Text**           | `@myorg/ui/text`            | Typography component with variants |
| **Alert**          | `@myorg/ui/alert`           | Status messages and notifications  |
| **Badge**          | `@myorg/ui/badge`           | Small status indicators            |
| **DefinitionList** | `@myorg/ui/definition-list` | Key-value pair display             |

### 🧭 Navigation Components

| Component      | Import Path             | Description              |
| -------------- | ----------------------- | ------------------------ |
| **BreadCrumb** | `@myorg/ui/bread-crumb` | Navigation breadcrumbs   |
| **Pagination** | `@myorg/ui/pagination`  | Page navigation controls |
| **Dropdown**   | `@myorg/ui/dropdown`    | Dropdown menu component  |

## 🎨 Component Examples

### Button

```tsx
import { Button } from '@myorg/ui/button'

function MyComponent() {
  return (
    <div className='space-y-4'>
      <Button onClick={() => alert('Primary action')}>Primary Action</Button>

      <Button disabled>Disabled Button</Button>
    </div>
  )
}
```

### Alert

```tsx
import { Alert } from '@myorg/ui/alert'

function Notifications() {
  return (
    <div className='space-y-4'>
      <Alert>Your changes have been saved successfully!</Alert>

      <Alert>
        <strong>Warning:</strong> This action cannot be undone.
      </Alert>
    </div>
  )
}
```

### TextField

```tsx
import { TextField } from '@myorg/ui/text-field'

function ContactForm() {
  const [email, setEmail] = useState('')

  return (
    <TextField
      type='email'
      placeholder='Enter your email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  )
}
```

### Modal

```tsx
import { Modal } from '@myorg/ui/modal'
import { Button } from '@myorg/ui/button'

function ConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Confirm Action'>
        <p>Are you sure you want to continue?</p>
        <div className='mt-4 flex gap-2'>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </div>
      </Modal>
    </>
  )
}
```

### Table

```tsx
import { Table } from '@myorg/ui/table'

function UsersList() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]

  return (
    <Table
      data={users}
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
      ]}
      sortable
      pagination
    />
  )
}
```

## 🌳 Tree-Shaking Benefits

### Optimal Bundle Size

```typescript
// ❌ Large bundle: Imports entire UI library (~50KB)
import { Button, Alert } from '@myorg/ui'

// ✅ Optimal bundle: Only imports needed components (~8KB)
import { Button } from '@myorg/ui/button'
import { Alert } from '@myorg/ui/alert'
```

### Component-Specific Imports

Each component can be imported individually:

```typescript
// Form components only
import { Button } from '@myorg/ui/button'
import { TextField } from '@myorg/ui/text-field'
import { Checkbox } from '@myorg/ui/checkbox'

// Layout components only
import { Modal } from '@myorg/ui/modal'
import { Table } from '@myorg/ui/table'

// Content components only
import { Alert } from '@myorg/ui/alert'
import { Badge } from '@myorg/ui/badge'
```

### Bundle Analysis Example

```bash
# Analyze your app's bundle to see tree-shaking impact
cd apps/my-react-app
pnpm build
pnpm bundle-analyzer

# Results might show:
# ✅ @myorg/ui/button: 3.2KB (used)
# ✅ @myorg/ui/alert: 2.1KB (used)
# ❌ @myorg/ui/table: 0KB (tree-shaken out)
# ❌ @myorg/ui/modal: 0KB (tree-shaken out)
```

## 🎯 Design System

### Color Palette

The components use a consistent color system based on Tailwind CSS:

- **Primary**: Indigo (`indigo-600`, `indigo-500`)
- **Success**: Green (`green-600`, `green-500`)
- **Warning**: Yellow (`yellow-600`, `yellow-500`)
- **Error**: Red (`red-600`, `red-500`)
- **Neutral**: Gray (`gray-900`, `gray-700`, `gray-300`)

### Typography

Built-in text variants and sizing:

```tsx
import { Text } from '@myorg/ui/text'

<Text variant="h1">Main Heading</Text>
<Text variant="h2">Section Heading</Text>
<Text variant="body">Regular text content</Text>
<Text variant="caption">Small caption text</Text>
```

### Spacing

Consistent spacing using Tailwind's spacing scale:

- **Small**: `p-2`, `m-2` (8px)
- **Medium**: `p-4`, `m-4` (16px)
- **Large**: `p-6`, `m-6` (24px)
- **Extra Large**: `p-8`, `m-8` (32px)

## ♿ Accessibility

All components are built with accessibility in mind:

- **ARIA attributes**: Proper roles, labels, and descriptions
- **Keyboard navigation**: Full keyboard support
- **Screen reader support**: Semantic HTML and ARIA
- **Focus management**: Visible focus indicators
- **Color contrast**: WCAG AA compliance

### Accessibility Examples

```tsx
// Modal with proper ARIA attributes
<Modal
  isOpen={isOpen}
  onClose={onClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Delete Account</h2>
  <p id="modal-description">This action cannot be undone.</p>
</Modal>

// Button with accessible loading state
<Button disabled={isLoading} aria-label={isLoading ? 'Loading...' : 'Submit'}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

## 🧪 Testing

### Component Testing

All components include comprehensive tests:

```bash
# Run all UI component tests
cd packages/ui
pnpm test

# Run tests with coverage
pnpm test --coverage

# Run tests in watch mode
pnpm test --watch
```

### Usage in Your Tests

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@myorg/ui/button'

test('renders button with correct text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
})
```

## 🏗️ Architecture

```bash
packages/ui/src/
├── index.ts              # Main entry point (re-exports all components)
├── Button.tsx            # 🌳 Tree-shakeable: Primary button component
├── Alert.tsx             # 🌳 Tree-shakeable: Alert/notification component
├── Modal.tsx             # 🌳 Tree-shakeable: Modal dialog component
├── TextField.tsx         # 🌳 Tree-shakeable: Text input component
├── Table.tsx             # 🌳 Tree-shakeable: Data table component
├── Badge.tsx             # 🌳 Tree-shakeable: Status badge component
├── Checkbox.tsx          # 🌳 Tree-shakeable: Checkbox input component
├── Select.tsx            # 🌳 Tree-shakeable: Select dropdown component
├── Textarea.tsx          # 🌳 Tree-shakeable: Multi-line text input
├── Toggle.tsx            # 🌳 Tree-shakeable: Toggle/switch component
├── Accordion.tsx         # 🌳 Tree-shakeable: Collapsible content
├── BreadCrumb.tsx        # 🌳 Tree-shakeable: Navigation breadcrumbs
├── ButtonGroup.tsx       # 🌳 Tree-shakeable: Grouped buttons
├── DefinitionList.tsx    # 🌳 Tree-shakeable: Key-value pairs
├── Divider.tsx           # 🌳 Tree-shakeable: Visual separator
├── Dropdown.tsx          # 🌳 Tree-shakeable: Dropdown menu
├── FileUploader.tsx      # 🌳 Tree-shakeable: File upload component
├── Pagination.tsx        # 🌳 Tree-shakeable: Page navigation
├── QuantityField.tsx     # 🌳 Tree-shakeable: Numeric input
└── Text.tsx              # 🌳 Tree-shakeable: Typography component
```

### Dependencies

- **React 19**: Latest React with full concurrent features support
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Unstyled, accessible components as foundation
- **Class Variance Authority**: For component variant management
- **@myorg/shared**: Shared utilities and type guards

## 🛠️ Development

### Available Scripts

```bash
# Build the package
pnpm build

# Development with watch mode
pnpm dev

# Run tests
pnpm test

# Run tests with coverage
pnpm test --coverage

# Type checking
pnpm type-check

# Clean build artifacts
pnpm clean
```

### Adding New Components

1. **Create component file** in `src/ComponentName.tsx`
2. **Export from index.ts**
3. **Add to package.json exports**
4. **Write comprehensive tests**
5. **Update this README**

#### Example: Adding a Card Component

```tsx
// src/Card.tsx
import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated'
  className?: string
}

export const Card = ({
  children,
  variant = 'default',
  className = '',
}: CardProps) => {
  const baseClasses = 'rounded-lg border bg-white p-6'
  const variantClasses = {
    default: 'border-gray-200',
    elevated: 'border-gray-200 shadow-lg',
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      data-component='Card'>
      {children}
    </div>
  )
}

export default Card
```

```typescript
// Add to src/index.ts
export * from './Card'
```

```json
// Add to package.json exports
{
  "exports": {
    "./card": "./src/Card.tsx"
    // ... other exports
  },
  "publishConfig": {
    "exports": {
      "./card": {
        "import": "./dist/Card.js",
        "require": "./dist/Card.cjs",
        "types": "./dist/Card.d.ts"
      }
    }
  }
}
```

## 🚀 Monorepo Integration

### Framework Compatibility

| Framework   | Tree-Shaking | SSR Support | Status       |
| ----------- | ------------ | ----------- | ------------ |
| **React**   | ✅ Full      | ✅ Yes      | ✅ Supported |
| **Next.js** | ✅ Full      | ✅ Yes      | ✅ Supported |
| **Vite**    | ✅ Full      | ✅ Yes      | ✅ Supported |
| **Remix**   | ✅ Full      | ✅ Yes      | ✅ Supported |
| **Gatsby**  | ✅ Full      | ⚠️ Partial  | ✅ Supported |

### Workspace Dependencies

```json
// In any React app's package.json
{
  "dependencies": {
    "@myorg/ui": "workspace:*",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

### Peer Dependencies

Make sure your application includes the required peer dependencies:

```bash
# Required peer dependencies
pnpm add react@^19.0.0 react-dom@^19.0.0

# Optional but recommended for styling
pnpm add tailwindcss@^3.4.0
```

### Development Workflow

1. **Make changes** to UI components
2. **Test components** locally using `pnpm test`
3. **Use immediately** in any React app - hot reload supported
4. **Build for production** when deploying apps

### Cross-Platform Consistency

```tsx
// Same components work everywhere
import { Button } from '@myorg/ui/button'
import { Alert } from '@myorg/ui/alert'

// React web app
function WebApp() {
  return <Button>Web Button</Button>
}

// Next.js app
function NextApp() {
  return <Button>Next.js Button</Button>
}

// Vite app
function ViteApp() {
  return <Button>Vite Button</Button>
}
```

## 📄 License

MIT

---

**🎨 Built for beautiful, accessible, and performant user interfaces across the entire monorepo!**
