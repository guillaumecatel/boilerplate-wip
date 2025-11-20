import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Pagination } from '../src'

describe('Pagination', () => {
  it('renders correctly with children', () => {
    render(<Pagination>Hello world</Pagination>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Pagination>Click me</Pagination>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Pagination',
    )
  })
})
