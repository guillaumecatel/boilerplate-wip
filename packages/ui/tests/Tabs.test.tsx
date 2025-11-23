import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Tabs } from '../src'

describe('Tabs', () => {
  it('renders correctly with children', () => {
    render(<Tabs>Hello world</Tabs>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Tabs>Click me</Tabs>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Tabs',
    )
  })
})
