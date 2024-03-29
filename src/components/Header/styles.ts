import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  marginBottom: '8px',
  padding: '4px 18px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$black300',
  color: '$white300',
  '& button': {
    cursor: 'pointer',
    transition: '0.2s ease',
    backgroundColor: 'transparent',
    border: 'none',
    color: '$white300',
    '&:hover' : {
      filter: 'brightness(0.9)'
    }
  }
})
