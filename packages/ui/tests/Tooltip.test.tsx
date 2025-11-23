import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Tooltip } from '../src'

describe('Tooltip', () => {
  it('renders correctly with children', () => {
    render(<Tooltip>Hello world</Tooltip>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Tooltip>Click me</Tooltip>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Tooltip',
    )
  })
})
