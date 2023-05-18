import { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { SideMenu } from '../components/SideMenu'

type TProtected = {
  isSignedIn: boolean,
  children: ReactNode
}

export function PrivateRoute(props: any) {
  return !!props.isSignedIn ? (
    <>
      <Header />
      <Outlet />
      <SideMenu />
    </>
  ) :
    <Navigate to="/" replace />
}
