import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const Usercontext = ({ children }) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("")
  return (
    <UserContext.Provider value={{username, email, setusername, setemail}}>
      {children}
    </UserContext.Provider>
  )
}

export default Usercontext