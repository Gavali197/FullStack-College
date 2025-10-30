import React, { Children, createContext, useState } from 'react'

export const UserContext = createContext();

const Usercontext = ({Children}) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("")  
  return (
    <div>
      
    </div>
  )
}

export default Usercontext