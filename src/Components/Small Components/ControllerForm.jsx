import React, { useState } from 'react'

function ControllerForm() {
  const [text, settext] = useState("");

    return (
    <div>
        <input type="text" 
        value={text} 
        onChange={(e)=> settext(e.target.value)}
        />
        <p>you type in </p>
    </div>
  )
}

export default ControllerForm