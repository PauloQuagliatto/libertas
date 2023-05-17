import { useNavigate } from 'react-router-dom'

import { TableContainer } from './styles'

type TableProps = {
  id: string,
  ownerName: string
}

export function Table({ id, ownerName, }: TableProps) {
  const navigate = useNavigate()

  return (
    <TableContainer onClick={navigate(id)}>
      <h4>{ownerName}</h4>
    </TableContainer>
  )
}
