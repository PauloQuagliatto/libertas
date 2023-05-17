import { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

type TProtected = {
  isSignedIn: boolean,
  children: ReactNode
}

export function PrivateRoute(props: any) {
  return !!props.isSignedIn ? (
    <>
      <Header />
      <Outlet />
    </>
  ) :
    <Navigate to="/" replace />
}
