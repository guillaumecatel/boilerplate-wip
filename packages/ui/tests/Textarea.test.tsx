import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Textarea } from '../src'

describe('Textarea', () => {
  it('renders correctly with children', () => {
    render(<Textarea >Hello world</Textarea >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Textarea >Click me</Textarea >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Textarea',
    )
  })
})
