import React from 'react'
import { useSelector } from 'react-redux'
import Unauthorized from '../pages/Unauthorized';

const ProtectedRoute = ({ role,children }) => {
  const userRole = useSelector(state => state.user.role);
  return (
    <>
        {role.includes(userRole)?<>{children}</>:<Unauthorized />}
    </>
  )
}

export default ProtectedRoute