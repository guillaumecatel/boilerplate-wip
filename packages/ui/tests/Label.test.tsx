import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Label } from '../src'

describe('Label', () => {
  it('renders correctly with children', () => {
    render(<Label>Hello world</Label>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Label>Click me</Label>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Label',
    )
  })
})
