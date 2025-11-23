import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InputQuantity } from '../src'

describe('InputQuantity', () => {
  it('rend un champ de quantité', () => {
    render(<InputQuantity value={2} />)
    const input = screen.getByRole('spinbutton')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(2)
  })

  it('ajoute l’attribut data-component', () => {
    render(<InputQuantity value={1} />)
    const input = screen.getByRole('spinbutton')
    expect(input).toBeInTheDocument()
  })

  it('supporte la prop aria-label', () => {
    render(
      <InputQuantity
        value={1}
        aria-label='quantité'
      />,
    )
    const input = screen.getByLabelText('quantité')
    expect(input).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <InputQuantity
        value={1}
        className='custom-quantity'
      />,
    )
    const input = screen.getByRole('spinbutton')
    const wrapper = input.parentElement
    expect(wrapper).toHaveClass('custom-quantity')
  })

  it('supporte la prop disabled', () => {
    render(
      <InputQuantity
        value={1}
        disabled
      />,
    )
    const input = screen.getByRole('spinbutton')
    expect(input).toBeDisabled()
  })

  it('supporte la prop min et max', () => {
    render(
      <InputQuantity
        value={5}
        min={2}
        max={10}
      />,
    )
    const input = screen.getByRole('spinbutton')
    expect(input).toHaveAttribute('min', '2')
    expect(input).toHaveAttribute('max', '10')
  })

  it('déclenche onChange lors de la saisie', () => {
    const handleChange = vi.fn()
    render(
      <InputQuantity
        value={1}
        onChange={handleChange}
      />,
    )
    const input = screen.getByRole('spinbutton')
    fireEvent.change(input, { target: { value: '3' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('incrémente et décrémente la valeur au clic sur les boutons', () => {
    const handleValueChange = vi.fn()
    render(
      <InputQuantity
        value={2}
        onValueChange={handleValueChange}
      />,
    )
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0]) // décrémenter
    fireEvent.click(buttons[1]) // incrémenter
    expect(handleValueChange).toHaveBeenCalled()
  })
})
