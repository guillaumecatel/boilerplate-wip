import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { DefinitionList } from '../src'

describe('DefinitionList', () => {
  it('renders correctly with children', () => {
    render(<DefinitionList>Hello world</DefinitionList>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('has the correct data-component attribute', () => {
    render(<DefinitionList>Click me</DefinitionList>)
    expect(screen.getByText('Click me')).toHaveAttribute(
      'data-component',
      'DefinitionList',
    )
  })
})
