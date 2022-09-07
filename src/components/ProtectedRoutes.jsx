import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  
    const isLogged = localStorage.getItem('token')

    if (isLogged) {
        return <Outlet />
    } else {
        return <Navigate to='/login'/>
    }
  
    return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes