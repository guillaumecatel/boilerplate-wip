import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'

import { Button } from './Button'
import { Stack } from './Stack'
import { Text } from './Text'

const alertVariants = cva(
  [
    'rounded-[var(--feedback-border-radius)]',
    'border-[var(--feedback-border-width)]',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        info: [
          'bg-[var(--feedback-info-background-color)]',
          'border-[var(--feedback-info-border-color)]',
          'text-[var(--feedback-info-foreground-color)]',
        ],
        success: [
          'bg-[var(--feedback-success-background-color)]',
          'border-[var(--feedback-success-border-color)]',
          'text-[var(--feedback-success-foreground-color)]',
        ],
        warning: [
          'bg-[var(--feedback-warning-background-color)]',
          'border-[var(--feedback-warning-border-color)]',
          'text-[var(--feedback-warning-foreground-color)]',
        ],
        error: [
          'bg-[var(--feedback-error-background-color)]',
          'border-[var(--feedback-error-border-color)]',
          'text-[var(--feedback-error-foreground-color)]',
        ],
      },
      size: {
        sm: 'p-[var(--feedback-padding-sm)]',
        md: 'p-[var(--feedback-padding-md)]',
        lg: 'p-[var(--feedback-padding-lg)]',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  },
)

const iconVariants = cva(['shrink-0'], {
  variants: {
    variant: {
      info: ['text-[var(--feedback-info-icon-color)]'],
      success: ['text-[var(--feedback-success-icon-color)]'],
      warning: ['text-[var(--feedback-warning-icon-color)]'],
      error: ['text-[var(--feedback-error-icon-color)]'],
    },
    size: {
      sm: 'size-[var(--feedback-icon-size-sm)]',
      md: 'size-[var(--feedback-icon-size-md)]',
      lg: 'size-[var(--feedback-icon-size-lg)]',
    },
  },
  defaultVariants: {
    variant: 'info',
    size: 'md',
  },
})

const defaultIcons = {
  info: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
      />
    </svg>
  ),
  success: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  ),
  warning: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
      />
    </svg>
  ),
  error: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
      />
    </svg>
  ),
}

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof alertVariants> {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode | false
  dismissible?: boolean
  onDismiss?: () => void
}

export const Alert = ({
  variant = 'info',
  size = 'md',
  title,
  description,
  icon,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) => {
  const showIcon = icon !== false
  const iconToRender =
    icon === undefined ? defaultIcons[variant || 'info'] : icon
  const textVariant =
    size === 'sm' ? 'body-small' : size === 'md' ? 'body-medium' : 'body-large'

  return (
    <Stack
      as='div'
      data-component='Alert'
      role='alert'
      direction='row'
      align='start'
      gap='md'
      className={alertVariants({ variant, size, className })}
      {...props}>
      {showIcon && (
        <div className={iconVariants({ variant, size })}>{iconToRender}</div>
      )}
      <div className='flex-1'>
        {title && (
          <Text
            as='div'
            variant={textVariant}
            weight='semibold'
            color='inherit'
            className='mb-1'>
            {title}
          </Text>
        )}
        {(description || children) && (
          <Text
            as='div'
            variant={size === 'sm' ? 'body-small' : 'body-medium'}
            color='inherit'
            className={title ? 'mt-1' : undefined}>
            {description || children}
          </Text>
        )}
      </div>
      {dismissible && (
        <Button
          variant='icon-ghost'
          size='sm'
          onClick={onDismiss}
          className='-m-1 shrink-0'
          aria-label='Dismiss alert'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          }>
          Dismiss
        </Button>
      )}
    </Stack>
  )
}

export default Alert
