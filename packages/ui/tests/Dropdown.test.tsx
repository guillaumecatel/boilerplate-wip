import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Dropdown } from '../src'

describe('Dropdown', () => {
  it('renders correctly with children', () => {
    render(<Dropdown>Hello world</Dropdown>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Dropdown>Click me</Dropdown>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Dropdown',
    )
  })
})
