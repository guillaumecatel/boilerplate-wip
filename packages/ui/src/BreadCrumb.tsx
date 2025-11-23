import { cva } from 'class-variance-authority'
import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { Stack } from './Stack'
import { Text } from './Text'

const breadcrumbLinkVariants = cva(
  'transition-colors hover:text-accent-600 dark:hover:text-accent-400',
  {
    variants: {
      active: {
        true: 'text-base-900 dark:text-base-100 pointer-events-none',
        false: 'text-base-600 dark:text-base-400',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export interface BreadCrumbItem {
  label: ReactNode
  href?: string
  as?: ElementType
}

export interface BreadCrumbPropsBase extends HTMLAttributes<HTMLElement> {
  items: BreadCrumbItem[]
  separator?: ReactNode
  ariaLabel?: string
  size?: 'sm' | 'md' | 'lg'
}

export type BreadCrumbProps = BreadCrumbPropsBase

export const BreadCrumb = ({
  items,
  separator,
  size = 'md',
  ariaLabel = 'Breadcrumb',
  className,
  ...props
}: BreadCrumbProps) => {
  const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 18
  const gapSize = size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md'

  return (
    <nav
      data-component='BreadCrumb'
      aria-label={ariaLabel}
      className={className}
      {...props}>
      <Stack
        as='ol'
        direction='row'
        align='center'
        gap={gapSize}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const LinkComponent = (item.as || 'a') as ElementType
          const linkProps: Record<string, unknown> = {}

          if (!item.as && item.href) {
            linkProps.href = item.href
          }

          if (isLast) {
            linkProps['aria-current'] = 'page'
          }

          return (
            <li
              key={index}
              className='flex items-center gap-1'>
              <LinkComponent
                className={breadcrumbLinkVariants({ active: isLast })}
                {...linkProps}>
                <Text
                  variant={
                    size === 'sm'
                      ? 'body-small'
                      : size === 'md'
                        ? 'body-medium'
                        : 'body-large'
                  }
                  color='inherit'>
                  {item.label}
                </Text>
              </LinkComponent>
              {!isLast && (
                <span
                  className='text-base-400 dark:text-base-600 rtl:rotate-180'
                  aria-hidden='true'>
                  {separator || (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                  )}
                </span>
              )}
            </li>
          )
        })}
      </Stack>
    </nav>
  )
}

export default BreadCrumb
