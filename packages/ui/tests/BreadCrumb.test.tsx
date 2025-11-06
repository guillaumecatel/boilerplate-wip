import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { BreadCrumb } from '../src'

describe('BreadCrumb', () => {
  it('renders correctly with children', () => {
    render(<BreadCrumb >Hello world</BreadCrumb >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<BreadCrumb >Click me</BreadCrumb >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'BreadCrumb',
    )
  })
})
