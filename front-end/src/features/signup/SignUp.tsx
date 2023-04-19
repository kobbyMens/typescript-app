import React, { useContext } from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FormContainer, StyledForm } from './styledComponents'
import Logo from '../../assets/Logo.png';
import { SIGNUP_ROUTE } from '../../util/apiroutes';
import { AuthContext } from '../../AuthProvider';

export interface UserSingUpDetials {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export default function SignUp() {

  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  //const location = useLocation()
  //let from = location.state?.from?.pathname || '/setAvatar'
  const [values, setValues] = useState<UserSingUpDetials> ({
    username: "",
    email: "",
    password: "",
    repeatPassword: ""
  })

  useEffect(()=> {
    
  }, )

  const toastOptions = {
    position: toast.POSITION.TOP_LEFT,
    pauseOnHover: true,
    autoclose: 7000,
  }

  const handleFormValidation = () => {
    let {username, email, password, repeatPassword} = values

    //repeat password validation
   
    if  (password !== repeatPassword) {
      toast.error("Repeat password and password must be the same", toastOptions);
      return false;  

    } else if(username.length < 4) {
      toast.error("Username should be more than 4 charactes", toastOptions);
      return false;

    } else if(password.length < 8) {
      toast.error("Password should be at least 8 characters", toastOptions);
      return false;
    }
    else if (email === "") {
      toast.error("Email is required", toastOptions)
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
      
      const { data } = await axios.post(SIGNUP_ROUTE, values)

      if (data.status === 'Error') {
        toast.error(data.message, toastOptions);
      } 
      if (data.status === true) {
        localStorage.setItem('link-up-user', JSON.stringify(data.user));
        auth.login(data.user.username, () => {
          navigate("/setAvatar", {replace: true});
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
            type="text" 
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
            required
          />
          <input 
            type="email" 
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
            required
          />
          <input 
            type="password" 
            placeholder="Repeat Password"
            name="repeatPassword"
            onChange={handleInputChange}
          />
          <button type="submit">Sign Up</button>
          <span>Already a registered user ? <Link to="/">Login</Link></span>
        </StyledForm>
      </FormContainer>
      <ToastContainer/>
    </>
  )
}

