import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Accordion } from '../src'

describe('Accordion', () => {
  const defaultItems = [
    {
      id: 'item-1',
      title: 'Item 1',
      content: 'Content 1',
    },
    {
      id: 'item-2',
      title: 'Item 2',
      content: 'Content 2',
    },
    {
      id: 'item-3',
      title: 'Item 3',
      content: 'Content 3',
    },
  ]

  describe('Accordion.Native (HTML)', () => {
    it('renders native HTML accordion without JavaScript', () => {
      render(<Accordion.Native items={defaultItems} />)
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('first item is open by default', () => {
      const { container } = render(<Accordion.Native items={defaultItems} />)
      const details = container.querySelectorAll('details')
      expect(details[0]).toHaveAttribute('open')
    })

    it('renders content for all items', () => {
      render(<Accordion.Native items={defaultItems} />)
      expect(screen.getByText('Content 1')).toBeInTheDocument()
      expect(screen.getByText('Content 2')).toBeInTheDocument()
      expect(screen.getByText('Content 3')).toBeInTheDocument()
    })
  })

  describe('Accordion.Root (Controlled)', () => {
    it('renders uncontrolled accordion', () => {
      render(<Accordion.Root items={defaultItems} />)
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Content 1')).toBeInTheDocument()
    })

    it('first item is open by default in uncontrolled mode', () => {
      const { container } = render(<Accordion.Root items={defaultItems} />)
      const content = container.querySelector('[id="accordion-content-item-1"]')
      expect(content).not.toHaveAttribute('hidden')
    })

    it('opens/closes items on click in uncontrolled mode', () => {
      const { container } = render(<Accordion.Root items={defaultItems} />)
      const triggers = container.querySelectorAll(
        '[data-component="AccordionTrigger"]',
      )

      // Click item 2
      fireEvent.click(triggers[1])
      const content2 = container.querySelector(
        '[id="accordion-content-item-2"]',
      )
      expect(content2).not.toHaveAttribute('hidden')

      // Item 1 should close (single mode)
      const content1 = container.querySelector(
        '[id="accordion-content-item-1"]',
      )
      expect(content1).toHaveAttribute('hidden')
    })

    it('allows multiple items open when allowMultiple is true', () => {
      const { container } = render(
        <Accordion.Root items={defaultItems} allowMultiple={true} />,
      )
      const triggers = container.querySelectorAll(
        '[data-component="AccordionTrigger"]',
      )

      // Click item 2
      fireEvent.click(triggers[1])
      const content2 = container.querySelector(
        '[id="accordion-content-item-2"]',
      )
      expect(content2).not.toHaveAttribute('hidden')

      // Item 1 should stay open
      const content1 = container.querySelector(
        '[id="accordion-content-item-1"]',
      )
      expect(content1).not.toHaveAttribute('hidden')
    })

    it('handles controlled mode with value prop', () => {
      const { rerender } = render(
        <Accordion.Root items={defaultItems} value={['item-1']} />,
      )

      let content2 = screen
        .getByText('Content 2')
        .closest('[data-component="AccordionContent"]')
      expect(content2).toHaveAttribute('hidden')

      // Update to show item 2
      rerender(<Accordion.Root items={defaultItems} value={['item-2']} />)

      content2 = screen
        .getByText('Content 2')
        .closest('[data-component="AccordionContent"]')
      expect(content2).not.toHaveAttribute('hidden')
    })

    it('calls onValueChange callback in controlled mode', () => {
      const onValueChange = vi.fn()
      const { container } = render(
        <Accordion.Root
          items={defaultItems}
          value={['item-1']}
          onValueChange={onValueChange}
        />,
      )

      const triggers = container.querySelectorAll(
        '[data-component="AccordionTrigger"]',
      )
      fireEvent.click(triggers[1])

      expect(onValueChange).toHaveBeenCalledWith(['item-2'])
    })

    it('respects defaultValue prop in uncontrolled mode', () => {
      const { container } = render(
        <Accordion.Root items={defaultItems} defaultValue={['item-2']} />,
      )

      const content2 = container.querySelector(
        '[id="accordion-content-item-2"]',
      )
      expect(content2).not.toHaveAttribute('hidden')

      const content1 = container.querySelector(
        '[id="accordion-content-item-1"]',
      )
      expect(content1).toHaveAttribute('hidden')
    })

    it('renders with custom className', () => {
      const { container } = render(
        <Accordion.Root items={defaultItems} className='custom-class' />,
      )
      const accordion = container.querySelector('[data-component="Accordion"]')
      expect(accordion).toHaveClass('custom-class')
    })

    it('renders as custom element when as prop is provided', () => {
      const { container } = render(
        <Accordion.Root items={defaultItems} as='section' />,
      )
      const accordion = container.querySelector('section')
      expect(accordion).toBeInTheDocument()
    })

    it('disables accordion items when disabled prop is true', () => {
      const itemsWithDisabled = [
        ...defaultItems.slice(0, 1),
        { ...defaultItems[1], disabled: true },
      ]
      const { container } = render(<Accordion.Root items={itemsWithDisabled} />)

      const triggers = container.querySelectorAll(
        '[data-component="AccordionTrigger"]',
      )
      expect(triggers[1]).toBeDisabled()
    })

    it('has correct ARIA attributes', () => {
      const { container } = render(<Accordion.Root items={defaultItems} />)
      const triggers = container.querySelectorAll(
        '[data-component="AccordionTrigger"]',
      )

      // First trigger should be expanded
      expect(triggers[0]).toHaveAttribute('aria-expanded', 'true')

      // Others should be collapsed
      expect(triggers[1]).toHaveAttribute('aria-expanded', 'false')
      expect(triggers[2]).toHaveAttribute('aria-expanded', 'false')
    })

    it('has correct aria-controls attributes', () => {
      const { container } = render(<Accordion.Root items={defaultItems} />)
      const triggers = container.querySelectorAll(
        '[data-component="AccordionTrigger"]',
      )

      expect(triggers[0]).toHaveAttribute(
        'aria-controls',
        'accordion-content-item-1',
      )
      expect(triggers[1]).toHaveAttribute(
        'aria-controls',
        'accordion-content-item-2',
      )
      expect(triggers[2]).toHaveAttribute(
        'aria-controls',
        'accordion-content-item-3',
      )
    })
  })

  describe('Compound Component Pattern', () => {
    it('uses Accordion.Item, Accordion.Trigger, and Accordion.Content components', () => {
      render(
        <Accordion.Root items={defaultItems}>
          {defaultItems.map((item) => (
            <Accordion.Item key={item.id} id={item.id}>
              <Accordion.Trigger>{item.title}</Accordion.Trigger>
              <Accordion.Content>{item.content}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>,
      )

      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Content 1')).toBeInTheDocument()
    })
  })
})
