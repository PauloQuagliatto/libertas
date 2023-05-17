import logoImg from '../../assets/logo.png'
import { Button, Container, Form, Input, Label } from './styles'

export function Login() {
  return (
    <Container>
      <img src={logoImg} alt='libertas-logo' />
      <Form>
        <Label>Usuario:</Label>
        <Input placeholder='Usuario' />
        <Label>Senha:</Label>
        <Input placeholder='Senha' type='password' />
        <Button type='submit'>Entrar</Button>
      </Form>
    </Container>
  )
}
