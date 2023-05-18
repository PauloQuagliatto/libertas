import { styled } from '../../styles'

export const Div = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  '& div': {
    maxWidth: '360px'
  }
})
