import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Polymorphic } from '../src'

describe('Polymorphic', () => {
  it('renders correctly with children', () => {
    render(<Polymorphic>Hello world</Polymorphic>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Polymorphic>Click me</Polymorphic>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Polymorphic',
    )
  })
})
