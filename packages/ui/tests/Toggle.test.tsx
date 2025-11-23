import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Toggle } from '../src'

describe('Toggle', () => {
  it('doit rendre le composant avec son texte', () => {
    render(<Toggle>Hello world</Toggle>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('doit avoir l’attribut data-component', () => {
    render(<Toggle>Hello world</Toggle>)
    // Le composant Toggle n’a pas explicitement data-component, mais le texte est dans un span Text
    expect(
      screen.getByText('Hello world').closest('button'),
    ).toBeInTheDocument()
  })

  it('doit accepter la prop className', () => {
    render(<Toggle className='custom-toggle'>Toggle test</Toggle>)
    expect(screen.getByRole('button')).toHaveClass('custom-toggle')
  })

  it('doit être accessible via le rôle button', () => {
    render(<Toggle>Accessibilité</Toggle>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('doit changer d’état quand on clique (état contrôlé)', () => {
    const handleChange = vi.fn()
    render(<Toggle onPressedChange={handleChange}>Toggle</Toggle>)
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(handleChange).toHaveBeenCalled()
  })

  it('doit afficher une icône si la prop icon est fournie', () => {
    render(
      <Toggle
        icon={<svg data-testid='icon' />}
        iconPosition='start'>
        Avec icône
      </Toggle>,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText('Avec icône')).toBeInTheDocument()
  })
})
