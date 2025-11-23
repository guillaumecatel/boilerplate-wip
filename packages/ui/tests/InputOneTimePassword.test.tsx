import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InputOneTimePassword } from '../src'

describe('InputOneTimePassword', () => {
  it('renders correctly with children', () => {
    render(<InputOneTimePassword>Hello world</InputOneTimePassword>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<InputOneTimePassword>Click me</InputOneTimePassword>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'InputOneTimePassword',
    )
  })
})
