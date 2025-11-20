import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Table } from '../src'

describe('Table', () => {
  it('renders correctly with children', () => {
    render(<Table>Hello world</Table>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Table>Click me</Table>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Table',
    )
  })
})
