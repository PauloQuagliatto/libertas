import { ReactNode } from 'react'

import { PagesHeaderContainer } from './styles'

type PagesHeaderProps = {
    children: ReactNode
}

export function PageHeader({ children }: PagesHeaderProps) {
    return (
      <PagesHeaderContainer>
        {children}
      </PagesHeaderContainer>
    )
  }
