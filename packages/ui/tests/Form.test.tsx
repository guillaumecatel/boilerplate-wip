import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Form } from '../src'

describe('Form', () => {
  it('affiche le contenu enfant', () => {
    render(
      <Form>
        <span>Contenu</span>
      </Form>,
    )
    expect(screen.getByText('Contenu')).toBeInTheDocument()
  })

  it('supporte la prop aria-label', () => {
    render(
      <Form aria-label='formulaire'>
        <span>Label</span>
      </Form>,
    )
    const form = screen.getByLabelText('formulaire')
    expect(form).toBeInTheDocument()
  })

  it('accepte une classe personnalisée', () => {
    render(
      <Form className='custom-form'>
        <span>Classe</span>
      </Form>,
    )
    const form = screen.getByText('Classe').closest('form')
    expect(form).toHaveClass('custom-form')
  })

  it('déclenche onSubmit lors de la soumission', async () => {
    const handleSubmit = vi.fn()
    render(
      <Form onSubmit={handleSubmit}>
        <button type='submit'>Envoyer</button>
      </Form>,
    )
    fireEvent.click(screen.getByText('Envoyer'))
    await waitFor(() => expect(handleSubmit).toHaveBeenCalled())
  })
})
