import { Plus } from 'phosphor-react'

import { TableButton } from '../../components/TableButton'

import {
  TablesContainer,
  TablesGrid,
  TablesHeader,
  PlusButton
} from './styles'

export function Tables() {
  return (
    <TablesContainer>
      <TablesHeader>
        <h1>Tables</h1>
        <PlusButton>
          <Plus size={32} />
        </PlusButton>
      </TablesHeader>
      <TablesGrid>
        <TableButton id={'1'} tableOwner={'Xuxu'} />
        <TableButton id={'2'} tableOwner={'Paulo'} />
        <TableButton id={'3'} tableOwner={'Malu'} />
        <TableButton id={'4'} tableOwner={'Jess'} />
      </TablesGrid>
    </TablesContainer>
  )
}
