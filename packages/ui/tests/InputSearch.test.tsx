import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InputSearch } from '../src'

describe('InputSearch', () => {
  it('rend un champ de recherche', () => {
    render(<InputSearch placeholder='Rechercher...' />)
    const input = screen.getByPlaceholderText('Rechercher...')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'search')
  })

  it('supporte la prop aria-label', () => {
    render(<InputSearch aria-label='champ recherche' />)
    const input = screen.getByLabelText('champ recherche')
    expect(input).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<InputSearch className='custom-search' />)
    const input = screen.getByRole('searchbox')
    expect(input).toHaveClass('custom-search')
  })

  it('supporte la prop disabled', () => {
    render(<InputSearch disabled />)
    const input = screen.getByRole('searchbox')
    expect(input).toBeDisabled()
  })

  it('supporte la prop value et onChange', () => {
    const handleChange = vi.fn()
    render(
      <InputSearch
        value='abc'
        onChange={handleChange}
      />,
    )
    const input = screen.getByDisplayValue('abc')
    fireEvent.change(input, { target: { value: 'def' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
