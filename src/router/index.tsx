import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'

import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { Tables } from '../pages/Tables'
import { Table } from '../pages/Table'

export function AppRouter() {
  const isSignedIn = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dashboard'
          element={
            <PrivateRoute isSignedIn={isSignedIn}>
              <Dashboard />
            </PrivateRoute>}
        />
        <Route path='tables'
          element={
            <PrivateRoute isSignedIn={isSignedIn}>
              <Tables />
            </PrivateRoute>}
        >
          <Route path='/tables' element={<Tables />} />
          <Route path=':id'
            element={<Table />}
          />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  )
}
