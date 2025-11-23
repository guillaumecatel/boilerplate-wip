import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Select } from '../src'

describe('Select', () => {
  it('affiche le contenu enfant', () => {
    render(<Select>Contenu du select</Select>)
    expect(screen.getByText('Contenu du select')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Select>Test</Select>)
    const select = screen.getByText('Test').closest('[data-component]')
    expect(select).toHaveAttribute('data-component', 'Select')
  })
})
