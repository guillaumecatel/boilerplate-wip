import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stack } from '../src'

describe('Stack', () => {
  it('affiche le contenu enfant', () => {
    render(
      <Stack>
        <div>Élément 1</div>
        <div>Élément 2</div>
      </Stack>,
    )
    expect(screen.getByText('Élément 1')).toBeInTheDocument()
    expect(screen.getByText('Élément 2')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <Stack>
        <div>Test</div>
      </Stack>,
    )
    const stack = screen.getByText('Test').closest('[data-component]')
    expect(stack).toHaveAttribute('data-component', 'Stack')
  })

  it('supporte la prop aria-label', () => {
    render(
      <Stack aria-label='pile'>
        <div>Élément</div>
      </Stack>,
    )
    const stack = screen.getByLabelText('pile')
    expect(stack).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <Stack className='custom-stack'>
        <div>Test</div>
      </Stack>,
    )
    const stack = screen.getByText('Test').closest('[data-component]')
    expect(stack).toHaveClass('custom-stack')
  })
})
