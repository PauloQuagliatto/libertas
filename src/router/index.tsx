import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
