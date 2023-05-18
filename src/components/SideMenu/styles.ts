import { Pen, X } from 'phosphor-react'

import { styled } from '../../styles'

export const SideMenuRoot = styled('div', {
  position: 'fixed',
  zIndex: 1,
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
})

export const Overlay = styled('div', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(29, 28, 28, 0.8)'
})

export const SideMenuContainer = styled('div', {
  zIndex: 2,
  position: 'relative',
  width: '50%',
  height: '100%',
  padding: '46px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '$black500',
})

export const Logo = styled('img', {
  width: '62px',
  height: '62px'
})

export const CloseButton = styled(X, {
  position: 'absolute',
  top: '15px',
  right: '6px',
  fontSize: 32,
  color: '$white300'
})

export const SideMenuItem = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$white300',
  fontWeight: 400,
  fontSize: '24px'
})
