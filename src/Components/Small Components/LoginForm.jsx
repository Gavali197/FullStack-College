import React from 'react'
import { useState } from 'react'

function LoginForm() {
    const [isVissi, setViss] = useState("");
  return (
    <div>
        Enter your name : 
        <input type="text"
        value={isVissi}
        onChange={(e)=> setViss(e.target.value)}
        />

        <p>welcome, {isVissi}</p>
        
    </div>
  )
}

export default LoginForm