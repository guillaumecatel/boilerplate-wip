import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Textarea } from '../src'

describe('Textarea', () => {
  it('doit rendre le composant textarea', () => {
    render(<Textarea placeholder='Votre texte ici' />)
    expect(screen.getByPlaceholderText('Votre texte ici')).toBeInTheDocument()
  })

  it('doit avoir l’attribut data-component', () => {
    render(<Textarea placeholder='data-component' />)
    expect(screen.getByPlaceholderText('data-component')).toHaveAttribute(
      'data-component',
      'Textarea',
    )
  })

  it('doit accepter la prop className', () => {
    render(
      <Textarea
        className='custom-textarea'
        placeholder='ClassName test'
      />,
    )
    expect(screen.getByPlaceholderText('ClassName test')).toHaveClass(
      'custom-textarea',
    )
  })

  it('doit appliquer la variante error', () => {
    render(
      <Textarea
        error
        placeholder='Erreur'
      />,
    )
    expect(screen.getByPlaceholderText('Erreur')).toHaveClass(
      'border-[var(--control-border-color-error)]',
    )
  })

  it('doit appliquer la variante resize vertical', () => {
    render(
      <Textarea
        resize='vertical'
        placeholder='Resize vertical'
      />,
    )
    expect(screen.getByPlaceholderText('Resize vertical')).toHaveClass(
      'resize-y',
    )
  })

  it('doit être accessible via le rôle textbox', () => {
    render(<Textarea placeholder='Accessibilité' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
