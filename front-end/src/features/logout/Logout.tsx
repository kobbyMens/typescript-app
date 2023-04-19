import React, {useContext} from 'react'
import { AuthContext } from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'
import { LogoutRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './logout.css'

function Logout() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)


    const handleLogout = () => {
        localStorage.removeItem("link-up-user")
            auth.logout(() => { navigate("/")})
    }

  return (
    <IconButton onClick= {handleLogout}>
        <LogoutRounded
            className = "logout-button"
        /> 
    </IconButton>
  )
}

export default Logout