import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from '../src'

describe('Input', () => {
  it('renders correctly with children', () => {
    render(<Input>Hello world</Input>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Input>Click me</Input>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Input',
    )
  })
})
