import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Switch } from '../src'

describe('Switch', () => {
  it('renders correctly with children', () => {
    render(<Switch>Hello world</Switch>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Switch>Click me</Switch>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Switch',
    )
  })
})
