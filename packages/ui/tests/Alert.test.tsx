import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert } from '../src'

describe('Alert', () => {
  it('affiche le contenu enfant', () => {
    render(<Alert>Message important</Alert>)
    expect(screen.getByText('Message important')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Alert>Test</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('data-component', 'Alert')
  })

  it('supporte la prop variant', () => {
    render(<Alert variant='success'>Bravo</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('bg-[var(--feedback-success-background-color)]')
  })

  it('affiche une icône si la prop icon est fournie', () => {
    render(<Alert icon={<span data-testid='icon'>Icone</span>}>Texte</Alert>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('supporte la prop role pour l’accessibilité', () => {
    render(<Alert role='alert'>Alerte</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Alert className='custom-alert'>Personnalisé</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('custom-alert')
  })

  it('supporte la prop aria-label', () => {
    render(<Alert aria-label='info'>Info</Alert>)
    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('aria-label', 'info')
  })
})
