import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
// import Dashboard from './Home'
import Login from './Login'
import Pricing from './Pricing'
import Tools from './Tools'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/tools' element={<Tools />} />
    </Routes>
  )
}

export default AllRoutes