import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from '../src'

describe('Checkbox', () => {
  it('ajoute l’attribut data-component', () => {
    render(<Checkbox />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveAttribute('data-component', 'Checkbox')
  })

  it('supporte la prop checked', () => {
    render(<Checkbox checked />)
    const input = screen.getByRole('checkbox')
    expect(input).toBeChecked()
  })

  it('supporte la prop disabled', () => {
    render(<Checkbox disabled />)
    const input = screen.getByRole('checkbox')
    expect(input).toBeDisabled()
  })

  it('supporte la prop aria-label', () => {
    render(<Checkbox aria-label='accepter' />)
    const input = screen.getByLabelText('accepter')
    expect(input).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Checkbox className='custom-checkbox' />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveClass('custom-checkbox')
  })

  it('déclenche onChange au clic', () => {
    const handleChange = vi.fn()
    render(<Checkbox onChange={handleChange} />)
    const input = screen.getByRole('checkbox')
    fireEvent.click(input)
    expect(handleChange).toHaveBeenCalled()
  })

  it('applique la variante size sm', () => {
    render(<Checkbox size='sm' />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveClass('size-[var(--control-checkbox-size-sm)]')
  })

  it('applique la variante size md par défaut', () => {
    render(<Checkbox />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveClass('size-[var(--control-checkbox-size-md)]')
  })

  it('applique la variante size lg', () => {
    render(<Checkbox size='lg' />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveClass('size-[var(--control-checkbox-size-lg)]')
  })

  it('applique la variante primary par défaut', () => {
    render(<Checkbox />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveClass(
      'accent-[var(--control-checkbox-checked-background)]',
    )
  })

  it('applique la variante destructive', () => {
    render(<Checkbox variant='destructive' />)
    const input = screen.getByRole('checkbox')
    expect(input).toHaveClass('accent-[var(--control-border-color-error)]')
  })
})
