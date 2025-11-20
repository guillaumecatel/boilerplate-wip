import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes, ReactNode } from 'react'
import { Button } from './Button'
import { Text } from './Text'

const alertVariants = cva(
  'flex items-start gap-3 rounded-lg border transition-colors',
  {
    variants: {
      variant: {
        info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
        success:
          'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
        warning:
          'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100',
        error:
          'bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-100',
      },
      size: {
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-5',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  },
)

const iconVariants = cva('shrink-0', {
  variants: {
    variant: {
      info: 'text-blue-600 dark:text-blue-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      error: 'text-red-600 dark:text-red-400',
    },
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
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
    <div
      data-component='Alert'
      role='alert'
      className={alertVariants({ variant, size, className })}
      {...props}>
      {showIcon && (
        <div className={iconVariants({ variant, size })}>{iconToRender}</div>
      )}
      <div className='flex-1'>
        {title && (
          <Text
            variant={textVariant}
            weight='semibold'
            color='inherit'
            className='mb-1'>
            {title}
          </Text>
        )}
        {(description || children) && (
          <Text
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
    </div>
  )
}

export default Alert
