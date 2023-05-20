import { GridContainer } from '../../components/GridContainer'
import { PageHeader } from '../../components/PageHeader'
import { PlusButton } from '../../components/PlusButton'
import { TableButton } from '../../components/TableButton'

export function Tables() {
  return (
    <>
      <PageHeader>
        <h1>Tables</h1>
        <PlusButton onClickFunction={() => { return }} />
      </PageHeader>
      <GridContainer>
        <TableButton id={'1'} tableOwner={'Xuxu'} />
        <TableButton id={'2'} tableOwner={'Paulo'} />
        <TableButton id={'3'} tableOwner={'Malu'} />
        <TableButton id={'4'} tableOwner={'Jess'} />
      </GridContainer>
    </>
  )
}
