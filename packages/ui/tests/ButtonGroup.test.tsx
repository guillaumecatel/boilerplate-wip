import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button, ButtonGroup } from '../src'

describe('ButtonGroup', () => {
  it('affiche le contenu enfant', () => {
    render(
      <ButtonGroup label='actions'>
        <Button>Un</Button>
        <Button>Deux</Button>
      </ButtonGroup>,
    )
    expect(screen.getByText('Un')).toBeInTheDocument()
    expect(screen.getByText('Deux')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <ButtonGroup label='test'>
        <Button>Test</Button>
      </ButtonGroup>,
    )
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-component',
      'Button',
    )
    const group = screen.getByRole('group')
    expect(group).toHaveAttribute('data-component', 'ButtonGroup')
  })

  it('supporte la prop aria-label', () => {
    render(
      <ButtonGroup
        label='actions'
        aria-label='actions'>
        <Button>Action</Button>
      </ButtonGroup>,
    )
    const group = screen.getByLabelText('actions')
    expect(group).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <ButtonGroup
        label='perso'
        className='custom-group'>
        <Button>Perso</Button>
      </ButtonGroup>,
    )
    const group = screen.getByRole('group')
    expect(group).toHaveClass('custom-group')
  })
})
