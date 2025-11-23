import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { List } from '../src'

describe('List', () => {
  it('renders correctly with children', () => {
    render(<List>Hello world</List>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<List>Click me</List>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'List',
    )
  })
})
