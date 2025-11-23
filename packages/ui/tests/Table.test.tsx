import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Table } from '../src'

describe('Table', () => {
  it('doit rendre le composant avec ses enfants', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Contenu cellule</td>
          </tr>
        </tbody>
      </Table>,
    )
    expect(screen.getByText('Contenu cellule')).toBeInTheDocument()
  })

  it('doit avoir l’attribut data-component sur l’élément racine', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>,
    )
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })

  it('doit accepter la prop className', () => {
    render(
      <Table className='custom-table'>
        <tbody>
          <tr>
            <td>ClassName test</td>
          </tr>
        </tbody>
      </Table>,
    )
    expect(screen.getByRole('table')).toHaveClass('custom-table')
  })

  it('doit être accessible via le rôle table', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Accessibilité</td>
          </tr>
        </tbody>
      </Table>,
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
