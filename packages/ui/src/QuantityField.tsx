import type { ReactNode } from 'react'

export interface QuantityFieldProps {
  children: ReactNode
}

export const QuantityField = ({ children }: QuantityFieldProps) => {
  return (
    <div data-component='QuantityField'>
      <label htmlFor='Quantity' className='sr-only'>
        {' '}
        {children}{' '}
      </label>

      <div className='flex items-center rounded-sm border border-gray-200'>
        <button
          type='button'
          className='size-10 leading-10 text-gray-600 transition hover:opacity-75'>
          −
        </button>

        <input
          type='number'
          id='Quantity'
          value='1'
          className='[&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none h-10 w-16 border-transparent text-center [-moz-appearance:textfield] sm:text-sm'
        />

        <button
          type='button'
          className='size-10 leading-10 text-gray-600 transition hover:opacity-75'>
          +
        </button>
      </div>
    </div>
  )
}

export default QuantityField
