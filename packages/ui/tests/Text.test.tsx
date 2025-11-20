import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Text } from '../src'

describe('Text', () => {
  it('renders correctly with children', () => {
    render(<Text>Hello world</Text>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<Text>Click me</Text>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'Text',
    )
  })
})
