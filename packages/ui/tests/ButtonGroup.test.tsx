import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ButtonGroup } from '../src'

describe('ButtonGroup', () => {
  it('renders correctly with children', () => {
    render(<ButtonGroup>Hello world</ButtonGroup>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<ButtonGroup>Click me</ButtonGroup>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'ButtonGroup',
    )
  })
})
