import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


function AuthPages({children}: {children: JSX.Element}) {

    const location = useLocation()
    let auth = useContext(AuthContext)

    if (!auth.user) {
        //redirect the user to the login page and save the location they were trying to access
        return <Navigate to="/" state={{from: location}}></Navigate>
    }
    return (
        children
  )
}

export default AuthPages