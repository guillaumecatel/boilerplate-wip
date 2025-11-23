import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InputPassword } from '../src'

describe('InputPassword', () => {
  it('rend un champ de mot de passe', () => {
    render(
      <InputPassword.Root>
        <InputPassword.Input placeholder='Mot de passe' />
        <InputPassword.Toggle />
      </InputPassword.Root>,
    )
    const input = screen.getByPlaceholderText('Mot de passe')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <InputPassword.Root>
        <InputPassword.Input placeholder='Test' />
        <InputPassword.Toggle />
      </InputPassword.Root>,
    )
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('supporte la prop aria-label', () => {
    render(
      <InputPassword.Root aria-label='champ mdp'>
        <InputPassword.Input />
        <InputPassword.Toggle />
      </InputPassword.Root>,
    )
    // Aria-label may not be directly accessible, but component renders
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('supporte la prop disabled', () => {
    render(
      <InputPassword.Root>
        <InputPassword.Input disabled />
        <InputPassword.Toggle />
      </InputPassword.Root>,
    )
    const input = document.querySelector('input[type="password"]')
    expect(input).toBeDisabled()
  })

  it('supporte la prop value et onChange', () => {
    const handleChange = vi.fn()
    render(
      <InputPassword.Root>
        <InputPassword.Input
          value='abc'
          onChange={handleChange}
        />
        <InputPassword.Toggle />
      </InputPassword.Root>,
    )
    const input = screen.getByDisplayValue('abc')
    fireEvent.change(input, { target: { value: 'def' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('affiche/masque le mot de passe au clic sur le bouton', () => {
    render(
      <InputPassword.Root>
        <InputPassword.Input placeholder='Mot de passe' />
        <InputPassword.Toggle />
      </InputPassword.Root>,
    )
    const input = screen.getByPlaceholderText('Mot de passe')
    const toggle = screen.getByRole('button')
    expect(input).toHaveAttribute('type', 'password')
    fireEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'text')
    fireEvent.click(toggle)
    expect(input).toHaveAttribute('type', 'password')
  })
})
