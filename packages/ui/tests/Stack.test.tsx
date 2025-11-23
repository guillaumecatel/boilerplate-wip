import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Stack } from '../src'

describe('Stack', () => {
  it('renders correctly with children', () => {
    render(<Stack>Hello world</Stack>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Stack>Click me</Stack>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Stack',
    )
  })
})
