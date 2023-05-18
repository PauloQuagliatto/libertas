import { House } from 'phosphor-react'
import { useContext } from 'react'

import { SideMenuContext } from '../../contexts/SideMenuContext'

import libertasLogo from '../../assets/logo.png'
import {
  CloseButton,
  Logo,
  Overlay,
  SideMenuContainer,
  SideMenuItem,
  SideMenuRoot
} from './styles'


export function SideMenu() {
  const { isOpen, setIsOpen } = useContext(SideMenuContext)

  return (
    <SideMenuRoot>
      <Overlay css={{ visibility: isOpen ? 'visible' : 'hidden' }} />
      <SideMenuContainer css={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <CloseButton onClick={() => setIsOpen(false)} />
        <Logo src={libertasLogo} alt='logo libertas'/>
        <SideMenuItem>
          <h4>Mesas</h4>
          <House size={24} />
        </SideMenuItem>
      </SideMenuContainer>
    </SideMenuRoot>
  )
}
