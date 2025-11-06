import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { QuantityField } from '../src'

describe('QuantityField', () => {
  it('renders correctly with children', () => {
    render(<QuantityField >Hello world</QuantityField >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<QuantityField >Click me</QuantityField >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'QuantityField',
    )
  })
})
