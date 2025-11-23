import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InputSearch } from '../src'

describe('InputSearch', () => {
  it('renders correctly with children', () => {
    render(<InputSearch>Hello world</InputSearch>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<InputSearch>Click me</InputSearch>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'InputSearch',
    )
  })
})
