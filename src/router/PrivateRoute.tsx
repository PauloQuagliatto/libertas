import { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { SideMenu } from '../components/SideMenu'
import { Container } from '../components/Container'

type TProtected = {
  isSignedIn: boolean,
  children: ReactNode
}

export function PrivateRoute(props: any) {
  return !!props.isSignedIn ? (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <SideMenu />
    </>
  ) :
    <Navigate to="/" replace />
}
