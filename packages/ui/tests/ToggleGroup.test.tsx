import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ToggleGroup } from '../src'

describe('ToggleGroup', () => {
  it('renders correctly with children', () => {
    render(<ToggleGroup>Hello world</ToggleGroup>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<ToggleGroup>Click me</ToggleGroup>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'ToggleGroup',
    )
  })
})
