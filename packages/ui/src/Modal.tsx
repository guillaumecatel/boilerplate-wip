import type { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div
      data-component='Modal'
      className='relative inset-0 z-50 grid place-content-center bg-black/50 p-4'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modalTitle'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
        <h2
          id='modalTitle'
          className='text-xl font-bold text-gray-900 sm:text-2xl'>
          Modal Title
        </h2>

        <div className='mt-4'>
          <p className='text-pretty text-gray-700'>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
