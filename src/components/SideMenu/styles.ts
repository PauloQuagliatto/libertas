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
  position: 'fixed',
  width: '50%',
  maxWidth: '300px',
  height: '100%',
  padding: '15px 6px 0 24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '25px',
  backgroundColor: '$black500',
})

export const SideMenuHeaderContainer = styled('div', {
  width: '100%',
  marginBottom: '27px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start'
})

export const Logo = styled('img', {
  width: '62px',
  height: '62px',
})

export const CloseButton = styled(X, {
  fontSize: 32,
  color: '$white300',
  cursor: 'pointer',
  transition: '0.2s color ease',
  '&:hover': {
    color: '$red300'
  }
})

export const SideMenuItem = styled('button', {
  width: '100%',
  paddingLeft: '15px',
  paddingRight: '13px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'transparent',
  color: '$white300',
  border: 'none',
  transition: '0.2s ease',
  '& h4': {
    fontSize: '24px',
    fontWeight: 400,
  },
  '&:hover': {
    color: '$yellow500'
  }
})
