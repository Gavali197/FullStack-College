import React from 'react'
import { useState } from 'react'

function Toggle() {
  const [isVissible, setVissible] = useState(true) 
    return (
    <div>
        <button onClick={()=> setVissible(!isVissible)}>
            toggle message
        </button>
        {isVissible && <p>hello i am, visiable</p>}
    </div>
  )
}

export default Toggle