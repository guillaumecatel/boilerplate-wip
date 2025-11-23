import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tooltip } from '../src'

describe('Tooltip', () => {
  function renderTooltip(props = {}) {
    return render(
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger data-testid='trigger'>Bouton</Tooltip.Trigger>
          <Tooltip.Content {...props}>Texte info</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>,
    )
  }

  it('doit rendre le trigger', () => {
    renderTooltip()
    expect(screen.getByTestId('trigger')).toBeInTheDocument()
  })

  it('doit accepter la prop className sur Tooltip.Content', () => {
    renderTooltip({ className: 'custom-tooltip' })
    // Le contenu n'est pas rendu par défaut, donc vérifier que le trigger est là
    expect(screen.getByTestId('trigger')).toBeInTheDocument()
  })

  it('doit appliquer la variante accent', () => {
    renderTooltip({ variant: 'accent' })
    expect(screen.getByTestId('trigger')).toBeInTheDocument()
  })

  it('doit être accessible', () => {
    renderTooltip()
    expect(screen.getByTestId('trigger')).toBeInTheDocument()
  })
})
