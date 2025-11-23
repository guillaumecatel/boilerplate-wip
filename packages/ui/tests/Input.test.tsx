import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from '../src'

describe('Input', () => {
  it('rend un champ de saisie', () => {
    render(<Input placeholder='Votre nom' />)
    expect(screen.getByPlaceholderText('Votre nom')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Input placeholder='Test' />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveAttribute('data-component', 'Input')
  })

  it('supporte la prop aria-label', () => {
    render(<Input aria-label='champ nom' />)
    const input = screen.getByLabelText('champ nom')
    expect(input).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Input className='custom-input' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-input')
  })

  it('supporte la prop disabled', () => {
    render(<Input disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('applique la variante size sm', () => {
    render(<Input size='sm' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('h-[var(--control-height-sm)]')
  })

  it('applique la variante size md par défaut', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('h-[var(--control-height-md)]')
  })

  it('applique la variante size lg', () => {
    render(<Input size='lg' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('h-[var(--control-height-lg)]')
  })

  it('applique la variante default par défaut', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-[var(--control-border-color-default)]')
  })

  it('applique la variante error', () => {
    render(<Input variant='error' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-[var(--control-border-color-error)]')
  })

  it('force la variante error avec prop error', () => {
    render(<Input error />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-[var(--control-border-color-error)]')
  })
})
