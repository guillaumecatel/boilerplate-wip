import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Switch } from '../src'

describe('Switch', () => {
  it('doit rendre le bouton switch', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('doit avoir l’attribut data-component sur le bouton', () => {
    render(<Switch />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveAttribute('data-state')
  })

  it('supporte la prop aria-label', () => {
    render(<Switch aria-label='interrupteur' />)
    const input = screen.getByLabelText('interrupteur')
    expect(input).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(<Switch className='custom-switch' />)
    const input = screen.getByRole('switch')
    expect(input).toHaveClass('custom-switch')
  })

  it('supporte la prop checked (contrôlé)', () => {
    render(<Switch checked />)
    const input = screen.getByRole('switch')
    expect(input).toBeChecked()
  })

  it('supporte la prop disabled', () => {
    render(<Switch disabled />)
    const input = screen.getByRole('switch')
    expect(input).toBeDisabled()
  })

  it('déclenche onCheckedChange lors du clic', () => {
    const handleChange = vi.fn()
    render(
      <Switch
        checked={false}
        onCheckedChange={handleChange}
      />,
    )
    const btn = screen.getByRole('switch')
    fireEvent.click(btn)
    expect(handleChange).toHaveBeenCalled()
  })

  it('applique la variante size sm', () => {
    render(<Switch size='sm' />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveClass('h-[var(--control-switch-height-sm)]')
  })

  it('applique la variante size md par défaut', () => {
    render(<Switch />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveClass('h-[var(--control-switch-height-md)]')
  })

  it('applique la variante size lg', () => {
    render(<Switch size='lg' />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveClass('h-[var(--control-switch-height-lg)]')
  })

  it('applique la variante default par défaut', () => {
    render(<Switch />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveClass('bg-[var(--control-switch-background-default)]')
  })

  it('applique la variante primary', () => {
    render(<Switch variant='primary' />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveClass('bg-[var(--control-switch-background-default)]')
  })

  it('applique la variante destructive', () => {
    render(<Switch variant='destructive' />)
    const btn = screen.getByRole('switch')
    expect(btn).toHaveClass('bg-[var(--control-switch-background-default)]')
  })
})
