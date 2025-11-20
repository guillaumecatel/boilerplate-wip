import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '../src'

describe('Button', () => {
  it('renders correctly with children', () => {
    render(<Button>Hello world</Button>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Button',
    )
  })
})
