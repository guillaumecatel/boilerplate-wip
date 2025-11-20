import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextField } from '../src'

describe('TextField', () => {
  it('renders correctly with children', () => {
    render(<TextField>Hello world</TextField>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<TextField>Click me</TextField>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'TextField',
    )
  })
})
