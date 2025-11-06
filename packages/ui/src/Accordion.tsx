import { Accordion as RadixAccordion } from 'radix-ui'
import { useState, type ReactNode } from 'react'

import { Text } from './Text'

interface AccordionProps {
  items?: AccordionItemProps[]
  type: 'single' | 'multiple'
  collapsible?: boolean
  renderChevronIcon?: (isOpen: boolean) => ReactNode
}

interface AccordionItemProps {
  id: string
  title: ReactNode
  subtitle?: ReactNode
  content: ReactNode
  icon?: ReactNode
}

export const Accordion = ({
  type = 'multiple',
  collapsible = false,
  items = [],
  renderChevronIcon,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <RadixAccordion.Root
      onValueChange={(openValues) => {
        if (type === 'single') {
          setOpenItems(openValues ? [openValues] : [])
        } else {
          setOpenItems(openValues as string[])
        }
      }}
      data-component='Accordion'
      type={type}
      collapsible={type === 'single' ? collapsible : false}
      className='flex flex-col'>
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.id}
          data-component='AccordionItem'
          value={item.id}
          className='flex flex-col justify-between border-b border-b-gray-100'>
          <RadixAccordion.Trigger
            data-component='AccordionTrigger'
            className='flex flex-1 flex-row items-center gap-3 px-3 py-3 text-start focus:outline-none focus-visible:bg-gray-100'>
            {item.icon && (
              <div className='flex size-9 items-center justify-center rounded-full border border-gray-200'>
                {item.icon}
              </div>
            )}
            <div className='flex flex-1 flex-col gap-1'>
              <Text type='body-medium' className='font-bold text-gray-800'>
                {item.title}
              </Text>
              {item.subtitle && (
                <Text type='body-medium' className='text-gray-800'>
                  {item.subtitle}
                </Text>
              )}
            </div>
            {renderChevronIcon &&
              renderChevronIcon(openItems.includes(item.id))}
          </RadixAccordion.Trigger>
          <RadixAccordion.Content
            data-component='AccordionContent'
            className='ps-15 pb-6'>
            <Text type='body-medium' className='text-gray-500'>
              {item.content}
            </Text>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}

Accordion.Root = RadixAccordion.Root
Accordion.Header = RadixAccordion.Header
Accordion.Trigger = RadixAccordion.Trigger
Accordion.Content = RadixAccordion.Content
Accordion.Item = RadixAccordion.Item

export default Accordion
