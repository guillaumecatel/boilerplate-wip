import type { ReactNode } from 'react'

export interface BoxProps {
  children: ReactNode
}

export const Box = ({ children }: BoxProps) => {
  return <div data-component="Box">{children}</div>
}

export default Box
