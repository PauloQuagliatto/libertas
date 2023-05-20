import logoImg from '../../assets/logo.png'
import { Button, Form, Input, Label, LoginContainer } from './styles'

export function Login() {
  return (
    <LoginContainer>
      <img src={logoImg} alt='libertas-logo' />
      <Form>
        <Label>Usuario:</Label>
        <Input placeholder='Usuario' />
        <Label>Senha:</Label>
        <Input placeholder='Senha' type='password' />
        <Button type='submit'>Entrar</Button>
      </Form>
    </LoginContainer>
  )
}
