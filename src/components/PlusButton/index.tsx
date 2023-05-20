import { Plus } from 'phosphor-react'

import { PlusButtonContainer } from './styles'

type PlusButtonProps = {
  onClickFunction: () => void
}

export function PlusButton({ onClickFunction }: PlusButtonProps) {
  return (
    <PlusButtonContainer onClick={() => onClickFunction()}>
      <Plus size={24} />
    </PlusButtonContainer>
  )
}
