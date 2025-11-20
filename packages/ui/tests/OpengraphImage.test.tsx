import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { OpengraphImage } from '../src'

describe('OpengraphImage', () => {
  it('renders correctly with children', () => {
    render(<OpengraphImage>Hello world</OpengraphImage>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<OpengraphImage>Click me</OpengraphImage>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'OpengraphImage',
    )
  })
})
