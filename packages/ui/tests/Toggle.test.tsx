import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Toggle } from '../src'

describe('Toggle', () => {
  it('renders correctly with children', () => {
    render(<Toggle>Hello world</Toggle>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Toggle>Click me</Toggle>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Toggle',
    )
  })
})
