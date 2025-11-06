import type { ReactNode } from 'react'

export interface CheckboxProps {
  children: ReactNode
}

export const Checkbox = () => {
  return (
    <label htmlFor='Option1' className='inline-flex items-center gap-3'>
      <input
        data-component='Checkbox'
        type='checkbox'
        className='size-5 rounded border-gray-300 shadow-sm'
        id='Option1'
      />

      <span className='font-medium text-gray-700'> Option 1 </span>
    </label>
  )
}

export default Checkbox
