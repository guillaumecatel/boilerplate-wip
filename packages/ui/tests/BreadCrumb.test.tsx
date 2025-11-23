import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BreadCrumb } from '../src'

describe('BreadCrumb', () => {
  const items = [
    { label: 'Accueil', href: '/' },
    { label: 'Produits', href: '/produits' },
    { label: 'Détail', href: '/produits/1' },
  ]

  it('affiche tous les éléments du fil d’ariane', () => {
    render(<BreadCrumb items={items} />)
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })

  it('ajoute l’attribut data-component', () => {
    render(<BreadCrumb items={items} />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('data-component', 'BreadCrumb')
  })

  it('supporte la prop aria-label', () => {
    render(
      <BreadCrumb
        items={items}
        aria-label="fil d'ariane"
      />,
    )
    const nav = screen.getByLabelText("fil d'ariane")
    expect(nav).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <BreadCrumb
        items={items}
        className='custom-breadcrumb'
      />,
    )
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('custom-breadcrumb')
  })
})
