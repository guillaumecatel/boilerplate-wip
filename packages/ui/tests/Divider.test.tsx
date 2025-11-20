import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Divider } from '../src'

describe('Divider', () => {
  it('renders correctly with children', () => {
    render(<Divider>Hello world</Divider>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Divider>Click me</Divider>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Divider',
    )
  })
})
