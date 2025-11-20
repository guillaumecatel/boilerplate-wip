import { cva, type VariantProps } from 'class-variance-authority'
import { Select as RadixSelect } from 'radix-ui'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef } from 'react'

const selectTriggerVariants = cva(
  [
    'flex items-center justify-between gap-2',
    'w-full rounded-lg border transition-colors duration-200',
    'bg-white dark:bg-base-900',
    'text-base-900 dark:text-base-50',
    'placeholder:text-base-400 dark:placeholder:text-base-500',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-base-50 dark:disabled:bg-base-800',
    'data-[placeholder]:text-base-400 dark:data-[placeholder]:text-base-500',
  ],
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
      variant: {
        default: [
          'border-base-300 dark:border-base-700',
          'focus:border-accent-500 focus:ring-accent-500/20',
          'hover:border-base-400 dark:hover:border-base-600',
        ],
        error: [
          'border-red-500 dark:border-red-600',
          'focus:border-red-500 focus:ring-red-500/20',
          'text-red-900 dark:text-red-100',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
)

const selectContentVariants = cva(
  [
    'overflow-hidden rounded-lg border shadow-lg',
    'bg-white dark:bg-base-900',
    'border-base-200 dark:border-base-700',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const selectItemVariants = cva(
  [
    'relative flex cursor-pointer items-center gap-2 px-2 py-1.5',
    'text-base-900 dark:text-base-50',
    'outline-none select-none',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    'data-[highlighted]:bg-accent-100 dark:data-[highlighted]:bg-accent-900',
    'data-[highlighted]:text-accent-900 dark:data-[highlighted]:text-accent-50',
  ],
  {
    variants: {
      size: {
        sm: 'min-h-8 text-sm',
        md: 'min-h-10 text-base',
        lg: 'min-h-12 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const SelectRoot = RadixSelect.Root
const SelectGroup = RadixSelect.Group
const SelectValue = RadixSelect.Value
const SelectPortal = RadixSelect.Portal

interface SelectTriggerProps
  extends ComponentPropsWithoutRef<typeof RadixSelect.Trigger>,
    VariantProps<typeof selectTriggerVariants> {
  error?: boolean
}

const SelectTrigger = forwardRef<
  ElementRef<typeof RadixSelect.Trigger>,
  SelectTriggerProps
>(({ className, size, variant, error, children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={selectTriggerVariants({
      size,
      variant: error ? 'error' : variant,
      className,
    })}
    {...props}>
    {children}
    <RadixSelect.Icon asChild>
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 opacity-50'>
        <path
          d='M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z'
          fill='currentColor'
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </svg>
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
))

SelectTrigger.displayName = RadixSelect.Trigger.displayName

interface SelectContentProps
  extends ComponentPropsWithoutRef<typeof RadixSelect.Content>,
    VariantProps<typeof selectContentVariants> {}

const SelectContent = forwardRef<
  ElementRef<typeof RadixSelect.Content>,
  SelectContentProps
>(({ className, size, children, position = 'popper', ...props }, ref) => (
  <SelectPortal>
    <RadixSelect.Content
      ref={ref}
      className={selectContentVariants({ size, className })}
      position={position}
      {...props}>
      <RadixSelect.Viewport className='p-1'>{children}</RadixSelect.Viewport>
    </RadixSelect.Content>
  </SelectPortal>
))

SelectContent.displayName = RadixSelect.Content.displayName

interface SelectItemProps
  extends ComponentPropsWithoutRef<typeof RadixSelect.Item>,
    VariantProps<typeof selectItemVariants> {}

const SelectItem = forwardRef<
  ElementRef<typeof RadixSelect.Item>,
  SelectItemProps
>(({ className, size, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={selectItemVariants({ size, className })}
    {...props}>
    <RadixSelect.ItemIndicator className='inline-flex items-center'>
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'>
        <path
          d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
          fill='currentColor'
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </svg>
    </RadixSelect.ItemIndicator>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
))

SelectItem.displayName = RadixSelect.Item.displayName

const SelectLabel = forwardRef<
  ElementRef<typeof RadixSelect.Label>,
  ComponentPropsWithoutRef<typeof RadixSelect.Label>
>(({ className, ...props }, ref) => (
  <RadixSelect.Label
    ref={ref}
    className={`text-base-700 dark:text-base-300 px-2 py-1.5 text-sm font-semibold ${className || ''}`}
    {...props}
  />
))

SelectLabel.displayName = RadixSelect.Label.displayName

const SelectSeparator = forwardRef<
  ElementRef<typeof RadixSelect.Separator>,
  ComponentPropsWithoutRef<typeof RadixSelect.Separator>
>(({ className, ...props }, ref) => (
  <RadixSelect.Separator
    ref={ref}
    className={`bg-base-200 dark:bg-base-700 -mx-1 my-1 h-px ${className || ''}`}
    {...props}
  />
))

SelectSeparator.displayName = RadixSelect.Separator.displayName

export interface SelectProps {
  children: ReactNode
}

export const Select = Object.assign(
  ({ children }: SelectProps) => {
    return <div data-component='Select'>{children}</div>
  },
  {
    Root: SelectRoot,
    Group: SelectGroup,
    Value: SelectValue,
    Trigger: SelectTrigger,
    Content: SelectContent,
    Item: SelectItem,
    Label: SelectLabel,
    Separator: SelectSeparator,
    Portal: SelectPortal,
  },
)

export default Select
