import { styled } from '../../styles'

export const TablesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 72px)',
  gap: '24px'
})

export const TablesHeader = styled('div', {
  width: '100%',
  margin: '6px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})
