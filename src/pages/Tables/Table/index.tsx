import { GridContainer } from '../../../components/GridContainer'
import { PageHeader } from '../../../components/PageHeader'
import { PlusButton } from '../../../components/PlusButton'

import { ProductContainer } from './styles'

export function Table() {
  return (
    <>
      <PageHeader>
        <h1>R$ 55,00</h1>
        <PlusButton onClickFunction={() => { return }} />
      </PageHeader>
      <GridContainer>
      </GridContainer>
    </>
  )
}
