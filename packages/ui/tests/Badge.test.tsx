import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from '../src'

describe('Badge', () => {
  it('renders correctly with children', () => {
    render(<Badge>Hello world</Badge>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Badge>Click me</Badge>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Badge',
    )
  })
})
