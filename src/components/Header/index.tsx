import { List, SignOut } from 'phosphor-react'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <List size={32} className='button' />
      <SignOut size={32} className='button' />
    </HeaderContainer>
  )
}
