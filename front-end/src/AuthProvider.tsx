import React,  { createContext, useState } from 'react'

interface AuthContextType {
    user: any;
    login: (user: string, callback: VoidFunction) => void;
    logout: (callback: VoidFunction) => void;
}

export let AuthContext = createContext<AuthContextType>(null!)

function AuthProvider({ children }: {children: React.ReactNode}) {

  let [user, setUser] = useState<any>(null);
  
  let login = (newUser: string, callback: VoidFunction) => {
    setUser(newUser)
    callback();
  }

  let logout = (callback: VoidFunction) => {
    setUser(null);
    callback()
  }

  let value = {user, login, logout}
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider