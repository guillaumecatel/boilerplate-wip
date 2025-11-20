import { cva, type VariantProps } from 'class-variance-authority'
import { Checkbox, Popover } from 'radix-ui'
import type { ReactNode } from 'react'
import { forwardRef, useState } from 'react'

import { Text } from './Text'

const multiSelectTriggerVariants = cva(
  [
    'flex items-center justify-between gap-2',
    'w-full rounded-lg border transition-colors duration-200',
    'bg-white dark:bg-base-900',
    'text-base-900 dark:text-base-50',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-base-50 dark:disabled:bg-base-800',
  ],
  {
    variants: {
      size: {
        sm: 'min-h-8 px-3 py-1 text-sm',
        md: 'min-h-10 px-4 py-2 text-base',
        lg: 'min-h-12 px-5 py-2.5 text-lg',
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

const multiSelectContentVariants = cva(
  [
    'w-full overflow-hidden rounded-lg border shadow-lg',
    'bg-white dark:bg-base-900',
    'border-base-200 dark:border-base-700',
    'max-h-[300px] overflow-y-auto',
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

const multiSelectItemVariants = cva(
  [
    'relative flex cursor-pointer items-center gap-2 px-2 py-1.5',
    'text-base-900 dark:text-base-50',
    'outline-none select-none',
    'transition-colors duration-150',
    'hover:bg-accent-50 dark:hover:bg-accent-950',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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

export interface MultiSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface MultiSelectProps
  extends VariantProps<typeof multiSelectTriggerVariants> {
  id?: string
  options: MultiSelectOption[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  disabled?: boolean
  error?: boolean
  maxDisplay?: number
  className?: string
}

interface MultiSelectRootProps extends MultiSelectProps {
  variant?: 'default' | 'error'
}

const MultiSelectRoot = forwardRef<HTMLButtonElement, MultiSelectRootProps>(
  (
    {
      id,
      options,
      value: controlledValue,
      defaultValue = [],
      onValueChange,
      placeholder = 'Select items...',
      disabled = false,
      error = false,
      size = 'md',
      variant = 'default',
      maxDisplay = 3,
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue)
    const [open, setOpen] = useState(false)

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleValueChange = (newValue: string[]) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    const toggleOption = (optionValue: string) => {
      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]
      handleValueChange(newValue)
    }

    const selectedOptions = options.filter((opt) => value.includes(opt.value))

    const displayText =
      selectedOptions.length === 0
        ? placeholder
        : selectedOptions.length <= maxDisplay
          ? selectedOptions.map((opt) => opt.label).join(', ')
          : `${selectedOptions.length} selected`

    return (
      <Popover.Root
        open={open}
        onOpenChange={setOpen}>
        <Popover.Trigger
          ref={ref}
          id={id}
          className={multiSelectTriggerVariants({
            size,
            variant: error ? 'error' : variant,
            className,
          })}
          disabled={disabled}
          data-placeholder={selectedOptions.length === 0 ? '' : undefined}>
          <span className='flex-1 truncate text-left'>
            <Text
              variant={
                size === 'sm'
                  ? 'caption'
                  : size === 'lg'
                    ? 'body-large'
                    : 'body-medium'
              }
              color={selectedOptions.length === 0 ? 'secondary' : 'inherit'}
              className='truncate'>
              {displayText}
            </Text>
          </span>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`h-4 w-4 opacity-50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path
              d='M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            />
          </svg>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={multiSelectContentVariants({ size, className: 'p-1' })}
            align='start'
            sideOffset={5}
            style={{ width: 'var(--radix-popover-trigger-width)' }}>
            {options.map((option) => (
              <MultiSelectItem
                key={option.value}
                option={option}
                checked={value.includes(option.value)}
                onCheckedChange={() => toggleOption(option.value)}
                size={size}
              />
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
  },
)

MultiSelectRoot.displayName = 'MultiSelectRoot'

interface MultiSelectItemProps
  extends VariantProps<typeof multiSelectItemVariants> {
  option: MultiSelectOption
  checked: boolean
  onCheckedChange: () => void
}

const MultiSelectItem = forwardRef<HTMLButtonElement, MultiSelectItemProps>(
  ({ option, checked, onCheckedChange, size }, ref) => {
    return (
      <button
        ref={ref}
        type='button'
        role='option'
        aria-selected={checked}
        onClick={onCheckedChange}
        disabled={option.disabled}
        data-disabled={option.disabled ? '' : undefined}
        className={multiSelectItemVariants({ size })}>
        <Checkbox.Root
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={option.disabled}
          className='border-base-300 data-[state=checked]:border-accent-500 data-[state=checked]:bg-accent-500 dark:border-base-700 dark:bg-base-900 dark:data-[state=checked]:border-accent-600 dark:data-[state=checked]:bg-accent-600 flex h-4 w-4 shrink-0 items-center justify-center rounded border bg-white'>
          <Checkbox.Indicator>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3 text-white'>
              <path
                d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
                fill='currentColor'
                fillRule='evenodd'
                clipRule='evenodd'
              />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <Text
          variant={
            size === 'sm'
              ? 'caption'
              : size === 'lg'
                ? 'body-large'
                : 'body-medium'
          }
          color='inherit'
          className='flex-1 text-left'>
          {option.label}
        </Text>
      </button>
    )
  },
)

MultiSelectItem.displayName = 'MultiSelectItem'

const MultiSelectLabel = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={`text-base-700 dark:text-base-300 px-2 py-1.5 text-sm font-semibold ${className || ''}`}>
    <Text
      variant='caption'
      weight='semibold'
      color='secondary'>
      {children}
    </Text>
  </div>
))

MultiSelectLabel.displayName = 'MultiSelectLabel'

const MultiSelectSeparator = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => (
    <div
      ref={ref}
      className={`bg-base-200 dark:bg-base-700 -mx-1 my-1 h-px ${className || ''}`}
    />
  ),
)

MultiSelectSeparator.displayName = 'MultiSelectSeparator'

export interface MultiSelectStaticProps {
  children: ReactNode
}

export const MultiSelect = Object.assign(
  ({ children }: MultiSelectStaticProps) => {
    return <div data-component='MultiSelect'>{children}</div>
  },
  {
    Root: MultiSelectRoot,
    Label: MultiSelectLabel,
    Separator: MultiSelectSeparator,
  },
)

export default MultiSelect
