import { styled } from '../../styles'

export const TableButtonContainer = styled('button', {
  width: '72px',
  height: '72px',
  padding: '26px 12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$yellow300',
  border: 'none',
  borderRadius: '9999px',
  '& h4': {
    color: '$black500'
  }
})
