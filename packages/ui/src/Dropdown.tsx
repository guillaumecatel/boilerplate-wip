import type { ReactNode } from 'react'

export interface DropdownProps {
  children: ReactNode
}

export const Dropdown = ({ children }: DropdownProps) => {
  return (
    <div data-component='Dropdown' className='relative'>
      <div
        role='menu'
        className='absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm'>
        <a
          href='#'
          className='block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900'
          role='menuitem'>
          Storefront
        </a>

        <a
          href='#'
          className='block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900'
          role='menuitem'>
          Warehouse
        </a>

        <a
          href='#'
          className='block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900'
          role='menuitem'>
          Stock
        </a>

        <button
          type='button'
          className='block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Dropdown
