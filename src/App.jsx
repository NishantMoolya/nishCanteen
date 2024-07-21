import React from 'react'
import CenteredNavbar from './components/CenteredNavbar'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './pages/dashboard/Overview'
import Staff from './pages/dashboard/Staff'
import MenuDisplay from './pages/dashboard/MenuDisplay'
import Login from './pages/Login'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Performance from './pages/dashboard/Performance'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <CenteredNavbar />
      {/* <div className='mt-12'> */}
      <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/pay' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} >
        <Route element={<Overview />} index />
        <Route path='staff' element={<Staff />} />
        <Route path='menu' element={<MenuDisplay />} />
        <Route path='performance' element={<Performance />} />
        </Route>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App