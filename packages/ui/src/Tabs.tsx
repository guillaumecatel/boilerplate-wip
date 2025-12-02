import { cva, cx, type VariantProps } from 'class-variance-authority'
import { Tabs as RadixTabs } from 'radix-ui'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import Divider from './Divider'

// Tabs Root Variants
const tabsRootVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'flex flex-col',
      vertical: 'flex flex-row',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

// Tabs List Variants
const tabsListVariants = cva('flex shrink-0 ', {
  variants: {
    orientation: {
      horizontal: 'border-b',
      vertical: 'flex-col',
    },
    variant: {
      line: '',
      enclosed: 'bg-base-50 dark:bg-base-900 rounded-lg p-1',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'line',
      class: 'gap-0',
    },
    {
      orientation: 'vertical',
      variant: 'line',
      class: 'gap-2',
    },
    {
      orientation: 'horizontal',
      variant: 'enclosed',
      class: 'gap-1',
    },
    {
      orientation: 'vertical',
      variant: 'enclosed',
      class: 'gap-1',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'line',
  },
})

// Tabs Trigger Variants
const tabsTriggerVariants = cva(
  'inline-flex items-center justify-start whitespace-nowrap font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      orientation: {
        horizontal: 'px-4',
        vertical: 'w-full',
      },
      variant: {
        line: 'border-b-2 border-transparent text-base-600 dark:text-base-400 hover:text-base-900 dark:hover:text-base-100 data-[state=active]:border-accent-500 data-[state=active]:text-accent-600 dark:data-[state=active]:text-accent-400',
        enclosed:
          'rounded-md text-base-600 dark:text-base-400 hover:text-base-900 dark:hover:text-base-100 data-[state=active]:bg-base-0 dark:data-[state=active]:bg-base-950 data-[state=active]:text-base-900 dark:data-[state=active]:text-base-100 data-[state=active]:shadow-sm',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    compoundVariants: [
      // Line variant horizontal
      { variant: 'line', orientation: 'horizontal', size: 'sm', class: 'py-1' },
      { variant: 'line', orientation: 'horizontal', size: 'md', class: 'py-2' },
      { variant: 'line', orientation: 'horizontal', size: 'lg', class: 'py-3' },
      // Line variant vertical
      {
        variant: 'line',
        orientation: 'vertical',
        size: 'sm',
        class: 'py-2 px-3 justify-start',
      },
      {
        variant: 'line',
        orientation: 'vertical',
        size: 'md',
        class: 'py-2.5 px-4 justify-start',
      },
      {
        variant: 'line',
        orientation: 'vertical',
        size: 'lg',
        class: 'py-3 px-4 justify-start',
      },
      // Enclosed variant
      { variant: 'enclosed', size: 'sm', class: 'px-3 py-1.5' },
      { variant: 'enclosed', size: 'md', class: 'px-4 py-2' },
      { variant: 'enclosed', size: 'lg', class: 'px-5 py-2.5' },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'line',
      size: 'md',
    },
  },
)

// Tabs Content Variants
const tabsContentVariants = cva(
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

// Root Component
export interface TabsRootProps
  extends Omit<ComponentPropsWithoutRef<typeof RadixTabs.Root>, 'orientation'>,
    VariantProps<typeof tabsRootVariants> {}

export const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <RadixTabs.Root
        ref={ref}
        orientation={orientation || undefined}
        className={cx(tabsRootVariants({ orientation }), className)}
        {...props}
      />
    )
  },
)

TabsRoot.displayName = 'TabsRoot'

// List Component
export interface TabsListProps
  extends ComponentPropsWithoutRef<typeof RadixTabs.List>,
    VariantProps<typeof tabsListVariants> {}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, orientation, variant, ...props }, ref) => {
    return (
      <>
        <RadixTabs.List
          ref={ref}
          className={cx(tabsListVariants({ orientation, variant }), className)}
          {...props}
        />
        <Divider orientation={orientation} />
      </>
    )
  },
)

TabsList.displayName = 'TabsList'

// Trigger Component
export interface TabsTriggerProps
  extends ComponentPropsWithoutRef<typeof RadixTabs.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, orientation, variant, size, ...props }, ref) => {
    return (
      <RadixTabs.Trigger
        ref={ref}
        className={cx(
          tabsTriggerVariants({ orientation, variant, size }),
          className,
        )}
        {...props}
      />
    )
  },
)

TabsTrigger.displayName = 'TabsTrigger'

// Content Component
export interface TabsContentProps
  extends ComponentPropsWithoutRef<typeof RadixTabs.Content>,
    VariantProps<typeof tabsContentVariants> {}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <RadixTabs.Content
        ref={ref}
        className={cx(tabsContentVariants({ size }), className)}
        {...props}
      />
    )
  },
)

TabsContent.displayName = 'TabsContent'

// Compound export
export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
}

export default Tabs
