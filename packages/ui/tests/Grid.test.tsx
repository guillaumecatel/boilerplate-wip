import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Grid } from '../src'

describe('Grid', () => {
  it('affiche le contenu enfant', () => {
    render(
      <Grid>
        <div>Contenu</div>
      </Grid>,
    )
    expect(screen.getByText('Contenu')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <Grid>
        <div>Test</div>
      </Grid>,
    )
    const grid = screen.getByText('Test').closest('[data-component]')
    expect(grid).toHaveAttribute('data-component', 'Grid')
  })

  it('supporte la prop aria-label', () => {
    render(
      <Grid aria-label='grille'>
        <div />
      </Grid>,
    )
    const grid = screen.getByLabelText('grille')
    expect(grid).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <Grid className='custom-grid'>
        <div>Test</div>
      </Grid>,
    )
    const grid = screen.getByText('Test').closest('[data-component]')
    expect(grid).toHaveClass('custom-grid')
  })
})
