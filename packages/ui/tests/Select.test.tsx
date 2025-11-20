import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Select } from '../src'

describe('Select', () => {
  it('renders correctly with children', () => {
    render(<Select>Hello world</Select>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Select>Click me</Select>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Select',
    )
  })
})
