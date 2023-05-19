import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BeerBottle, House, User } from 'phosphor-react'

import { SideMenuContext } from '../../contexts/SideMenuContext'

import libertasLogo from '../../assets/logo.png'
import {
  CloseButton,
  Logo,
  Overlay,
  SideMenuContainer,
  SideMenuHeaderContainer,
  SideMenuItem,
  SideMenuRoot
} from './styles'


export function SideMenu() {
  const navigate = useNavigate()
  const { isOpen, setIsOpen } = useContext(SideMenuContext)

  function navigateAndClose(path: string) {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <SideMenuRoot css={{ visibility: isOpen ? 'visible' : 'hidden' }} >
      <Overlay />
      <SideMenuContainer>
        <SideMenuHeaderContainer>
          <Logo src={libertasLogo} alt='logo libertas' />
          <CloseButton onClick={() => setIsOpen(false)} />
        </SideMenuHeaderContainer>
        <SideMenuItem onClick={() => navigateAndClose('/tables')}>
          <h4>Mesas</h4>
          <House size={24} />
        </SideMenuItem>
        <SideMenuItem onClick={() => navigateAndClose('/beers')}>
          <h4>Cervejas</h4>
          <BeerBottle size={24} />
        </SideMenuItem>
        <SideMenuItem onClick={() => navigateAndClose('/users')}>
          <h4>Usuarios</h4>
          <User size={24} />
        </SideMenuItem>
      </SideMenuContainer>
    </SideMenuRoot>
  )
}
