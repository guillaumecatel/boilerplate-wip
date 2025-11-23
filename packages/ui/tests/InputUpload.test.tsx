import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { InputUpload } from '../src'

describe('InputUpload', () => {
  it('renders correctly with children', () => {
    render(<InputUpload>Hello world</InputUpload>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<InputUpload>Click me</InputUpload>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'InputUpload',
    )
  })
})
