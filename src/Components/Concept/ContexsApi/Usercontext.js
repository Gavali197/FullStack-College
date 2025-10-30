import React, { Children, createContext, useState } from 'react'

export const UserContext = createContext();

const Usercontext = ({Children}) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("")  
  return (
    <div>
      <UserContext.Provider value={{username, email, setusername, setemail}}>
        {Children}
      </UserContext.Provider>
    </div>
  )
}

export default Usercontext