import { cva, cx, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

// Table Container Variants
const tableContainerVariants = cva(
  'overflow-x-auto rounded-lg border border-base-300 dark:border-base-700',
  {
    variants: {
      variant: {
        default: 'bg-base-0 dark:bg-base-950',
        striped: 'bg-base-0 dark:bg-base-950',
        bordered: 'bg-base-0 dark:bg-base-950',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

// Table Root Variants
const tableVariants = cva(
  'min-w-full divide-y divide-base-300 dark:divide-base-700',
  {
    variants: {
      variant: {
        default: '',
        striped: '',
        bordered: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

// Table Header Variants
const tableHeaderVariants = cva(
  'bg-base-100 dark:bg-base-900 text-left text-xs font-semibold uppercase tracking-wider text-base-700 dark:text-base-300',
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

// Table Header Cell Variants
const tableHeaderCellVariants = cva(
  'font-semibold text-base-900 dark:text-base-100',
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
      },
      textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      wrap: {
        true: '',
        false: 'whitespace-nowrap',
      },
    },
    defaultVariants: {
      size: 'md',
      textAlign: 'left',
      wrap: false,
    },
  },
)

// Table Body Variants
const tableBodyVariants = cva(
  'divide-y divide-base-200 dark:divide-base-800 bg-base-0 dark:bg-base-950',
  {
    variants: {},
    defaultVariants: {},
  },
)

// Table Row Variants
const tableRowVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: '',
      clickable: 'cursor-pointer',
    },
    striped: {
      true: 'even:bg-base-50 dark:even:bg-base-900',
      false: '',
    },
    hoverable: {
      true: 'hover:bg-base-100 dark:hover:bg-base-800',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    striped: false,
    hoverable: true,
  },
})

// Table Cell Variants
const tableCellVariants = cva('text-base-900 dark:text-base-100', {
  variants: {
    size: {
      sm: 'px-3 py-2 text-xs',
      md: 'px-4 py-3 text-sm',
      lg: 'px-6 py-4 text-base',
    },
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    wrap: {
      true: '',
      false: 'whitespace-nowrap',
    },
  },
  defaultVariants: {
    size: 'md',
    textAlign: 'left',
    wrap: false,
  },
})

// Table Caption Variants
const tableCaptionVariants = cva(
  'caption-top py-2 text-sm text-base-600 dark:text-base-400',
  {
    variants: {
      position: {
        top: 'caption-top',
        bottom: 'caption-bottom',
      },
    },
    defaultVariants: {
      position: 'top',
    },
  },
)

// Table Footer Variants
const tableFooterVariants = cva(
  'bg-base-100 dark:bg-base-900 font-semibold text-base-900 dark:text-base-100',
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

// TableContainer Component
export interface TableContainerProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof tableContainerVariants> {}

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(tableContainerVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)

TableContainer.displayName = 'TableContainer'

// Table Component
export interface TableProps
  extends ComponentPropsWithoutRef<'table'>,
    VariantProps<typeof tableVariants> {}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={cx(tableVariants({ variant }), className)}
        {...props}
      />
    )
  },
)

Table.displayName = 'Table'

// TableHeader Component
export interface TableHeaderProps
  extends ComponentPropsWithoutRef<'thead'>,
    VariantProps<typeof tableHeaderVariants> {}

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, size, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={cx(tableHeaderVariants({ size }), className)}
      {...props}
    />
  )
})

TableHeader.displayName = 'TableHeader'

// TableHeaderCell Component
export interface TableHeaderCellProps
  extends ComponentPropsWithoutRef<'th'>,
    VariantProps<typeof tableHeaderCellVariants> {}

export const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(({ className, size, textAlign, wrap, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={cx(
        tableHeaderCellVariants({ size, textAlign, wrap }),
        className,
      )}
      {...props}
    />
  )
})

TableHeaderCell.displayName = 'TableHeaderCell'

// TableBody Component
export interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cx(tableBodyVariants(), className)}
        {...props}
      />
    )
  },
)

TableBody.displayName = 'TableBody'

// TableRow Component
export interface TableRowProps
  extends ComponentPropsWithoutRef<'tr'>,
    VariantProps<typeof tableRowVariants> {}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, variant, striped, hoverable, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cx(
          tableRowVariants({ variant, striped, hoverable }),
          className,
        )}
        {...props}
      />
    )
  },
)

TableRow.displayName = 'TableRow'

// TableCell Component
export interface TableCellProps
  extends ComponentPropsWithoutRef<'td'>,
    VariantProps<typeof tableCellVariants> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, size, textAlign, wrap, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cx(tableCellVariants({ size, textAlign, wrap }), className)}
        {...props}
      />
    )
  },
)

TableCell.displayName = 'TableCell'

// TableCaption Component
export interface TableCaptionProps
  extends ComponentPropsWithoutRef<'caption'>,
    VariantProps<typeof tableCaptionVariants> {}

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ className, position, ...props }, ref) => {
  return (
    <caption
      ref={ref}
      className={cx(tableCaptionVariants({ position }), className)}
      {...props}
    />
  )
})

TableCaption.displayName = 'TableCaption'

// TableFooter Component
export interface TableFooterProps
  extends ComponentPropsWithoutRef<'tfoot'>,
    VariantProps<typeof tableFooterVariants> {}

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, size, ...props }, ref) => {
  return (
    <tfoot
      ref={ref}
      className={cx(tableFooterVariants({ size }), className)}
      {...props}
    />
  )
})

TableFooter.displayName = 'TableFooter'

export default Table
