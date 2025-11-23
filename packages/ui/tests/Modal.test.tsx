import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Modal } from '../src'

describe('Modal', () => {
  it('affiche le contenu enfant', () => {
    render(<Modal>Contenu</Modal>)
    expect(screen.getByText('Contenu')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Modal>Test</Modal>)
    const modal = screen.getByRole('dialog')
    expect(modal).not.toBeNull()
    expect(modal).toHaveAttribute('data-component', 'Modal')
  })
})
