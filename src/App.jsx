import React from 'react'
import CenteredNavbar from './components/CenteredNavbar'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <CenteredNavbar />
      <div className='mt-12'>
      <Routes>
        <Route path='/' element={''} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </div>
    </div>
  )
}

export default App