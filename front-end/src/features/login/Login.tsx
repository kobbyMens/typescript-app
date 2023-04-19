import React, { useContext } from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FormContainer, StyledForm } from '../signup/styledComponents'
import Logo from '../../assets/Logo.png';
import { LOGIN_ROUTE} from '../../util/apiroutes';
import { AuthContext } from '../../AuthProvider';

export interface UserSingUpDetials {
  email: string;
  password: string;
  
}

export default function Login() {

  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const [values, setValues] = useState<UserSingUpDetials> ({
    email: "",
    password: "",
  })

  useEffect(()=> {
    // if(localStorage.getItem("link-up-user")) {
    //   navigate("/chat")
    // }
     const userIsLoggedIn = async () => {
       const user = await JSON.parse(localStorage.getItem("link-up-user") || "{}")
  
       if(user.username) {
         auth.login(user.username, () => {
           navigate("/chat", {replace: true})
          })
        } 
       }
       userIsLoggedIn()
  }, )

  

  const toastOptions = {
    position: toast.POSITION.TOP_LEFT,
    pauseOnHover: true,
    autoclose: 7000,
  }

  const handleFormValidation = () => {
    let { email, password} = values 

    if (email === "") {
        toast.error("Email is required", toastOptions)
        return false

    } else if (password === "") {
        toast.error("Password is required", toastOptions)
        return false
    }

    return true
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setValues({...values, [event.currentTarget.name]: event.currentTarget.value, })
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(handleFormValidation()) {
      
      const { data } = await axios.post(LOGIN_ROUTE, values)

      if (data.status === 'Error') {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        delete data.user.password
        localStorage.setItem('link-up-user', JSON.stringify(data.user));
        auth.login(data.user.username, ()=> {
          navigate("/setAvatar");
        })         
      }
    }
  }
  
  return (
    <>
      <FormContainer>
        <StyledForm onSubmit={handleFormSubmit}>
          <div className="brand">
            <img src={Logo} alt="Logo"/>
            <h1>LinkUp</h1>
          </div>
          <input 
            type="email" 
            placeholder="Email"
            name="email"
            onChange={handleInputChange}

          />
          <input 
            type="password" 
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            
          />
        
          <button type="submit">Login</button>
          <span>Don't have an account ? <Link to="/signup">Signup</Link></span>
        </StyledForm>
      </FormContainer>
      <ToastContainer/>
    </>
  )
}

