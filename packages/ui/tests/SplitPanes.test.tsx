import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SplitPanes } from '../src'

describe('SplitPanes', () => {
  it('affiche les deux panneaux', () => {
    render(
      <SplitPanes children={[<div>Panneau 1</div>, <div>Panneau 2</div>]} />,
    )
    expect(screen.getByText('Panneau 1')).toBeInTheDocument()
    expect(screen.getByText('Panneau 2')).toBeInTheDocument()
  })

  it('ajoute l’attribut data-component', () => {
    render(<SplitPanes children={[<div>Test</div>, <div />]} />)
    const split = screen.getByText('Test').closest('[data-component]')
    expect(split).toHaveAttribute('data-component', 'SplitPanes')
  })

  it('accepte une classe personnalisée', () => {
    render(
      <SplitPanes
        className='custom-split'
        children={[<div>Test</div>, <div />]}
      />,
    )
    const split = screen.getByText('Test').closest('[data-component]')
    expect(split).toHaveClass('custom-split')
  })

  it('accepte une classe personnalisée pour chaque pane', () => {
    render(
      <SplitPanes
        pane1ClassName='pane1'
        pane2ClassName='pane2'
        children={[<div>P1</div>, <div>P2</div>]}
      />,
    )
    expect(screen.getByText('P1').closest('.pane1')).toBeTruthy()
    expect(screen.getByText('P2').closest('.pane2')).toBeTruthy()
  })

  it('le resizer a le bon aria-label', () => {
    render(
      <SplitPanes
        resizerAriaLabel='Redimensionner'
        children={[<div />, <div />]}
      />,
    )
    expect(screen.getByLabelText('Redimensionner')).toBeInTheDocument()
  })
})
