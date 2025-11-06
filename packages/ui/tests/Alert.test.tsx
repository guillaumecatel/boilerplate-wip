import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Alert } from '../src'

describe('Alert', () => {
  it('renders correctly with children', () => {
    render(<Alert >Hello world</Alert >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Alert >Click me</Alert >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Alert',
    )
  })
})
