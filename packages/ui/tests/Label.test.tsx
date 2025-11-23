import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Label } from '../src'

describe('Label', () => {
  it('affiche le contenu enfant', () => {
    render(<Label>Nom</Label>)
    expect(screen.getByText('Nom')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Label>Test</Label>)
    const label = screen.getByText('Test')
    expect(label).toHaveAttribute('data-component', 'Label')
  })

  it('supporte la prop aria-label', () => {
    render(<Label aria-label='champ nom'>Nom</Label>)
    const label = screen.getByLabelText('champ nom')
    expect(label).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Label className='custom-label'>Nom</Label>)
    const label = screen.getByText('Nom')
    expect(label).toHaveClass('custom-label')
  })

  it('supporte la prop htmlFor pour associer un champ', () => {
    render(
      <>
        <Label htmlFor='input-id'>Nom</Label>
        <input id='input-id' />
      </>,
    )
    const label = screen.getByText('Nom')
    expect(label).toHaveAttribute('for', 'input-id')
    const input = screen.getByLabelText('Nom')
    expect(input).toBeInTheDocument()
  })
})
