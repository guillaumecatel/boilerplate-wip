import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { FormField } from '../src'

describe('FormField', () => {
  it('renders correctly with children', () => {
    render(<FormField>Hello world</FormField>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<FormField>Click me</FormField>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'FormField',
    )
  })
})
