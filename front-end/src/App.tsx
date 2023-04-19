import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './features/signup/SignUp';
import Login from './features/login/Login';
import Chat from './features/chat/Chat';
import AuthProvider from './AuthProvider';
import AuthPages from './features/AuthPages';
import SetAvatar from './features/avatar/SetAvatar';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route 
            path='/setAvatar' 
            element= {
              <AuthPages>
                <SetAvatar/>
              </AuthPages>
              
            } 
          />
          <Route 
            path="/chat" 
            element = { 
              <AuthPages>
                <Chat/>
              </AuthPages>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App;
