import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Popover } from '../src'

describe('Popover', () => {
  it('affiche le contenu enfant', () => {
    render(<Popover>Contenu du popover</Popover>)
    expect(screen.getByText('Contenu du popover')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<Popover>Test</Popover>)
    const popover = screen.getByText('Test').closest('[data-component]')
    expect(popover).toHaveAttribute('data-component', 'Popover')
  })
})
