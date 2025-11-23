import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Divider } from '../src'

describe('Divider', () => {
  it('rend un séparateur horizontal par défaut', () => {
    render(<Divider />)
    const el = screen.getByRole('separator')
    expect(el).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Divider />)
    const el = screen.getByRole('separator')
    expect(el).toHaveAttribute('data-component', 'Divider')
  })

  it('supporte la prop aria-label', () => {
    render(<Divider aria-label='séparateur' />)
    const el = screen.getByLabelText('séparateur')
    expect(el).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Divider className='custom-divider' />)
    const el = screen.getByRole('separator')
    expect(el).toHaveClass('custom-divider')
  })
})
