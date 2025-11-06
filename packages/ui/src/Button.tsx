import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className='group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:ring-3 focus:outline-hidden'>
      <span className='absolute inset-y-0 left-0 w-0.5 bg-indigo-600 transition-all group-hover:w-full'></span>
      <span className='relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white'>
        {children}
      </span>
    </button>
  )
}

export default Button
