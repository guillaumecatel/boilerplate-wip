import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tabs } from '../src'

describe('Tabs', () => {
  function renderTabs(props = {}) {
    return render(
      <Tabs.Root
        defaultValue='tab1'
        {...props}>
        <Tabs.List data-component='Tabs'>
          <Tabs.Trigger value='tab1'>Onglet 1</Tabs.Trigger>
          <Tabs.Trigger value='tab2'>Onglet 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='tab1'>Contenu 1</Tabs.Content>
        <Tabs.Content value='tab2'>Contenu 2</Tabs.Content>
      </Tabs.Root>,
    )
  }

  it('doit rendre les onglets et le contenu', () => {
    renderTabs()
    expect(screen.getByText('Onglet 1')).toBeInTheDocument()
    expect(screen.getByText('Onglet 2')).toBeInTheDocument()
    expect(screen.getByText('Contenu 1')).toBeInTheDocument()
    // Le contenu 2 n'est pas affiché car tab1 est sélectionné
    const contenu2 = screen.queryByText('Contenu 2')
    if (contenu2) {
      expect(contenu2).not.toBeVisible()
    } else {
      expect(contenu2).toBeNull()
    }
  })

  it('doit avoir l’attribut data-component sur Tabs.List', () => {
    renderTabs()
    expect(screen.getByRole('tablist')).toHaveAttribute(
      'data-component',
      'Tabs',
    )
  })

  it('doit accepter la prop className sur Tabs.List', () => {
    render(
      <Tabs.Root defaultValue='tab1'>
        <Tabs.List
          className='custom-tabs'
          data-component='Tabs'>
          <Tabs.Trigger value='tab1'>Onglet 1</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='tab1'>Contenu 1</Tabs.Content>
      </Tabs.Root>,
    )
    expect(screen.getByRole('tablist')).toHaveClass('custom-tabs')
  })

  it('doit être accessible via le rôle tablist', () => {
    renderTabs()
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })
})
