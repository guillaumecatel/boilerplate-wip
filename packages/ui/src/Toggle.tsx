import type { ReactNode } from 'react'

export interface ToggleProps {
  children: ReactNode
}

export const Toggle = ({ children }: ToggleProps) => {
  return (
    <label
      htmlFor='AcceptConditions'
      className='relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-green-500'>
      <input
        data-component='Toggle'
        type='checkbox'
        id='AcceptConditions'
        className='peer sr-only'
      />

      <span className='absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6'></span>
    </label>
  )
}

export default Toggle
