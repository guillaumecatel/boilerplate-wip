import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InputQuantity } from '../src'

describe('InputQuantity', () => {
  it('renders correctly with children', () => {
    render(<InputQuantity>Hello world</InputQuantity>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<InputQuantity>Click me</InputQuantity>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'InputQuantity',
    )
  })
})
