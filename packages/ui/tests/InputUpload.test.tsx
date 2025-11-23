import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InputUpload } from '../src'

describe('InputUpload', () => {
  it('rend un champ de téléchargement', () => {
    render(<InputUpload />)
    const input = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'file')
  })

  it('supporte la prop aria-label', () => {
    render(<InputUpload aria-label='fichier' />)
    const input = screen.getByLabelText('fichier')
    expect(input).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <InputUpload
        className='custom-upload'
        aria-label='fichier'
      />,
    )
    const input = screen.getByLabelText('fichier')
    const wrapper = input.closest('div')
    expect(wrapper).toHaveClass('custom-upload')
  })

  it('supporte la prop disabled', () => {
    render(
      <InputUpload
        disabled
        aria-label='fichier'
      />,
    )
    const input = screen.getByLabelText('fichier')
    expect(input).toBeDisabled()
  })

  it('supporte la prop accept', () => {
    render(
      <InputUpload
        accept='.pdf,.jpg'
        aria-label='fichier'
      />,
    )
    const input = screen.getByLabelText('fichier')
    expect(input).toHaveAttribute('accept', '.pdf,.jpg')
  })

  it('déclenche onChange lors de la sélection de fichier', () => {
    const handleChange = vi.fn()
    render(
      <InputUpload
        onChange={handleChange}
        aria-label='fichier'
      />,
    )
    const input = screen.getByLabelText('fichier')
    const file = new File(['contenu'], 'test.pdf', { type: 'application/pdf' })
    fireEvent.change(input, { target: { files: [file] } })
    expect(handleChange).toHaveBeenCalled()
  })
})
