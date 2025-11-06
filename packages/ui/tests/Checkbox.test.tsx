import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Checkbox } from '../src'

describe('Checkbox', () => {
  it('renders correctly with children', () => {
    render(<Checkbox >Hello world</Checkbox >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Checkbox >Click me</Checkbox >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Checkbox',
    )
  })
})
