import { styled } from '../../styles'

export const PlusButtonContainer = styled('button', {
  width: '32px',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$green300',
  border: 'none',
  borderRadius: '999999px',
  color: '$white300',
  transition: '0.2s ease',
  '&:hover': {
    filter: 'brightness(0.9)'
  }
})
