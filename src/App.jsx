import React, { useEffect, useMemo } from 'react'
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
import Products from './pages/dashboard/Products'
import Token from './components/ui/Token'
import StaffOrder from './components/StaffOrder'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, getUserProfile } from './redux/api/userApi'
import CanteenOrders from './components/CanteenOrders'
import Payment from './pages/Payment'
import QrCodeScanner from './components/QRCodeScanner'
import OrderRedeem from './pages/OrderRedeem'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  },[]);

  const dishData = useSelector(state => state.dish);
  const isCartEmpty = !useMemo(() => dishData.length > 0,[dishData]);

  return (
    <div>
      <CenteredNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes> 
      <div className='mt-20'>
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orders' element={<ProtectedRoute role={['admin','staff']}><CanteenOrders /></ProtectedRoute>} />
        <Route path='/scan' element={<ProtectedRoute role={['admin','staff']}><OrderRedeem /></ProtectedRoute>} />
        {!isCartEmpty && <Route path='/payment' element={<Payment />} />}
        <Route path='/dashboard' element={<ProtectedRoute role={['admin']}><Dashboard /></ProtectedRoute>} >
        <Route path='overview' element={<Overview />} />
        <Route path='staff' element={<Staff />} />
        <Route path='products' element={<Products />} />
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