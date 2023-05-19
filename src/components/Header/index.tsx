import { useContext } from 'react'
import { List, SignOut } from 'phosphor-react'

import { SideMenuContext } from '../../contexts/SideMenuContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { isOpen, setIsOpen } = useContext(SideMenuContext)

  return (
    <HeaderContainer>
      <button
        onClick={() => setIsOpen(true)}
      >
        <List
          size={32}
          className='button'
          role='button'
        />
      </button>
      <button>
        <SignOut size={32} />
      </button>
    </HeaderContainer>
  )
}
