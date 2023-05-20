import { ReactNode } from 'react'

import { Grid } from './styles'

type GridContainerProps = {
  children: ReactNode
}

export function GridContainer({ children }: GridContainerProps) {
  return (
    <Grid>
      {children}
    </Grid>
  )
}
