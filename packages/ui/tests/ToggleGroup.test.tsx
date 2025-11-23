import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ToggleGroup, ToggleGroupItem } from '../src'

describe('ToggleGroup', () => {
  it('doit rendre le groupe avec ses items', () => {
    render(
      <ToggleGroup
        type='single'
        defaultValue='1'>
        <ToggleGroupItem value='1'>Un</ToggleGroupItem>
        <ToggleGroupItem value='2'>Deux</ToggleGroupItem>
      </ToggleGroup>,
    )
    expect(screen.getByText('Un')).toBeInTheDocument()
    expect(screen.getByText('Deux')).toBeInTheDocument()
  })

  it('doit accepter la prop className', () => {
    render(
      <ToggleGroup
        type='single'
        className='custom-group'>
        <ToggleGroupItem value='1'>Un</ToggleGroupItem>
      </ToggleGroup>,
    )
    expect(screen.getByRole('group')).toHaveClass('custom-group')
  })

  it('doit gérer l’orientation verticale', () => {
    render(
      <ToggleGroup
        type='single'
        orientation='vertical'>
        <ToggleGroupItem value='1'>Un</ToggleGroupItem>
        <ToggleGroupItem value='2'>Deux</ToggleGroupItem>
      </ToggleGroup>,
    )
    expect(screen.getByRole('group')).toHaveClass('flex-col')
  })

  it('doit être accessible via le rôle group', () => {
    render(
      <ToggleGroup type='single'>
        <ToggleGroupItem value='1'>Un</ToggleGroupItem>
      </ToggleGroup>,
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('doit appeler onValueChange lors d’un changement', () => {
    const handleChange = vi.fn()
    render(
      <ToggleGroup
        type='single'
        onValueChange={handleChange}
        defaultValue='1'>
        <ToggleGroupItem value='1'>Un</ToggleGroupItem>
        <ToggleGroupItem value='2'>Deux</ToggleGroupItem>
      </ToggleGroup>,
    )
    fireEvent.click(screen.getByText('Deux'))
    expect(handleChange).toHaveBeenCalledWith('2')
  })
})
