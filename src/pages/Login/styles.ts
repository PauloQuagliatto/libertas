import { styled } from '../../styles'

export const LoginContainer = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    width: '194px',
    height: '194px',
    marginBottom: '50px'
  }
})

export const Form = styled('form', {
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start'
})

export const Label = styled('label', {
  padding: '4px 0',
  fontSize: '16px',
  fontWeight: '400',
})

export const Input = styled('input', {
  width: '100%',
  padding: '10px',
  backgroundColor: '$black300',
  border: 'none',
  borderRadius: '6px',
  color: '$white300',
  fontSize: '16px',
  fontWeight: '400',
  '&:focus-within': {
    outline: 'none'
  },
})

export const Button = styled('button', {
  width: '100%',
  marginTop: '14px',
  padding: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$yellow300',
  border: 'none',
  borderRadius: '6px',
  color: '$black500',
  fontSize: '24px',
  transition: '0.2s ease',
  '&:hover': {
    filter: 'brightness(0.9)'
  },
})
