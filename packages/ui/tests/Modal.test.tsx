import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Modal } from '../src'

describe('Modal', () => {
  it('renders correctly with children', () => {
    render(<Modal >Hello world</Modal >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Modal >Click me</Modal >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Modal',
    )
  })
})
