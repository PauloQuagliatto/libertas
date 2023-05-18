import { useContext } from 'react'
import { List, SignOut } from 'phosphor-react'

import { SideMenuContext } from '../../contexts/SideMenuContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { setIsOpen } = useContext(SideMenuContext)

  return (
    <HeaderContainer>
      <List
        size={32}
        className='button'
        onClick={() => setIsOpen(true)}
      />
      <SignOut size={32} className='button' />
    </HeaderContainer>
  )
}
