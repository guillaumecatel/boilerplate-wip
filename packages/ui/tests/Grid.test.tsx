import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Grid } from '../src'

describe('Grid', () => {
  it('renders correctly with children', () => {
    render(<Grid>Hello world</Grid>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Grid>Click me</Grid>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Grid',
    )
  })
})
