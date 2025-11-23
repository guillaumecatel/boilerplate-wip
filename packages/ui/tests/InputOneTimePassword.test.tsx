import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InputOneTimePassword } from '../src'

describe('InputOneTimePassword', () => {
  it('rend les champs OTP', () => {
    render(
      <InputOneTimePassword.Root>
        <InputOneTimePassword.Input index={0} />
        <InputOneTimePassword.Input index={1} />
        <InputOneTimePassword.Input index={2} />
        <InputOneTimePassword.Input index={3} />
      </InputOneTimePassword.Root>,
    )
    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(4)
  })

  it('ajoute l’attribut data-component', () => {
    render(
      <InputOneTimePassword.Root>
        <InputOneTimePassword.Input index={0} />
        <InputOneTimePassword.Input index={1} />
      </InputOneTimePassword.Root>,
    )
    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)
  })

  it('supporte la prop aria-label', () => {
    render(
      <InputOneTimePassword.Root aria-label='otp'>
        <InputOneTimePassword.Input index={0} />
        <InputOneTimePassword.Input index={1} />
      </InputOneTimePassword.Root>,
    )
    const el = screen.getByLabelText('otp')
    expect(el).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <InputOneTimePassword.Root className='custom-otp'>
        <InputOneTimePassword.Input index={0} />
        <InputOneTimePassword.Input index={1} />
      </InputOneTimePassword.Root>,
    )
    const root = document.querySelector('.custom-otp')
    expect(root).toBeInTheDocument()
  })

  it('supporte la prop disabled', () => {
    render(
      <InputOneTimePassword.Root disabled>
        <InputOneTimePassword.Input index={0} />
        <InputOneTimePassword.Input index={1} />
      </InputOneTimePassword.Root>,
    )
    const inputs = screen.getAllByRole('textbox')
    inputs.forEach((input) => expect(input).toBeDisabled())
  })

  it('déclenche onChange lors de la saisie', () => {
    const handleChange = vi.fn()
    render(
      <InputOneTimePassword.Root onChange={handleChange}>
        <InputOneTimePassword.Input index={0} />
        <InputOneTimePassword.Input index={1} />
      </InputOneTimePassword.Root>,
    )
    const inputs = screen.getAllByRole('textbox')
    fireEvent.change(inputs[0], { target: { value: '1' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
