import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DefinitionList } from '../src'

describe('DefinitionList', () => {
  const items = [
    { term: 'Nom', description: 'Guillaume' },
    { term: 'Âge', description: '30' },
  ]

  it('affiche les termes et définitions', () => {
    render(<DefinitionList items={items} />)
    expect(screen.getByText('Nom')).toBeInTheDocument()
    expect(screen.getByText('Guillaume')).toBeInTheDocument()
    expect(screen.getByText('Âge')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<DefinitionList items={items} />)
    const dl = screen.getByText('Nom').closest('dl')
    expect(dl).toHaveAttribute('data-component', 'DefinitionList')
  })

  it('supporte la prop aria-label', () => {
    render(
      <DefinitionList
        items={items}
        aria-label='liste de définitions'
      />,
    )
    const dl = screen.getByLabelText('liste de définitions')
    expect(dl).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <DefinitionList
        items={items}
        className='custom-dl'
      />,
    )
    const dl = screen.getByText('Nom').closest('dl')
    expect(dl).toHaveClass('custom-dl')
  })
})
