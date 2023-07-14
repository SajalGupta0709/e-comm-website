import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const isAuth=localStorage.getItem("token")
  return isAuth ? children:<Navigate replace to="/login"/>
}

export default ProtectedRoute