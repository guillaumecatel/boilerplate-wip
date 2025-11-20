import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Header } from '../src'

describe('Header', () => {
  it('renders correctly with children', () => {
    render(<Header>Hello world</Header>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Header>Click me</Header>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Header',
    )
  })
})
