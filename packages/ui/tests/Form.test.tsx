import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Form } from '../src'

describe('Form', () => {
  it('renders correctly with children', () => {
    render(<Form >Hello world</Form >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Form >Click me</Form >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Form',
    )
  })
})
