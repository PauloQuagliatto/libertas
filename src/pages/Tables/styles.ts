import { styled } from '../../styles'

export const TablesContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '6px'
})

export const TablesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 72px)',
  gap: '24px'
})

export const TablesHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const PlusButton = styled('button', {
  width: '32px',
  height: '32px',
  backgroundColor: '$green300',
  border: 'none',
  borderRadius: '999999px',
  color: '$white300',
  transition: '0.2s ease',
  '&:hover': {
    filter: 'brightness(0.9)'
  }
})
