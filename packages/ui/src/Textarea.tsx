import type { ReactNode } from 'react'

export interface TextareaProps {
  children: ReactNode
}

export const Textarea = ({ children }: TextareaProps) => {
  return (
    <label htmlFor='Notes'>
      <span className='text-sm font-medium text-gray-700'> Notes </span>

      <textarea
        data-component='Textarea'
        id='Notes'
        className='mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm sm:text-sm'
        rows={4}></textarea>
    </label>
  )
}

export default Textarea
