import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from '../src'

describe('Badge', () => {
  it('affiche le contenu enfant', () => {
    render(<Badge>Badge info</Badge>)
    expect(screen.getByText('Badge info')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Badge>Test</Badge>)
    const badge = screen.getByText('Test').parentElement
    expect(badge).toHaveAttribute('data-component', 'Badge')
  })

  it('supporte la prop variant', () => {
    render(<Badge variant='success'>Succès</Badge>)
    const badge = screen.getByText('Succès').parentElement
    expect(badge).toHaveClass('bg-[var(--status-success-background-color)]')
  })

  it('supporte la prop aria-label', () => {
    render(<Badge aria-label='nouveau'>Nouveau</Badge>)
    const badge = screen.getByText('Nouveau').parentElement
    expect(badge).toHaveAttribute('aria-label', 'nouveau')
  })

  it('accepte une classe personnalisée', () => {
    render(<Badge className='custom-badge'>Personnalisé</Badge>)
    const badge = screen.getByText('Personnalisé').parentElement
    expect(badge).toHaveClass('custom-badge')
  })
})
