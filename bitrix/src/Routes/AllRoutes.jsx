import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AllRoutes