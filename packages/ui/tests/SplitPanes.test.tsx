import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SplitPanes } from '../src'

describe('SplitPanes', () => {
  it('renders correctly with children', () => {
    render(<SplitPanes >Hello world</SplitPanes >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<SplitPanes >Click me</SplitPanes >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'SplitPanes',
    )
  })
})
