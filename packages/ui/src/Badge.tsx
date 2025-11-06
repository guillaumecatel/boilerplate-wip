import type { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span
      data-component='Badge'
      className='rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700'>
      {children}
    </span>
  )
}

export default Badge
