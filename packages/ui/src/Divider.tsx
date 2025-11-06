import type { ReactNode } from 'react'

export interface DividerProps {
  children: ReactNode
}

export const Divider = ({ children }: DividerProps) => {
  return (
    <span data-component='Divider' className='flex items-center'>
      <span className='h-px flex-1 bg-gray-300'></span>

      <span className='shrink-0 px-4 text-gray-900'>{children}</span>

      <span className='h-px flex-1 bg-gray-300'></span>
    </span>
  )
}

export default Divider
