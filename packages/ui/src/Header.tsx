import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const header = cva('bg-accent-50', {
  variants: {
    fixed: {
      false: null,
      true: ['fixed', 'top-0', 'inset-x-0'],
    },
  },
  defaultVariants: {
    fixed: true,
  },
})

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof header> {}

export const Header = ({ className, fixed, ...props }: HeaderProps) => (
  <header
    className={header({ fixed, className })}
    data-component='Header'
    {...props}>
    <div className='mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8'>
      <h1 className='text-lg font-semibold'>MyOrg</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='/'
              className='hover:underline'>
              Home
            </a>
          </li>
          <li>
            <a
              href='/about'
              className='hover:underline'>
              About
            </a>
          </li>
          <li>
            <a
              href='/posts'
              className='hover:underline'>
              Posts
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='/login'
              className='hover:underline'>
              Login
            </a>
          </li>
          <li>
            <a
              href='/signup'
              className='hover:underline'>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
