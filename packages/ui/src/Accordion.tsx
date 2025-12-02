import { cx } from 'class-variance-authority'
import { Accordion as RadixAccordion } from 'radix-ui'
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type CSSProperties,
  type ReactNode,
} from 'react'

import { Text } from './Text'

// Export Root component
const AccordionRoot = RadixAccordion.Root

AccordionRoot.displayName = 'Accordion.Root'

// Header component
const AccordionHeader = forwardRef<
  ComponentRef<typeof RadixAccordion.Header>,
  ComponentPropsWithoutRef<typeof RadixAccordion.Header>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Header
    ref={ref}
    className={cx('flex', className)}
    {...props}
  />
))

AccordionHeader.displayName = 'Accordion.Header'

// Trigger component
interface AccordionTriggerProps
  extends ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> {
  icon?: ReactNode
  subtitle?: ReactNode
  renderChevronIcon?: (isOpen: boolean) => ReactNode
}

const AccordionTrigger = forwardRef<
  ComponentRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(
  (
    { children, className, icon, subtitle, renderChevronIcon, ...props },
    ref,
  ) => (
    <RadixAccordion.Trigger
      ref={ref}
      className={cx(
        'flex flex-1 flex-row items-baseline gap-x-3 py-3 text-start',
        className,
      )}
      {...props}>
      {icon}
      <div className='flex flex-1 flex-col gap-0'>
        <Text
          variant='body-medium'
          className='font-medium text-gray-800'>
          {children}
        </Text>
        {subtitle && (
          <Text
            variant='body-small'
            className='text-gray-500'>
            {subtitle}
          </Text>
        )}
      </div>
      {renderChevronIcon && renderChevronIcon(false)}
    </RadixAccordion.Trigger>
  ),
)

AccordionTrigger.displayName = 'Accordion.Trigger'

// Content component
const AccordionContent = forwardRef<
  ComponentRef<typeof RadixAccordion.Content>,
  ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ children, className, ...props }, ref) => {
  const cssVars = {
    '--content-height': 'var(--radix-accordion-content-height)',
  } as CSSProperties

  return (
    <RadixAccordion.Content
      ref={ref}
      style={cssVars}
      className={cx(
        'overflow-hidden',
        'data-[state=open]:animate-slide-down',
        'data-[state=closed]:animate-slide-up',
        className,
      )}
      {...props}>
      <div className='pb-6'>
        <Text
          variant='body-small'
          className='text-gray-500'>
          {children}
        </Text>
      </div>
    </RadixAccordion.Content>
  )
})

AccordionContent.displayName = 'Accordion.Content'

// Item component
const AccordionItem = forwardRef<
  ComponentRef<typeof RadixAccordion.Item>,
  ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className={cx(
      'flex flex-col justify-between focus-visible:bg-gray-100',
      className,
    )}
    {...props}
  />
))

AccordionItem.displayName = 'Accordion.Item'

// Export individual components
export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
  Header: AccordionHeader,
}

export default Accordion
