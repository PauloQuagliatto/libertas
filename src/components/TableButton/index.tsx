import { useNavigate } from 'react-router-dom'

import { TableButtonContainer } from './styles'

type TableButtonProps = {
  id: string,
  tableOwner: string
}

export function TableButton({ id, tableOwner, }: TableButtonProps) {
  const navigate = useNavigate()

  return (
    <TableButtonContainer onClick={() => navigate(id)}>
      <h4>{tableOwner}</h4>
    </TableButtonContainer>
  )
}
