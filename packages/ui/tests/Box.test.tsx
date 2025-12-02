import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Box } from '../src'

describe('Box', () => {
  it('renders correctly with children', () => {
    render(<Box >Hello world</Box >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Box >Click me</Box >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Box',
    )
  })
})
