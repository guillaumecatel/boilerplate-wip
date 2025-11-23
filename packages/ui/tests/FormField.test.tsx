import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormField } from '../src'

describe('FormField', () => {
  it('affiche le contenu enfant', () => {
    render(
      <FormField legend='Nom'>
        <input placeholder='Nom' />
      </FormField>,
    )
    expect(screen.getByPlaceholderText('Nom')).toBeInTheDocument()
    expect(screen.getByText('Nom')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <FormField legend='Test'>
        <input placeholder='Test' />
      </FormField>,
    )
    const field = screen
      .getByPlaceholderText('Test')
      .closest('[data-component]')
    expect(field).toHaveAttribute('data-component', 'FormField')
  })

  it('supporte la prop aria-label', () => {
    render(
      <FormField
        legend='Nom'
        aria-label='champ nom'>
        <input />
      </FormField>,
    )
    const field = screen.getByLabelText('champ nom')
    expect(field).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <FormField
        legend='Nom'
        className='custom-field'>
        <input />
      </FormField>,
    )
    const field = screen.getByRole('textbox').closest('[data-component]')
    expect(field).toHaveClass('custom-field')
  })
})
