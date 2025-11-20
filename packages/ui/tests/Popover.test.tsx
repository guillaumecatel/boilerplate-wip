import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Popover } from '../src'

describe('Popover', () => {
  it('renders correctly with children', () => {
    render(<Popover>Hello world</Popover>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Popover>Click me</Popover>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Popover',
    )
  })
})
