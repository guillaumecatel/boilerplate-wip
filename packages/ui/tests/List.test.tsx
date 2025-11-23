import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { List } from '../src'

describe('List', () => {
  it('affiche le contenu enfant', () => {
    render(
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('supporte la prop aria-label', () => {
    render(
      <List aria-label='liste de courses'>
        <li>Item</li>
      </List>,
    )
    const list = screen.getByLabelText('liste de courses')
    expect(list).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <List className='custom-list'>
        <li>Item</li>
      </List>,
    )
    const item = screen.getByText('Item')
    const list = item.closest('ul')
    expect(list).toHaveClass('custom-list')
  })

  it('rend une liste non ordonnée par défaut', () => {
    render(
      <List>
        <li>Non ordonné</li>
      </List>,
    )
    const list = screen.getByText('Non ordonné').closest('ul')
    expect(list).toBeInTheDocument()
  })
})
