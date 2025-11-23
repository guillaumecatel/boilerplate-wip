import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InputPassword } from '../src'

describe('InputPassword', () => {
  it('renders correctly with children', () => {
    render(<InputPassword >Hello world</InputPassword >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<InputPassword >Click me</InputPassword >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'InputPassword',
    )
  })
})
