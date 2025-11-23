import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Text } from '../src'

describe('Text', () => {
  it('doit rendre le composant avec ses enfants', () => {
    render(<Text>Texte de test</Text>)
    expect(screen.getByText('Texte de test')).toBeInTheDocument()
  })

  it('doit avoir l’attribut data-component', () => {
    render(<Text>Attribut data-component</Text>)
    expect(screen.getByText('Attribut data-component')).toHaveAttribute(
      'data-component',
      'Text',
    )
  })

  it('doit accepter la prop className', () => {
    render(<Text className='custom-text'>ClassName test</Text>)
    expect(screen.getByText('ClassName test')).toHaveClass('custom-text')
  })

  it('doit accepter la prop as pour le polymorphisme', () => {
    render(<Text as='p'>Texte paragraphe</Text>)
    expect(screen.getByText('Texte paragraphe').tagName.toLowerCase()).toBe('p')
  })

  it('doit appliquer la variante color', () => {
    render(<Text color='primary'>Texte coloré</Text>)
    expect(screen.getByText('Texte coloré')).toHaveClass('text-gray-900')
  })

  it('doit appliquer la variante weight', () => {
    render(<Text weight='bold'>Texte gras</Text>)
    expect(screen.getByText('Texte gras')).toHaveClass('font-bold')
  })

  it('doit appliquer la variante italic', () => {
    render(<Text italic={true}>Texte italique</Text>)
    expect(screen.getByText('Texte italique')).toHaveClass('italic')
  })
})
