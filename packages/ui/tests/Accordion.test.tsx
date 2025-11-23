import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Accordion } from '../src'

const items = [
  { id: 'a', title: 'Titre A', content: 'Contenu A' },
  { id: 'b', title: 'Titre B', content: 'Contenu B' },
  { id: 'c', title: 'Titre C', content: 'Contenu C' },
]

describe('Accordion', () => {
  it('affiche tous les titres et contenus', () => {
    render(
      <Accordion.Root type='single'>
        {items.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id}>
            <Accordion.Trigger>{item.title}</Accordion.Trigger>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>,
    )
    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      // Contenu pas affiché par défaut
    })
  })

  it('ouvre et ferme un item au clic sur le trigger', () => {
    render(
      <Accordion.Root
        type='single'
        collapsible>
        <Accordion.Item value='a'>
          <Accordion.Trigger>Ouvrir</Accordion.Trigger>
          <Accordion.Content>Contenu</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const trigger = screen.getByRole('button')
    const content = screen.getByRole('region', { hidden: true })
    expect(content).toHaveAttribute('data-state', 'closed')
    fireEvent.click(trigger)
    expect(content).toHaveAttribute('data-state', 'open')
    fireEvent.click(trigger)
    expect(content).toHaveAttribute('data-state', 'closed')
  })

  it('supporte le mode multi-ouverture', () => {
    render(
      <Accordion.Root type='multiple'>
        {items.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id}>
            <Accordion.Trigger>{item.title}</Accordion.Trigger>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>,
    )
    const triggers = items.map((item) => screen.getByText(item.title))
    triggers.forEach((trigger) => fireEvent.click(trigger))
    items.forEach((item) => {
      const content = screen.getByText(item.content)
      expect(content.parentElement?.parentElement).toHaveAttribute(
        'data-state',
        'open',
      )
    })
  })

  it('supporte le mode contrôlé', () => {
    const onValueChange = vi.fn()
    render(
      <Accordion.Root
        value={[items[1].id]}
        onValueChange={onValueChange}
        type='multiple'>
        {items.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id}>
            <Accordion.Trigger>{item.title}</Accordion.Trigger>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>,
    )
    const content = screen.getByText(items[1].content)
    expect(content.parentElement?.parentElement).toHaveAttribute(
      'data-state',
      'open',
    )
    fireEvent.click(screen.getByText(items[0].title))
    expect(onValueChange).toHaveBeenCalled()
  })

  it('ajoute les attributs ARIA', () => {
    render(
      <Accordion.Root type='single'>
        <Accordion.Item value='a'>
          <Accordion.Trigger>Ouvrir</Accordion.Trigger>
          <Accordion.Content>Contenu</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const trigger = screen.getByRole('button')
    expect(trigger).toHaveAttribute('aria-expanded')
    // Content pas affiché par défaut
  })

  it('supporte les props icon, subtitle et renderChevronIcon sur Trigger', () => {
    const Chevron = () => <span data-testid='chevron'>V</span>
    render(
      <Accordion.Root type='single'>
        <Accordion.Item value='a'>
          <Accordion.Trigger
            icon={<span>Icon</span>}
            subtitle={<span>Sub</span>}
            renderChevronIcon={() => <Chevron />}>
            Titre
          </Accordion.Trigger>
          <Accordion.Content>Contenu</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    )
    expect(screen.getByText('Icon')).toBeInTheDocument()
    expect(screen.getByText('Sub')).toBeInTheDocument()
    expect(screen.getByTestId('chevron')).toBeInTheDocument()
  })

  it('applique les classes d’animation selon l’état', () => {
    render(
      <Accordion.Root type='single'>
        <Accordion.Item value='a'>
          <Accordion.Trigger>Ouvrir</Accordion.Trigger>
          <Accordion.Content>Contenu</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const trigger = screen.getByRole('button')
    const content = screen.getByRole('region', { hidden: true })
    fireEvent.click(trigger)
    expect(content).toHaveClass('data-[state=open]:animate-slide-down')
    fireEvent.click(trigger)
    expect(content).toHaveClass('data-[state=closed]:animate-slide-up')
  })
})
