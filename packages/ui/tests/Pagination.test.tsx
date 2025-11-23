import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from '../src'

describe('Pagination', () => {
  it('affiche le contenu enfant', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}>
        Contenu pagination
      </Pagination>,
    )
    // Vérifie que le composant navigation existe
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}>
        Test
      </Pagination>,
    )
    const nav = screen.getByRole('navigation')
    expect(nav).not.toBeNull()
    expect(nav).toHaveAttribute('data-component', 'Pagination')
  })

  it('supporte la prop aria-label', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        aria-label='pagination'>
        Label
      </Pagination>,
    )
    const nav = screen.getByLabelText('pagination')
    expect(nav).toBeInTheDocument()
  })
})
