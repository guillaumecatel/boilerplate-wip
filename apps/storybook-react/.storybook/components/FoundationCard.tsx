import { type ReactNode } from 'react'

export interface Props {
  title: string
  children: ReactNode
}

export const FoundationCard = ({ title, children }: Props) => {
  return (
    <div className='border-base-200 dark:border-base-800 dark:bg-base-900 flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm'>
      <h2 className='mb-4 text-lg font-semibold'>{title}</h2>
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default FoundationCard
