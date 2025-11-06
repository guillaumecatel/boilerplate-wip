import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { FileUploader } from '../src'

describe('FileUploader', () => {
  it('renders correctly with children', () => {
    render(<FileUploader >Hello world</FileUploader >)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<FileUploader >Click me</FileUploader >)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'FileUploader',
    )
  })
})
