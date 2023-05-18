import { ReactNode } from 'react'

import { Div } from './styles'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <Div>
      {children}
    </Div>
  )
}
