import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../src'

describe('Button', () => {
  it('affiche le contenu enfant', () => {
    render(<Button>Valider</Button>)
    expect(screen.getByText('Valider')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Button>Test</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('data-component', 'Button')
  })

  it('supporte la prop variant', () => {
    render(<Button variant='secondary'>Secondaire</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass(
      'bg-[var(--action-neutral-background-color-default)]',
    )
  })

  it('supporte la prop disabled', () => {
    render(<Button disabled>Inactif</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('aria-disabled', 'true')
  })

  it('supporte la prop aria-label', () => {
    render(<Button aria-label='envoyer'>Envoyer</Button>)
    const btn = screen.getByLabelText('envoyer')
    expect(btn).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Button className='custom-btn'>Perso</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('custom-btn')
  })

  it('déclenche onClick au clic', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Cliquez</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
